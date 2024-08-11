import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import axios from "axios";

const Deteksi = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const labelDescriptions = [
    "Sampah Kaca Sampah yang terbuat dari bahan kaca seperti botol kaca, gelas, dan pecahan kaca.",
    "Sampah Kertas Sampah yang terbuat dari kertas seperti koran, majalah, kardus, dan kertas tulis.",
    "Sampah Logam Sampah yang terbuat dari bahan logam seperti kaleng minuman, kaleng makanan, dan aluminium foil.",
    "Sampah Organik Sampah yang berasal dari bahan-bahan organik seperti sisa makanan, daun, dan bahan-bahan yang dapat terurai secara alami.",
    "Sampah Plastik Sampah yang terbuat dari bahan plastik seperti botol plastik, kantong plastik, dan kemasan plastik."
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post("https://3a03-35-247-18-91.ngrok-free.app/predict", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.success) {
          const label = response.data.label;
          const confidence = response.data.confidence;
          setResult(labelDescriptions[label]);
          setConfidence(confidence);
        } else {
          alert(`Failed to detect image. Error: ${response.data.error}`);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        if (error.response) {
          console.error("Server responded with status:", error.response.status);
          console.error("Response data:", error.response.data);
        }
        alert("Failed to detect image. Please try again.");
      }
    } else {
      alert("Silakan pilih file terlebih dahulu!");
    }
  };

  return (
    <div className="deteksi-page-wrapper">
      <h1 className="primary-heading">Deteksi Sampah</h1>
      <div className="deteksi-content">
        <div className="upload-container">
          <input
            type="file"
            id="fileInput"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="fileInput" className="upload-label">
            <FiUpload /> Choose Image
          </label>
          {selectedFile && <p>File selected: {selectedFile.name}</p>}
        </div>
        <button className="secondary-button" onClick={handleSubmit}>
          Detect
        </button>
        {result && (
          <div className="result-container">
            {preview && <img src={preview} alt="Selected file preview" className="preview-image" />}
            <p>Jenis Sampah: <p></p>{result} </p>
              Tingkat Akurasi: <p></p>{confidence.toFixed(2)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default Deteksi;
