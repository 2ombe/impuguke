// components/TrainingPrograms.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {  Card, Alert, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../assets/context/AuthContext';


const TrainingPrograms = () => {
  const navigate = useNavigate()
  const { state } = useContext(Store);
  const [trainingPrograms, setTrainingPrograms] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState('');


  const fetchTrainingPrograms = async () => {
    try {
      const response = await axios.get('/api/training/all', {
        headers: { Authorization: `Bearer ${state.userInfo.token}` },
      });
      setTrainingPrograms(response.data.trainingPrograms);
    } catch (error) {
      console.error('Error fetching training programs', error);
      setMessage('Error fetching training programs');
    }
  };

  useEffect(() => {
    fetchTrainingPrograms();
  }, [state]);

  useEffect(() => {
    if(trainingPrograms.length>0){

      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trainingPrograms.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [trainingPrograms]);
const currentTraining=trainingPrograms[currentIndex]
  return (
    <Container className='small-container' style={{marginTop:"150px"}}>
      {message && <Alert variant="danger">{message}</Alert>}
      {trainingPrograms.length > 0 && (
        <Card >
          <Card.Header>
          <h2 style={{ textAlign: 'center', color:"black" }}>Training Programs</h2>

          </Card.Header>
          <Card.Img variant="top" src={currentTraining.image} />
          <Card.Body>
            <Card.Title>{currentTraining.title}</Card.Title>
            <Card.Text>{currentTraining.description}</Card.Text>
            <Card.Text>
              <strong>Organisation:</strong> {currentTraining.organisation}
            </Card.Text>
            <Card.Text>
              <strong>Duration:</strong> {currentTraining.duration}
            </Card.Text>
            <Card.Text>
              <strong>Status:</strong> {currentTraining.status}
            </Card.Text>
            <Card.Text>
              <strong>Progress:</strong> {currentTraining.done}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {currentTraining.status==="In progress"?(

              <Button style={{
            marginTop:"-2px",
                  backgroundColor: "#1c698d",
                  margin: "1rem",
                }} onClick={()=>navigate(`/training/${currentTraining._id}`)}>Take training</Button>
            ):(
              <h4 style={{color:"red"}}>Closed</h4>
            )}
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
};

export default TrainingPrograms;
