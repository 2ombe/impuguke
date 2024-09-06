import React from "react";
import team1 from "../assets/img/team1.jpeg";
import team2 from "../assets/img/team2.jpeg";
import team3 from "../assets/img/team3.jpeg";
import team4 from "../assets/img/team4.jpeg";
import team5 from "../assets/img/team5.jpeg";
import team6 from "../assets/img/team6.jpeg";
import team7 from "../assets/img/team7.jpeg";
import team8 from "../assets/img/team8.jpeg";
import team9 from "../assets/img/team9.jpeg";
import team10 from "../assets/img/team10.jpeg";
import { Card, Carousel, Col, Row } from "react-bootstrap";

function Team() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>OurTeam</h1>
      <Carousel indicators={false} interval={3000}>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  variant="top"
                  src={team1}
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  alt="Team Member 2"
                />
                <Card.Body>
                  <Card.Title>Emmanuel Irankunda</Card.Title>
                  <Card.Text>Director and legal Representative</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team2}
                  alt="Team Member 1"
                />
                <Card.Body>
                  <Card.Title>Hamis Mutsindashyaka</Card.Title>
                  <Card.Text>Deputy legal Representative</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team3}
                  alt="Team Member 3"
                />
                <Card.Body>
                  <Card.Title>Clarisse Umuhoza</Card.Title>
                  <Card.Text>Secretary</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team4}
                  alt="Team Member 4"
                />
                <Card.Body>
                  <Card.Title>Emmanuel Hakizimana</Card.Title>
                  <Card.Text>treasurer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team5}
                  alt="Team Member 4"
                />
                <Card.Body>
                  <Card.Title>Fidele Nizeyimana</Card.Title>
                  <Card.Text>Member</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team6}
                  alt="Team Member 4"
                />
                <Card.Body>
                  <Card.Title>Zahara Harerimana</Card.Title>
                  <Card.Text>Member</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team7}
                  alt="Team Member 4"
                />
                <Card.Body>
                  <Card.Title>Innocent Nziyumvira</Card.Title>
                  <Card.Text>Member and project Finance</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team8}
                  alt="Team Member 4"
                />
                <Card.Body>
                  <Card.Title>Francine Mukantirenganya</Card.Title>
                  <Card.Text>Member</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team9}
                  alt="Team Member 4"
                />
                <Card.Body>
                  <Card.Title>Innocent Nziyumvira</Card.Title>
                  <Card.Text>Member and project Finance</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card text-center">
                <Card.Img
                  style={{ width: "50%", height: "auto", marginLeft: "150px" }}
                  variant="top"
                  src={team10}
                  alt="Team Member 4"
                />
                <Card.Body>
                  <Card.Title>Francine Mukantirenganya</Card.Title>
                  <Card.Text>Member</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Team;
