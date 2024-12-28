import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ContactUs from "./ContactUs";
import Login from "./Login";
import MembershipForm from "./MembershipForm";
// import VideoBackground from "./VideoBackground";
import HotelsPage from "./HotelsPage"; // Import the HotelsPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelsPage />} /> {/* Add route for HotelsPage */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/membership" element={<MembershipForm />} />
      </Routes>
    </Router>
  );
}

export default App;
