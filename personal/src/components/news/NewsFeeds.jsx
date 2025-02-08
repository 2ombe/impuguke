import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap';
import axios from 'axios';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await axios.get('/api/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{  margin:"2rem" }}>
      <Row>
      
        <Col md={6}>
         
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              width="80%"
              height="415"
              src="https://www.youtube.com/embed/lnH3byiUi8I"
              title="Pan Rwanda"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '10px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)' }}
            ></iframe>
          </div>
        </Col>

        <Col md={6}>
          <Carousel indicators={false} interval={3000} fade>
            {news.map((article) => (
              <Carousel.Item key={article.id}>
              <Card
                key={article.id}
                style={{
                    width: '80%',
                    height: '415px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    backgroundColor: '#f8f9fa',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
                  }}
              >
                 <Card.Body>
                    <Card.Title
                      style={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        fontFamily: 'Georgia, serif',
                        fontWeight: 'bold',
                      }}
                    >
                      {article.title}
                    </Card.Title>
                    <Card.Text
                      as="div"
                      style={{
                        fontFamily: 'Times New Roman, serif',
                        lineHeight: '1.6',
                        textAlign: 'justify',
                        maxHeight: '250px',
                        overflowY: 'auto',
                        paddingRight: '10px',
                      }}
                    >
                      {article.content.split('\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </Card.Text>
                  </Card.Body>
                <Card.Footer
                    className="text-muted"
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontStyle: 'italic',
                      color: '#333',
                      textAlign: 'center',
                    }}
                  >
                    By: {article.author?.username || 'Unknown'} |{' '}
                    {new Date(article.date).toLocaleDateString()}
                  </Card.Footer>
              </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="primary" onClick={fetchNews}>
          Refresh News
        </Button>
      </div>
    </div>
  );
};

export default NewsFeed;
