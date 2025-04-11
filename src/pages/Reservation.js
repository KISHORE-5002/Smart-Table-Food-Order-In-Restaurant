import React, { useState } from 'react';
import TableReservation from '../components/TableReservation';
import '../App.css';

const Reservation = () => {
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the reservation to your backend
    alert('Table reserved successfully!');
    setReservation({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      specialRequests: ''
    });
  };

  return (
    <div className="reservation-page">
      <h1>Table Reservation</h1>
      <TableReservation
        reservation={reservation}
        setReservation={setReservation}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Reservation;