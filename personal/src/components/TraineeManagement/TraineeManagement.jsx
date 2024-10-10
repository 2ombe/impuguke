// components/TraineeManagement.js

import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Table, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Store } from '../../assets/context/AuthContext';

const TraineeManagement = () => {
  const [trainees, setTrainees] = useState([]);
  const {state}=useContext(Store)
  const {userInfo}=state
  const [formData, setFormData] = useState({
    names: '',
    sex: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
    idNumber: '',
    studies: '',
    phone: '',
  });
  const [editingTrainee, setEditingTrainee] = useState(null);

  // Fetch all trainees on component mount
  useEffect(() => {
    fetchTrainees();
  }, [userInfo]);

  const fetchTrainees = async () => {
    try {
      const response = await axios.get('/api/trainees/all',{
        headers:{Authorization:`Bearer ${userInfo.token}`}
      });
      setTrainees(response.data);
    } catch (error) {
      console.error('Error fetching trainees:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTrainee) {
      // Update trainee
      await updateTrainee(editingTrainee._id, formData);
    } else {
      // Register new trainee
      await registerTrainee(formData);
    }
    setFormData({
      names: '',
      sex: '',
      district: '',
      sector: '',
      cell: '',
      village: '',
      idNumber: '',
      studies: '',
      phone: '',
    });
    setEditingTrainee(null);
    fetchTrainees();
  };

  const registerTrainee = async (data) => {
    try {
      await axios.post('/api/trainees/register', data,{
        headers:{Authorization:`Bearer ${userInfo.token}`}
      });
      alert('Trainee registered successfully!');
    } catch (error) {
      console.error('Error registering trainee:', error);
      alert('Failed to register trainee.');
    }
  };

  const updateTrainee = async (id, data) => {
    try {
      await axios.put(`/api/trainees/${id}`,{
        headers:{Authorization:`Bearer ${userInfo.token}`}
      }, data);
      alert('Trainee updated successfully!');
    } catch (error) {
      console.error('Error updating trainee:', error);
      alert('Failed to update trainee.');
    }
  };

  
  return (
    <div className="container mt-5">
      <h1>Trainee Management</h1>

      <Form onSubmit={handleSubmit} className="mb-5">
        <Form.Group>
          <Form.Label>Names</Form.Label>
          <Form.Control
            type="text"
            name="names"
            value={formData.names}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sex</Form.Label>
          <Form.Control
            as="select"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            required
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>District</Form.Label>
          <Form.Control
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sector</Form.Label>
          <Form.Control
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Cell</Form.Label>
          <Form.Control
            type="text"
            name="cell"
            value={formData.cell}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Village</Form.Label>
          <Form.Control
            type="text"
            name="village"
            value={formData.village}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>ID Number</Form.Label>
          <Form.Control
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Studies</Form.Label>
          <Form.Control
            type="text"
            name="studies"
            value={formData.studies}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {editingTrainee ? 'Update Trainee' : 'Register Trainee'}
        </Button>
      </Form>

    


    </div>
  );
};

export default TraineeManagement;
