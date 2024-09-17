import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/pan.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="#">
              <img src={logo} alt="Icon" />
            </a>
            PAN RWANDA PROFESSIONAL AGRICULTURE NETWORK DEVELOPMENT RWANDA
            “Imbaraga z'urubyiruko mu buhinzi bukozwe kinyamwuga’’
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
              <p>0788592170/795456676</p>
              <p>Kicukiro-Kigarama;KK_785_St</p>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>

          <p style={{ textAlign: "center" }}>
            Copyright 2024. PAN RWANDA All Rights Reserved
          </p>
        </Row>
      </Container>
    </footer>
  );
};
