// components/TrainingPrograms.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Card, Alert, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Store } from '../assets/context/AuthContext';

const TrainingPrograms = () => {
  const navigate = useNavigate();
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
    if (trainingPrograms.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trainingPrograms.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [trainingPrograms]);

  const currentTraining = trainingPrograms.length > 0 ? trainingPrograms[currentIndex] : null;

  return (
    <Container className='small-container' style={{marginTop:"100px"}}>
      {message && <Alert variant="danger">{message}</Alert>}
      {trainingPrograms.length > 0 && currentTraining ? (
       <>
        <Card style={{color:"black"}}>
          <Card.Header>
            <h2 style={{ textAlign: 'center', color:"black" }}>Training Programs</h2>
          </Card.Header>
          {currentTraining.image && (
            <Card.Img variant="top" src={currentTraining.image} alt={currentTraining.title} />
          )}
          <Card.Body>
            <Card.Title>{currentTraining.title}</Card.Title>
            <Card.Text>{currentTraining.description}</Card.Text>     
            <Card.Text>
              <strong>Duration:</strong> {currentTraining.duration}
            </Card.Text>
            <Card.Text>
              <strong>Status:</strong> {currentTraining.status}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{display:"flex"}}>

            <Button
              style={{
                backgroundColor: '#1c698d',
                margin: '1rem',
              }}
              onClick={() => navigate(`/training/${currentTraining._id}`)}
            >
              Take training
            </Button>
        
          <Button style={{backgroundColor: '#1c698d',
                margin: '1rem',}} onClick={() => navigate('/training')}>Add training program</Button>
            </div>

          </Card.Footer>
        </Card>
       
       </>
       
     

      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button onClick={() => navigate('/training')}>Add training program</Button>
        </div>
      )}
    </Container>
  );
};

export default TrainingPrograms;
