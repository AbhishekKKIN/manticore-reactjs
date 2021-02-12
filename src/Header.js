import "./Header.css";
import phoneIcon from './img/phone.png';
import mailIcon from './img/mail.png';
import clockIcon from './img/clock.png';
import speechBubbleIcon from './img/speech-bubble.png';
import brandLogo from './img/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <div className="top-header">
          <Container>
            <Row>
              <Col md={2} className="d-flex align-items-center justify-content-center">
                <img width="16" src={phoneIcon} alt="Call" />
                <span className="pl-2"> +918076627928</span>
              </Col>
              <Col md={3} className="d-flex align-items-center justify-content-center">
                <img width="16" src={mailIcon} alt="Mail" />
                <span className="pl-2"> admin@manticoresoft.com</span>
              </Col>
              <Col md={2} className="d-flex align-items-center justify-content-center">
                <img width="16" src={clockIcon} alt="Timing" />
                <span className="pl-2"> Mon-Fri 9am-6pm</span>
              </Col>
              <Col/>
              <Col md={2} className="d-flex align-items-center learnmore justify-content-center">
                <img width="16" src={speechBubbleIcon} alt="Timing" />
                <span className="pl-2"> Mon-Fri 9am-6pm</span>
              </Col>
            </Row>
          </Container>          
        </div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand>
              <Link className="px-4 text-dark font-weight-bold" to="/"> 
                <img src={brandLogo} alt="ManticoreSoft" height="90"/>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="ml-auto">
                <Link className="px-4 text-dark font-weight-bold" to="/"> 
                  Home 
                </Link>
                <Link className="px-4 text-dark font-weight-bold" to="/services">
                  Services
                </Link>
                <Link className="px-4 text-dark font-weight-bold" to="/portfolio">
                  Portfolio
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default Header;
