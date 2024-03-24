import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import about from "../../assets/img/about.png"

export default () => {
    return(
        <>
         <Navbar/>
        

 <div>
  <section className="about-section spad mt-5" style={{paddingTop:"200px"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="about__img">
            <img src={`${about}`} alt />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__text">
            <h2>IT Gust Company</h2>
            <p>We're a Tunisian IT company that delivers innovative solutions to help businesses stay ahead. From software development and web design 
              to mobile apps and cloud solutions, our team of experts is committed to delivering high-quality 
              services that drive growth and success. With a focus on customer satisfaction and excellence, 
              we build lasting partnerships with our clients to help them achieve their goals.</p>
            
            <a href="#" className="primary-btn">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="feature-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h3>OUR SERVICES</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="feature__item">
            <span className="fa fa-database" />
            <h5>Data science</h5>
            <p>Data science is the interdisciplinary field that involves scientific methods, algorithms, 
              and systems to extract insights from structured and unstructured data, enabling informed 
              decision-making and solving complex problems across various domains.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="feature__item">
            <span className="fa fa-bar-chart" />
            <h5>Business Intelligence</h5>
            <p>Business Intelligence (BI) is the process of collecting, analyzing, and presenting data to 
              support better business decision-making and strategic planning, empowering organizations with 
              valuable insights and opportunities for growth and optimization.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="feature__item">
            <span className="fa fa-desktop" />
            <h5>Web Development</h5>
            <p>Web development is the process of creating and maintaining websites and web applications 
              using programming languages, technologies, and frameworks to deliver interactive and 
              functional user experiences on the internet</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="feature__item">
            <span className="fa fa-lock" />
            <h5>IT-Security</h5>
            <p>IT security, also known as cybersecurity, is the practice of protecting computer 
              systems, networks, and data from unauthorized access, breaches, and damage to ensure 
              confidentiality, integrity, and availability of information</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="feature__item">
            <span className="fa fa-lightbulb-o" />
            <h5>Artificial Intelligence</h5>
            <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in 
              machines that can perform tasks typically requiring human intelligence, such as 
              learning, reasoning, problem-solving, and decision-making</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="feature__item">
            <span className="fa fa-cogs" />
            <h5>DevOps</h5>
            <p>DevOps is the fusion of software development (Dev) and IT operations (Ops) for 
              collaboration, automation, and continuous delivery, aiming to deliver high-quality 
              software products more rapidly and efficiently</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<Footer/>
        </>
    )
}