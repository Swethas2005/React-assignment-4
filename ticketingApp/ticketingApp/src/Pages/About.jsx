import React from 'react';

export default function About() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to our About Page!</h1>
        <div >
        <img src="https://evolvepreneur.app/uploads/media/default/0001/02/e5a5d204750530d8ebe4616fc2e8548356ff52f2.png" alt="about" style={{ maxWidth: '100%', height: '400px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginLeft: "20px" }} 
        
        />
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginTop: '20px', marginBottom: '20px' }}>
          Discover how our platform transforms businesses.<br />
          Simplify your workflow with our innovative solutions.<br />
          Join us in revolutionizing your productivity today!
        </p>
        </div>
      </div>
    </div>
  );
}
