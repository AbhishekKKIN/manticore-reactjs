import bannerOne from './img/main-banner.png';
import projectDone from './img/project_completed.png';
import happyNews from './img/happy_news.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import { ArrowRight } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

const responsive = {
    screen: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
};

function Home() {
  return (
    <div>
        <Carousel responsive={responsive} showDots={true} infinite={true}>
            <div className="position-relative">
                <img className="w-100" src={bannerOne} />
                <div className="position-absolute w-100" style={{top: "0"}}>
                    <Row>
                        <Col md={{span: 6, offset:6, order: 'last' }}>
                            <p className="text-white caption01">EMPOWER YOUR BUSINESS</p>
                            <h2 className="caption02 color-orange">We Take Care <br/> of the Future</h2>
                            <p class="text-white">We take care of the future because we are the future of new technical world</p>
                            <button href="#" className="btn-lg btn-primary mt-5 learnmore">
                                Get in touch
                                <ArrowRight className="ml-3"/>
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <div className="position-relative">
                <img className="w-100" src={bannerOne} />
                <div className="position-absolute w-100" style={{top: "0"}}>
                    <Row>
                        <Col md={{span: 6, offset:6, order: 'last' }}>
                            <p className="text-white caption01">EMPOWER YOUR BUSINESS</p>
                        </Col>
                    </Row>
                </div>
            </div> */}
        </Carousel>
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <p className="font-weight-bold mt-3 mb-0 pl-3 border-left-orange">ABOUT US</p>
                    <h3 className="font-weight-bold pl-3 border-left-orange color-orange">Who we are</h3>
                    <p className="ml-md-5 font-weight-bold">ManticoreSoft Technology is a name synonymous with website development, mobile applications and software development expertise.Additionally our skill sets extend to E commerce solutions and support, digital marketing, web design, SEO, hosting, graphics and channeling website traffic and as such, we are a definitive full-service web solutions enterprise.</p>
                    <button className="btn-lg btn-primary mt-5 learnmore">
                        Get in touch
                        <ArrowRight className="ml-3"/>
                    </button>
                </Col>
                <Col md={6}>
                    <Row className="border-bottom">
                        <Col md={6} className="border-right d-flex align-items-center justify-content-center flex-column">
                            <img className="img-fluid" src={projectDone} alt="PROJECTS DONE"/>
                            <p className="font-weight-bold h3 mb-0 color-orange">650</p>
                            <p className="font-weight-bold">PROJECTS DONE</p>
                        </Col>
                        <Col md={6} className="d-flex align-items-center justify-content-center flex-column">
                            <img className="img-fluid" src={happyNews} alt="Happy CUSTOMERS"/>
                            <p className="font-weight-bold h3 mb-0 color-orange">2K</p>
                            <p className="font-weight-bold">HAPPY CUSTOMERS</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="border-right d-flex align-items-center justify-content-center flex-column">
                            <img className="img-fluid" src={projectDone} alt="WORKING PARTNERS"/>
                            <p className="font-weight-bold h3 mb-0 color-orange">200+</p>
                            <p className="font-weight-bold">WORKING PARTNERS</p>
                        </Col>
                        <Col md={6}>
                            <img className="img-fluid" src={projectDone} alt="PROJECTS DONE"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Home;
