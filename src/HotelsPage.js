import React from "react";
import HotelCard from "./HotelCard"; // Reusing HotelCard component
import "./HotelsPage.css"; // Styling for the hotels page

const hotels = [
  {
    name: "The Royal Suite",
    image: "/images/royal-suite.jpg",
    description: "Experience luxury like never before.",
    location: "New York, USA",
  },
  {
    name: "Ocean Bliss",
    image: "/images/ocean-bliss.jpg",
    description: "Relax by the serene beaches.",
    location: "Malibu, USA",
  },
  {
    name: "Mountain Retreat",
    image: "/images/mountain-retreat.jpg",
    description: "Escape to the tranquil mountains.",
    location: "Aspen, USA",
  },
];

const HotelsPage = () => {
  return (
    <div className="hotels-page">
      <h1 className="hotels-title">Explore Our Hotels</h1>
      <div className="hotels-list">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
