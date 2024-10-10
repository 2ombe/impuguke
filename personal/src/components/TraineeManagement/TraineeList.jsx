import React, { useContext, useEffect, useState } from 'react';
import { Table, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Store } from '../../assets/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TraineeList = () => {
  const { state } = useContext(Store);
  const navigate = useNavigate()
  const { userInfo } = state;
  const [traineesByDistrict, setTraineesByDistrict] = useState([]);
  const [editingTrainee, setEditingTrainee] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState('');
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
const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTrainees();
  }, [userInfo]);

  
   const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTrainee) {
      // Update trainee
      await updateTrainee(editingTrainee._id, formData);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateTrainee = async (id, data) => {
    try {
      await axios.put(`/api/trainees/${id}`, data,{
        headers:{Authorization:`Bearer ${userInfo.token}`}
      });
      alert('Trainee updated successfully!');
    } catch (error) {
      console.error('Error updating trainee:', error);
      alert('Failed to update trainee.');
    }
  };

  const fetchTrainees = async () => {
 try {

   console.log('Fetching trainees for district:', selectedDistrict);

   const response = await axios.get('/api/trainees/sort/district', {
     params: {
       district: selectedDistrict,
     },
     headers: { Authorization: `Bearer ${userInfo.token}` },
   });

   console.log('Response from server:', response.data); // Log the response for debugging
   setTraineesByDistrict(response.data);
 } catch (error) {
   console.error('Error fetching trainees', error);
 }
};
  useEffect(() => {
  fetchTrainees()
  }, [selectedDistrict, userInfo.token]); 

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const deleteTrainee = async (id) => {
    try {
      await axios.delete(`/api/trainees/${id}`,{
        headers:{Authorization:`Bearer ${userInfo.token}`}
      });
      alert('Trainee deleted successfully!');
      fetchTrainees();
    } catch (error) {
      console.error('Error deleting trainee:', error);
      alert('Failed to delete trainee.');
    }
  };

  const handleEditClick = (trainee) => {
    setEditingTrainee(trainee);
    setFormData(trainee);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditingTrainee(null);
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
  };


  return (
    <div style={{marginTop:"3rem",textAlign:"center"}}>
         <Button onClick={()=>navigate("/trainees")}>
          Register new Members
        </Button>
      <h3>Sort trainee by district</h3>

      {/* Dropdown to select district */}
      <Form.Group className='mt-3 mb-3'>
        <Form.Label>Sort by District</Form.Label>
        <Form.Control as="select" value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">All Districts</option>
          <option value="Ngoma">Ngoma</option>
          <option value="Nyagatare">Nyagatare</option>
          <option value="Kirehe">Kirehe</option>
          {/* Add more districts as needed */}
        </Form.Control>
      </Form.Group>

      <Table striped bordered hover style={{color:"white"}}>
        <thead>
          <tr>
            <th>Names</th>
            <th>Sex</th>
            <th>District</th>
            <th>Sector</th>
            <th>Cell</th>
            <th>Village</th>
            <th>ID Number</th>
            <th>Studies</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {traineesByDistrict.length > 0 ? (
            traineesByDistrict.map((trainee) => (
              <tr key={trainee._id}>
                <td>{trainee.names}</td>
                <td>{trainee.sex}</td>
                <td>{trainee.district}</td>
                <td>{trainee.sector}</td>
                <td>{trainee.cell}</td>
                <td>{trainee.village}</td>
                <td>{trainee.idNumber}</td>
                <td>{trainee.studies}</td>
                <td>{trainee.phone}</td>
                <td>
                <Button variant="warning" onClick={() => handleEditClick(trainee)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => deleteTrainee(trainee._id)}>
                  Delete
                </Button>
              </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No trainees found.</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Trainee</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleSubmit}>
      {/* Names Field */}
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

      {/* Sex Field */}
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

      {/* District Field */}
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

      {/* Sector Field */}
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

      {/* Cell Field */}
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

      {/* Village Field */}
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

      {/* ID Number Field */}
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

      {/* Studies Field */}
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

      {/* Phone Field */}
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
        Save Changes
      </Button>
    </Form>
  </Modal.Body>
</Modal>
    </div>
  );
};

export default TraineeList;
