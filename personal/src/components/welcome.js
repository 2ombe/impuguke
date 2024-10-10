import React from "react";
// import "./welcome.css";
import { Container } from "react-bootstrap";
import TrainingPrograms from "./TrainingProgramList";
import TraineeList from "./TraineeManagement/TraineeList";

function Welcome() {
  return (
    <div className="homeContainer">
      <div className="rightPart" style={{ marginLeft: "2rem" }}>
        <div className="middleRight" style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex" }}>
            <Container>
              <TrainingPrograms />
              <TraineeList />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
