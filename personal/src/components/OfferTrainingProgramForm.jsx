import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const OfferTrainingProgramForm = ({ onOfferTrainingProgram }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOfferTrainingProgram(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} name="description" value={formData.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="duration">
        <Form.Label>Duration (in hours)</Form.Label>
        <Form.Control type="text" name="duration" value={formData.duration} onChange={handleChange} />
      </Form.Group>
      <Button style={{backgroundColor: "#1c698d"}} variant="primary" type="submit">
        Offer Training Program
      </Button>
    </Form>
  );
};

export default OfferTrainingProgramForm;
