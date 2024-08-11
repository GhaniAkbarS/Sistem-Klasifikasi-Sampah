import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

// Import gambar, pastikan jalur ke file gambar sudah benar
import sampahPlastik from "../asset/Sampah PLastik.jpg"; // Sesuaikan jalur ini sesuai dengan struktur folder Anda

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <p className="primary-subheading">
          Arsitektur
        </p>
        <h1 className="primary-heading">
          Arsitektur Sistem
        </h1>
        <p className="primary-text">
          Berikut adalah arsitektur sistem kami
          <img src={sampahPlastik} alt="Sampah Plastik" className="sampah-plastik-image" />
        </p>
      </div>
    </div>
  );
};

export default About;