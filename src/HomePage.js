import React from "react";
import "./HomePage.css";
import VideoBackground from "./VideoBackground";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <VideoBackground />
      <main className="main-content">
        <section className="icon-section">
          <h1 className="icon-title">YOUR GATEWAY TO UNFORGETTABLE EXPERIENCES</h1>
          <p className="icon-description">
            Step into a world of elegance and tranquility, crafted exclusively for your comfort and indulgence.
          </p>
        </section>

        <section className="gallery-section">
          <h2 className="gallery-title">EXPLORE</h2>
          <div className="gallery">
            <div className="gallery-item">
              <img
                src="/pexels-marceloverfe-29436009.jpg"
                alt="Gallery Item 1"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/pexels-kaderdygnn-19388578.jpg"
                alt="Gallery Item 2"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/pexels-valeriya-1893561.jpg"
                alt="Gallery Item 3"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/pexels-olegprachuk-7940061.jpg"
                alt="Gallery Item 4"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
