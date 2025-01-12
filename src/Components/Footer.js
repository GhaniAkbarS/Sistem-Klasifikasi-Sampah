import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Sistem Klasifikasi Sampah</span>
          <span>Alamat: Jl. Karuna Sihat No.13, Kepulauan Mentawai, Indonesia</span>
          <span>Telepon: 123-456-7890</span>
          <span>Email: info@klasifikasisampah.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <div className="footer-copyright">
        <p>&copy; 2024 Sistem Klasifikasi Sampah. All rights reserved.</p>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
