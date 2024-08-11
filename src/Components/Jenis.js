import React from "react";

const workInfoData = [
  {
    title: "Sampah Kaca",
    text: "Sampah Kaca adalah jenis sampah yang berasal dari kaca, seperti botol kaca, pecahan kaca, dan lain-lain.",
    
   
  },
  {
    title: "Sampah Kertas",
    text: "Sampah kertas biasanya berasal dari sisa-sisa kertas, seperti koran, majalah, dan kertas bekas."
  
  },
  {
    title: "Sampah Logam",
    text: "Sampah logam biasanya sisa-sisa barang rongsokan seperti kaleng, paku, dan bahan logam lainnya."

  },
  {
    title: "Sampah Organik",
    text: "Sampah organik berasal dari makhluk hidup, seperti sisa makanan, daun, dan bahan organik lainnya."
   
  },
  {
    title: "Sampah Plastik",
    text: "Sampah plastik biasanya sulit terurai dan berasal dari bahan-bahan plastik seperti botol, kantong, dan kemasan plastik."

  },
];

const Jenis = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Jenis</p>
        <h1 className="primary-heading">Sampah ada</h1>
        <h1 className="primary-heading">apa ajasih?</h1>
        <p className="primary-text">
          Mengetahui jenis sampah biar lebih bijak dalam memilah dan memilih sampah.
        </p>
      </div>
      <img 
            src="https://siapdarling.id/uploads/infodarling/banner_20221205101726_template_image_detail__(2).png" 
            alt="Deskripsi Gambar" 
            className="home-image" 
          />
      <img 
            src="https://i0.wp.com/blog.eigeradventure.com/wp-content/uploads/2023/05/sampah-kertas.jpg?w=800&ssl=1" 
            alt="Deskripsi Gambar" 
            className="home-image" 
          />
          <img 
            src="https://waste4change.com/blog/wp-content/uploads/image-100.png" 
            alt="Deskripsi Gambar" 
            className="home-image" 
          />
          <img 
            src="https://waste4change.com/blog/wp-content/uploads/Composting-NYC-1024x756-1.jpg" 
            alt="Deskripsi Gambar" 
            className="home-image" 
          />
          <img 
            src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1635814775/attached_image/dampak-sampah-plastik-bagi-lingkungan-dan-kesehatan-manusia-0-alodokter.jpg" 
            alt="Deskripsi Gambar" 
            className="home-image" 
          />
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jenis;
