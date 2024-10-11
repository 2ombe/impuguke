import React, { useState, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Store } from '../../assets/context/AuthContext';

const CreateNews = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/news/upload',
        { title, content },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      if (response.status === 201) {
        setSuccess(true);
        setTitle('');
        setContent('');
      }
    } catch (error) {
      console.error('Error creating news:', error);
      setError('Failed to create the news article. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Create a News Article</h2>

      {/* Success message */}
      {success && <Alert variant="success">News article created successfully!</Alert>}

      {/* Error message */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Form to create a news article */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the news title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="content" className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Enter the news content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Create News
        </Button>
      </Form>
    </Container>
  );
};

export default CreateNews;
