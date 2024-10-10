import React, { useState, useEffect, useContext } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import { Button, Card, Spinner, Alert, Container } from "react-bootstrap";
import axios from "axios";
import { Store } from "../../assets/context/AuthContext";

const SingleTrainingProgram = () => {
  const { id } = useParams(); // Get the training program ID from the URL params
  const navigate = useNavigate();
  const {state}=useContext(Store)
  const {userInfo}=state
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Fetch the single training program by ID
    const fetchTrainingProgram = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/training/single/${id}`,{
          headers:{Authorization:`Bearer ${userInfo.token}`}
        });
        setTraining(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching training program");
        setLoading(false);
      }
    };

    fetchTrainingProgram();
  }, [id,userInfo]);

  // Handler to unroll the employee from the training
  const handleUnroll = async () => {
    try {
      const response = await axios.post(`/api/training/unroll/${id}`,{
          headers:{Authorization:`Bearer ${userInfo.token}`}
        });
      setSuccessMessage(response.data.message);
      navigate("/welcome"); // Redirect to the list of training programs
    } catch (err) {
      setError("Error unrolling from training");
    }
  };
  console.log(id);
  
// delete training
const handleDeleteTraining=async()=>{
  try {
    const response = await axios.delete(`/api/training/${id}/delete`,{
          headers:{Authorization:`Bearer ${userInfo.token}`}
        })
        alert('Training deleted')
  } catch (error) {
    console.log(error);
    
  }
}
  // Handler to complete the training
  const handleCompleteTraining = async () => {
    try {
      const response = await axios.put(`/api/training/${id}/complete`,{
          headers:{Authorization:`Bearer ${userInfo.token}`}
        });
      setSuccessMessage(response.data.message);
      setTraining(response.data.employeeTraining); // Update the training status
    } catch (err) {
      setError("Error completing training");
    }
  };

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className='small-container' style={{marginTop:"100px"}}>
      {training ? (
        <Card style={{color:"black"}}>
          <Card.Img variant="top" src={training.image || "default-image-url"} />
          <Card.Body>
            <Card.Title>{training.title}</Card.Title>
            <Card.Text>{training.description}</Card.Text>
            <Card.Text>
              <strong>Status:</strong> {training.status}
            </Card.Text>
            <Card.Text>
              <strong>Completion Status:</strong> {training.done}
            </Card.Text>
            <Card.Text>
              <strong>Duration:</strong> {training.duration}
            </Card.Text>

            {successMessage && <Alert variant="success">{successMessage}</Alert>}

            <Button
              variant="danger"
              className="me-2"
              onClick={handleUnroll}
              disabled={training.done === "Completed"}
            >
              Unroll
            </Button>

            <Button
              variant="success"
              onClick={handleCompleteTraining}
              disabled={training.done === "Completed"}
            >
              Complete Training
            </Button>
            <Button
              variant="danger"
              onClick={handleDeleteTraining}
              
            >
              Delete training
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Alert variant="warning">No training program found</Alert>
      )}
    </Container>
  );
};

export default SingleTrainingProgram;
