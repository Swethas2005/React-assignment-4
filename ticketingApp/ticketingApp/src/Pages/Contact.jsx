import React from 'react';

export default function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', maxWidth: '600px' }}>
        Have questions about our ticketing app? We're here to help! Reach out to us for any inquiries, support, or feedback. Our team is ready to assist you and ensure you have the best experience.
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', maxWidth: '600px', marginTop: '20px' }}>
      <img src="https://masaischool.com/images/contact/mail.svg" alt="mail icon" style={{ width: '100px', height: '100px', marginTop: '10px',marginLeft: "60px" }} />
        Write to us at <br />
        <a href="mailto:support@ticketingapp.com" style={{ color: '#007BFF', textDecoration: 'none' }}>support@ticketingapp.com</a>
      </p>
    </div>
  );
}
