import { Link } from 'react-router-dom';
import footer from '../../assets/img/hero/footbg.png'
import logo from '../../assets/img/hero/logo.png'

export default () => {
    const style = {
        //backgroundImage: `url(${footer})`,
        backgroundColor:'#11114E',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      };
    return(
        <>
  <div className='mt-5' style={{paddingTop:'100px'}}>
<footer className="footer-section"style={style}>

  <div className="footer__text set-bg" data-setbg="img/footer-bg.png">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="footer__text-about">
            <div className="footer__logo">
            <img src={`${logo}`} alt width="50px"  height="50px"/>
            </div>
            <p>ITGust Company is a computer engineering, created in 2022. Specialized in development, 
              IT services, user experience, design, development, Data Science, DevOps, Artificial Intelligence, 
              BI-Business Intelligent, IT-Security, and Webdesign. </p>
            <div className="footer__social">
            <Link to="https://www.facebook.com/itgust.group"><i className="fa fa-facebook" /></Link>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-youtube-play" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="footer__text-widget">
            <h5>Menu</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="footer__text-widget">
            <h5>Services</h5>
            <ul>
              <li><a href="#">Data science</a></li>
              <li><a href="#">Business Intelligence</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">IT-Security</a></li>
              <li><a href="#">Artificial Intelligence</a></li>
              <li><a href="#">DevOps</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="footer__text-widget">
            <h5>cONTACT US</h5>
            <ul className="footer__widget-info">
              <li><span className="fa fa-map-marker" /> Rue de Khartoum, 1002 Tunis ,Tunisie
                </li>
              <li><span className="fa fa-phone-square" /> (+216) - 52 012 022</li>
              <li><span className="fa fa-envelope" /> contact@itgust-group.tn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__text-copyright">
        <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        © Copyright 2022. IT GUST Company 
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
      </div>
    </div>
  </div>
</footer>
</div>



        </>
    )
}