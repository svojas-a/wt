import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideoBackground.css";

const VideoBackground = () => {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("backgroundVideo");
    videoElement.onerror = () => setVideoError(true);
  }, []);

  return (
    <div className="page-container">
      <div className="video-container">
        {!videoError ? (
          <video autoPlay muted loop id="backgroundVideo" className="fullscreen-video">
            <source
              src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20UMAID%20BHAWAN%202%20min_with%20Living%20Legacies_Endslate_210924%20cropped.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src="/fallback-image.jpg" alt="Background Fallback" className="fullscreen-video" />
        )}

        <div className="header-content">
          <h1 className="logo-text">The Viceroy</h1>
          <nav>
            <ul>
              <li><Link to="/" aria-label="Destinations">Destinations</Link></li>
              <li><Link to="/hotels" aria-label="Hotels">Hotels</Link></li> {/* Link to HotelsPage */}
              <li><Link to="/contact-us" aria-label="Contact Us">Contact Us</Link></li>
              <li><Link to="/membership" aria-label="Membership">Membership</Link></li>
              <li><Link to="/login" aria-label="Login">Login</Link></li>
              <li className="booknow"><Link to="/" aria-label="Book Now">Book Now</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
