import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Bingung milah sampah?</h1>
          <p className="primary-text">
            Kami menyediankan pelayanan yang terbaik untuk anda
          </p>
          <button className="secondary-button">
            Upload <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img 
            src="https://i.pinimg.com/564x/f0/82/04/f08204a313f33df55c6ed23de5aa9f2a.jpg" 
            alt="Deskripsi Gambar" 
            className="home-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
