import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EnrollEmployeeForm = ({ onEnrollEmployee }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    trainingProgramId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnrollEmployee(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="employeeId">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="trainingProgramId">
        <Form.Label>Training Program ID</Form.Label>
        <Form.Control type="text" name="trainingProgramId" value={formData.trainingProgramId} onChange={handleChange} />
      </Form.Group>
      <Button style={{backgroundColor: "#1c698d"}} variant="primary" type="submit">
        Enroll Employee
      </Button>
    </Form>
  );
};

export default EnrollEmployeeForm;
