import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import {JwtService } from '@nestjs/jwt'
import { CreateLoginDto } from './dto/create-login.dto.';
import * as argon2 from 'argon2';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService,
        private configService: ConfigService,
        private jwtService : JwtService
    ){}

    async signIn(data: CreateLoginDto){
        //verifie si l'utilisateur existe
        const user= await this.usersService.findByUserName(data.userName);
        if(!user){
            throw new BadRequestException("User does not exist")
        }
        const passwordMatches=await argon2.verify(user.password , data.password)
        if(!passwordMatches){
            throw new BadRequestException('password is incorrect')
        }
        const tokens=await this.getToken(user._id , user.userName)
        await this.updateRefreshToken(user._id , tokens.refreshToken)
        return {tokens , user}
    }

    //generate token
    async getToken (userId:string , userName:string){
        const [accessToken , refreshToken]=await Promise.all([
            this.jwtService.signAsync({
                sub:userId,
                userName
            },
            {
                secret:this.configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
                expiresIn:'8d'
            }),
            this.jwtService.signAsync({
                sub:userId, userName
            },{
                secret:this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
                expiresIn:'10d'
            })
        ])
        return {accessToken , refreshToken}
    }
    
    //ajouter refreshtoken crypter dans user
    async updateRefreshToken (userId:string ,refreshToken:string){
        const hashedRefreshToken=await argon2.hash(refreshToken)
        await this.usersService.updateUser(userId ,{
            refreshToken:hashedRefreshToken
        })
    }

    async logout (userId:string){
        this.usersService.updateUser(userId , {refreshToken:null})
    }

    async updateProfil(userId:string , updateUserDto:UpdateUserDto){
        const user=await this.usersService.updateUser(userId , updateUserDto)

        const tokens=await this.getToken(user._id , user.userName)
        await this.updateRefreshToken(user._id , tokens.refreshToken)
        return {tokens , user}
    }
}
