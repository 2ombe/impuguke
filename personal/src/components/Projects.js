import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vegetables.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
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
      imgUrl: projImg1,
    },
    {
      title: "Market Access",
      description:
        "Facilitating access to markets for farmers, including the development of transportation networks and market information systems.",
      imgUrl: projImg2,
    },
    {
      title: "Credit and Finance",
      description:
        "Providing farmers with access to affordable credit and financial services to invest in their farms and purchase necessary inputs.",
      imgUrl: projImg2,
    },
    {
      title: "Crop and Livestock Management",
      description:
        "Promoting sustainable farming practices, including crop rotation, intercropping, integrated pest management, and livestock management.",
      imgUrl: projImg3,
    },
    {
      title: "Soil and Water Conservation",
      description:
        "Implementing soil conservation techniques, watershed management, and sustainable water use practices to protect natural resources.",
      imgUrl: projImg3,
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
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
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
