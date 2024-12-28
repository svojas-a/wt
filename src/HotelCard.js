import React from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css';

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <p className="location">{hotel.location}</p>
        <Link to={`/book/${hotel.name}`} className="book-now-btn">
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;

