import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

export default () => {
    return(
        <>
        <Navbar/>
        
   <div>
  <section className="contact-section spad mt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="contact__text">
            <h3>Contact info</h3>
            <p>For further informations, do not hesitate to contact us</p>
            <ul>
              <li>
                <span className="fa fa-map-marker" />
                <h5>Address</h5>
                <p>Rue de Khartoum, 1002 Tunis Imm.khartoum 2éme étage 1002 Tunis, Tunisie</p>
              </li>
              <li>
                <span className="fa fa-mobile" />
                <h5>Phone</h5>
                <p>(+216) - 52 012 022</p>
              </li>
              <li>
                <span className="fa fa-envelope" />
                <h5>Email</h5>
                <p>contact@itgust-group.tn</p>
              </li>
            </ul>
            <div className="contact__social">
              <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
              <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
              <a href="#" className="youtube"><i className="fa fa-youtube-play" /></a>
              <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.2088422423735!2d10.173993515577141!3d36.81351517464948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35ab7bba1ab1%3A0x3eb4947f5d0240e6!2sIt%20Gust%20Group!5e0!3m2!1sfr!2sus!4v1654612039873!5m2!1sfr!2sus" height={515} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
              </div>
      </div>
    </div>
  </section>
  <div className="contact-form spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>SEND MESSAGE</h3>
          <form action="#">
            <div className="input-list">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Address" />
            </div>
            <textarea placeholder="Question" defaultValue={""} />
            <button type="submit" className="site-btn">Send question</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer/>
        </>
    )
}