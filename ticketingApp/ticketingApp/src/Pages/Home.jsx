import React from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', paddingTop: "100px" }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to the future of ticketing!</h1>
        <img 
          src="https://www.cflowapps.com/wp-content/uploads/2023/07/supprt_ticketng-System.jpg" 
          alt="Home" 
          style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} 
        />
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          Our innovative app redefines how you manage tasks, support queries, and events.
          <br />
          Our platform centralizes all your ticketing needs. Customize categories, set priorities,
          <br />
          and assign tasks with ease. Real-time updates keep everyone in the loop, fostering seamless collaboration.
        </p>
      </div>
    </div>
  );
}
