import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import sos from '../../assets/img/hero/back.jpg'
import ach from '../../assets/img/hero/backright.png'
import {Carousel} from 'antd'
export default () => {

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
      const style = {
        backgroundImage: `url(${sos})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      };
      const stylee = {
        backgroundImage: `url(${ach})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      };

    return(
        <>
        <div class="offcanvas__menu__overlay">
        <Navbar/>
        <div>
    <section className="" >
    <div  className="set-bg"  style={style }
    >
          <Carousel afterChange={onChange}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="hero__text" style={{marginTop:"60%" , marginLeft:"20%" , color:"white"}}>
              <h5 style={{color:"white"}}>HAVE IT YOUR WAY</h5>
              <h2 style={{color:"white" , fontSize:"40px" , font:"bold"}}>Welcome to <br /> IT GUST company</h2>
              <a href="#" className="primary-btn mt-4">Get started now</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" style={{ marginLeft:"70%" ,marginTop:"-21%"}}>
            <div className="hero__img"  >
              <img src="img/hero/hero-right.png" alt />
            </div>
          </div>
        </div>
      </div>
      </Carousel>
    </div>
</section>
</div>
<section className="pricing-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7">
                                <div className="section-title normal-title">
                                    <h3>OUR SERVICES</h3>
                                </div>
                            </div>

                        </div>
                        <div className="row monthly__plans active" style={{ textAlign:"left"}}>
                            <div className="col-lg-3 col-md-6 col-sm-6 " >
                                <div className="pricing__item">

                                    <h3 >DevOps </h3>
                                    <ul>
                                        <p style={{ padding:"8px"}}>DevOps is a collaborative approach that unites development
                                         and operations teams, emphasizing automation, continuous integration, 
                                         and delivery to streamline software development and deployment.
                                         It fosters a culture of communication and shared responsibility to deliver high-quality products efficiently.</p>
                                    </ul>
                                    <a href="#" className="primary-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="pricing__item">

                                    <h3 style={{ paddingTop:"2px" , paddingBottom:"5px" }}>Artificial Intelligence</h3>
                                    <ul>
                                        <p style={{ padding: "19px" , paddingTop:"20px"}}>AI is a branch of computer science focused on creating intelligent machines that can mimic human-like intelligence.
                                         By learning from data and adapting over time, AI encompasses machine learning, NLP, computer vision, and aims to achieve 
                                         tasks requiring human cognitive abilities.</p>
                                    </ul>
                                    <a href="#" className="primary-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="pricing__item">

                                    <h3 style={{ paddingTop: "5px", paddingBottom: "5px" }}>Business Intelligence</h3>
                                    <ul>
                                        <p style={{ padding: "7px", marginTop: "10px", marginBottom: "10px" }}>BI involves data-driven decision-making through data collection, 
                                        transformation, and visualization, empowering organizations to analyze trends, forecast,
                                         and make informed choices, enhancing overall business performance, and gaining a competitive edge
                                          by integrating various data sources and providing real-time insights.</p>
                                    </ul>
                                    <a href="#" className="primary-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="pricing__item">

                                    <h3>Data Analytics</h3>
                                    <ul>
                                        <p style={{ padding: "4.5px", marginTop: "10px", marginBottom: "10px" }}>Data Analytics: Systematic data examination to uncover insights, patterns, 
                                        and relationships, using statistical techniques, data mining, and machine learning 
                                        for evidence-based decision-making, optimizing processes, predicting future outcomes, 
                                        and aiding businesses in strategic planning and resource allocation in various industries.</p>
                                    </ul>
                                    <a href="#" className="primary-btn">Read More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

<section className="services-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h3>Our Recent & popular completed projects</h3>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="services__item">
          <h5>Analysis Competitors</h5>
          <span>Data | Clicks</span>
          
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="services__item">
          <h5>Workload Automation</h5>
          <span>Testing</span>
          
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="services__item">
          <h5>File Transfers</h5>
          <span>Monitor | Science</span>
          
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="services__item">
          <h5>ChatBots Creation</h5>
          <span>Algorithm</span>
          
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="services__item">
          <h5>ChatBots Creation</h5>
          <span>Algorithm</span>
          
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="services__item">
          <h5>Invoice data</h5>
          <span>Algorithm</span>
          
        </div>
      </div>
    </div>
  </div>
</section>
<section className="choose-plan-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <img src="img/choose-plan.png" alt />
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="plan__text">
          <h3>OUR STORY</h3>
          <ul>
            <li><span className="fa fa-check" /> Fondation Of ITGate Group <span>(2015)</span></li>
            <li><span className="fa fa-check" /> Building Team <span>(2016)</span></li>
            <li><span className="fa fa-check" /> Integration Of Mobile Technologies (Android & IOS) <span>(2017)</span></li>
            <li><span className="fa fa-check" /> Partnership With Client In Tunisia And Abroad <span>(2018)</span></li>
            <li><span className="fa fa-check" /> Investing And Improving The Skills Of Our Team <span>(2019)</span></li>
            <li><span className="fa fa-check" /> Upgrading Our Guests Quality Of Service <span>(2020)</span></li>
            <li><span className="fa fa-check" /> Updating And Upgrading The Used Technologies <span>(2021)</span></li>
            <li><span className="fa fa-check" /> Fondation Of IT Gust <span>(2022)</span></li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</section>

        <Footer/>
        </div>
        </>
    )
}