import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateLoginDto } from './dto/create-login.dto.';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() data:CreateLoginDto){
    return this.authService.signIn(data)
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout (@Req() req:Request){
    return this.authService.logout(req.user['sub'])
  }

  @Patch('profile/:id')
  async updateProfile(@Param('id') userId:string, @Body() updateUserDto : UpdateUserDto){
    return this.authService.updateProfil(userId , updateUserDto)
  }
}
