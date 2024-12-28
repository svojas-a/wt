import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookNow.css';

function BookNow({ hotels }) {
  // Hook declarations must be at the top level
  const { index } = useParams();
  const [formData, setFormData] = useState({
    rooms: 1,
    adults: 1,
    children: 0,
    checkIn: "",
    checkOut: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${hotel?.name}!`);
    console.log(formData);
  };

  // Conditional check for invalid hotel
  const hotel = hotels[index];
  if (!hotel) {
    return <p>Hotel not found!</p>;
  }

  return (
    <div className="book-now-container">
      <h1>Book Your Stay at {hotel.name}</h1>
      <p className="hotel-location">{hotel.location}</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="checkIn">Check-In Date</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Check-Out Date</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rooms">Number of Rooms</label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            min="1"
            value={formData.rooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="adults">Number of Adults</label>
          <input
            type="number"
            id="adults"
            name="adults"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="children">Number of Children</label>
          <input
            type="number"
            id="children"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any additional requests?"
          ></textarea>
        </div>
        <button type="submit" className="book-now-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookNow;
