import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vegetables.jpg";
import projImg2 from "../assets/img/training.jpg";
import projImg3 from "../assets/img/extent.jpeg";
import projImg4 from "../assets/img/driper.PNG";
import projImg5 from "../assets/img/agribus.PNG";
import projImg6 from "../assets/img/agrifi.PNG";
import projImg7 from "../assets/img/cropman.PNG";
import projImg8 from "../assets/img/conc.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Research and Development (R&D)",
      description:
        "Investing in agricultural research to develop new technologies crop varieties and farming practices that increase yields, reduce input costs in agriculture.",
      imgUrl: projImg1,
    },
    {
      title: "Education and Training",
      description:
        "Providing farmers with the knowledge and skills they need to adopt modern farming techniques, including crop management, pest control, and soil conservation.",
      imgUrl: projImg2,
    },
    {
      title: "Extension Services",
      description:
        "Offering extension services to farmers, where agricultural experts work directly with farmers to provide advice, information, and technical support on best practices.",
      imgUrl: projImg3,
    },
    {
      title: "Infrastructure Development",
      description:
        "Building and maintaining critical agricultural infrastructure such as irrigation systems, roads, storage facilities, and processing plants.",
      imgUrl: projImg4,
    },
    {
      title: "Market Access",
      description:
        "Facilitating access to markets for farmers, including the development of transportation networks and market information systems.",
      imgUrl: projImg5,
    },
    {
      title: "Credit and Finance",
      description:
        "Providing farmers with access to affordable credit and financial services to invest in their farms and purchase necessary inputs.",
      imgUrl: projImg6,
    },
    {
      title: "Crop and Livestock Management",
      description:
        "Promoting sustainable farming practices, including crop rotation, intercropping, integrated pest management, and livestock management.",
      imgUrl: projImg7,
    },
    {
      title: "Soil and Water Conservation",
      description:
        "Implementing soil conservation techniques, watershed management, and sustainable water use practices to protect natural resources.",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Our Objectives</h2>
                  <Row>
                    <Col md={6}>
                      <ul>
                        <li>
                          Promoting knowledge sharing and best practices in
                          agriculture.
                        </li>
                        <li>
                          Facilitating networking and collaboration among
                          agriculture young professionals.
                        </li>
                        <li>
                          Providing education and training opportunities for
                          agriculture professionals.
                        </li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul>
                        <li>
                          Advocating for the needs and interests of the
                          agriculture community.
                        </li>
                        <li>
                          Supporting the development of new and innovative
                          technologies in agriculture.
                        </li>
                        <li>
                          Encouraging sustainability and environmental
                          responsibility.
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Our mission</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Contact-Us</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Vision</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          The Organization shall have the general objective of
                          improving the overall competitiveness and viability of
                          the agriculture industry, and to contribute to a
                          sustainable and thriving agriculture sector and
                          specific objectives:
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          To create a thriving, innovative, and sustainable
                          agriculture sector in Rwanda, where young
                          professionals, farmers, and agricultural businesses
                          work collaboratively to enhance productivity, adopt
                          modern technologies, and ensure environmental
                          responsibility for the benefit of current and future
                          generations.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
