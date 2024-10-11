import React, { useEffect, useState } from 'react';
import { Card,  Button } from 'react-bootstrap';
import axios from 'axios';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  // Fetch all news articles from the server
  const fetchNews = async () => {
    try {
      const response = await axios.get('/api/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  // Fetch news on component mount
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{backgroundColor:"#011403"}} >
     
      
      <div>
        {news.map((article) => (
         
            <Card style={{border: "1px  #ddd",
  padding: "10px",
  
  marginRight:"2rem",
webkitBoxShadow: "-22px 19px 11px -1px rgba(0, 0, 0, 0.39)",
mozBoxShadow: "-22px 19px 11px -1px rgba(0, 0, 0, 0.39)",
boxShadow: "-22px 19px 11px -1px rgba(0, 0, 0, 0.39)",
borderRadius: "10px",
width: "100%",
height: "200px",
  backgroundColor: "#011403"}}>
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', textAlign:"center", fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                  {article.title}
                </Card.Title>
                <Card.Text as="div" style={{fontFamily:"Times New Roman serif",lineHeight: "1.6",textAlign: "justify"}}>
                  {article.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} style={{ textAlign: 'justify', fontFamily: 'Times New Roman, serif', lineHeight: '1.6' }}>
                      {paragraph}
                    </p>
                  ))}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>
                By: {article.author?.username || 'Unknown'} | {new Date(article.date).toLocaleDateString()}
              </Card.Footer>
            </Card>
          
        ))}
      </div>

      {/* Button to refresh news */}
      <div className="text-center mt-4">
        <Button variant="primary" onClick={fetchNews}>
          Refresh News
        </Button>
      </div>
    </div>
  );
};

export default NewsFeed;
