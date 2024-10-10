import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Store } from '../assets/context/AuthContext';

const OfferTrainingProgramForm = () => {
  const {state}=useContext(Store)
  const {userInfo}=state
const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [duration,setDuration]=useState("")
  

 

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/api/training/add",{title,description,duration},{
        headers:{Authorization:`Bearer ${userInfo.token}`}
      })
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <Container className='small-container'>

    <Form style={{marginTop:"200px"}} onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="duration">
        <Form.Label>Duration (in hours)</Form.Label>
        <Form.Control type="text" name="duration" value={duration} onChange={(e)=>setDuration(e.target.value)} />
      </Form.Group>
      <Button style={{backgroundColor: "#1c698d"}} variant="primary" type="submit">
        Offer Training Program
      </Button>
    </Form>
    </Container>
  );
};

export default OfferTrainingProgramForm;
