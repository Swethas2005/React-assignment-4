import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Tickets from '../Pages/Tickets';
import TicketView from '../Pages/TicketView';
import TicketCreate from '../Pages/TicketCreate';
import TicketEdit from '../Pages/TicketEdit';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for home page */}
      <Route path="/about" element={<About />} />  {/* Route for about page */}
      <Route path="/contact" element={<Contact />} /> {/* Route for contact page */}
      <Route path="/login" element={<Login />} /> {/* Route for login page */}
      <Route path="/tickets" element={<Tickets />} /> {/* Route for tickets page */}
      <Route path="/tickets/view/:ticketId" element={<TicketView />} /> {/* Route for ticket View page */}
      <Route path="/tickets/createTicket" element={<TicketCreate />} /> {/* Route for ticket create page */}
      <Route path="tickets/view/edit/:ticketId" element={<TicketEdit />} /> {/* Route for ticket edit page */}
    </Routes>
  );
}

