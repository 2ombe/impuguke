import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import TrainingPrograms from "./TrainingProgramList";
import TraineeList from "./TraineeManagement/TraineeList";
import { useNavigate } from "react-router-dom";
import { Store } from "../assets/context/AuthContext";

function Welcome() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate fetching data with a timeout for both TrainingPrograms and TraineeList
    const fetchData = async () => {
      // Simulate some delay in loading data
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Check if the user is logged in
    if (!state.userInfo) {
      navigate("/login"); // Redirect to login if no userInfo
    } else {
      const fetchData = async () => {
        // Simulate fetching data with a timeout for both TrainingPrograms and TraineeList
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
        setLoading(false); // Set loading to false after data is fetched
      };
      fetchData();
    }
  }, [state.userInfo, navigate]); // Add userInfo and navigate as dependencies

  return (
    <div className="rightPart" style={{ marginLeft: "2rem" }}>
      <div className="middleRight" style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex" }}>
          <Container>
            {loading ? ( // Show spinner while loading data
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <>
                <TrainingPrograms />
                <Button
                  style={{ marginTop: "2rem", left: 0 }}
                  onClick={() => navigate("/news")}
                >
                  Add new feeds
                </Button>
                <TraineeList />
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
