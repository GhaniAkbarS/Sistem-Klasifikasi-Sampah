import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Arsitektur from "./Components/Arsitektur";
import Jenis from "./Components/Jenis";
import Profil from "./Components/Profil";
import Deteksi from "./Components/Deteksi";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="arsitektur">
          <Arsitektur />
        </section>
        <section id="jenis">
          <Jenis />
        </section>
        <section id="tentang-kami">
          <Profil />
        </section>
        <section id="upload">
          <Deteksi />
        </section>
      </div>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;