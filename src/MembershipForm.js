import React, { useState } from "react";
import "./MembershipForm.css";

const MembershipForm = () => {
  const defaultFormData = {
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    checkInDate: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/memberships", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
  };

  return (
    <div className="membership-container">
      <h2>Become a Member</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter a secure password"
          required
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter your address"
          required
        />

        <label htmlFor="checkInDate">Preferred Check-In Date</label>
        <input
          type="date"
          id="checkInDate"
          value={formData.checkInDate}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MembershipForm;
