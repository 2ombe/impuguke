import { MdOutlineContactPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
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
          <Col size={12} style={{ display: "flex" }} sm={6}>
            <div>
              <span>
                <a href="#">
                  <img src={logo} alt="Icon" />
                </a>
              </span>
              <span>
                <h3>PAN RWANDA</h3>
                “Imbaraga z'urubyiruko mu buhinzi bukozwe kinyamwuga’’
              </span>
            </div>
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
              <p>
                <span>
                  <MdOutlineContactPhone
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                </span>
                <span>0788592170/795456676</span>
              </p>
              <p>
                <span>
                  <MdLocationOn
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                </span>
                Kicukiro-Kigarama;KK_785_St
              </p>
              <p>
                <span>
                  <MdOutlineEmail
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                </span>
                info@panrwanda.org <br /> panrwanda54@gmail.com
              </p>
            </div>
          </Col>

          <p style={{ textAlign: "center", marginTop: "3rem" }}>
            Copyright 2024. PAN RWANDA All Rights Reserved
          </p>
        </Row>
      </Container>
    </footer>
  );
};
