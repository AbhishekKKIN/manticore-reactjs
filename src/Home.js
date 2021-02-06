import bannerOne from './img/main-banner.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

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
                                {/* <i class="fa fa-arrow-right ml-3" aria-hidden="true"></i> */}
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="position-relative">
                <img className="w-100" src={bannerOne} />
                <div className="position-absolute w-100" style={{top: "0"}}>
                    <Row>
                        <Col md={{span: 6, offset:6, order: 'last' }}>
                            <p className="text-white caption01">EMPOWER YOUR BUSINESS</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Carousel>
    </div>
  );
}

export default Home;
