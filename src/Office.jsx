import React, { useState } from "react";
import office_1 from "../src/images/office_1.webp";
import office_2 from "../src/images/office_2.webp";
import office_3 from "../src/images/office_3.webp";
import office_4 from "../src/images/office_4.webp";
import office_5 from "../src/images/office_5.webp";
import useScrollLock from "./useScrollLock";

function Office() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOffice, setCurrentOffice] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const offices = [
    {
      name: "Warsaw",
      images: [office_1, office_2, office_3, office_4, office_5]
    },
    {
      name: "Lviv", 
      images: [office_2, office_3, office_4, office_5, office_1]
    },
    {
      name: "Kyiv",
      images: [office_3, office_4, office_5, office_1, office_2]
    },
    {
      name: "Herzliya",
      images: [office_4, office_5, office_1, office_2, office_3]
    }
  ];

  // 使用統一的滾動鎖定 Hook
  useScrollLock(isModalOpen);

  const openModal = (officeIndex) => {
    setCurrentOffice(officeIndex);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const currentImages = offices[currentOffice].images;
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    const currentImages = offices[currentOffice].images;
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };
  return (
    <div className="office">
      <div className="office_content">
        <div className="office_content_title">
          <div className="office_content_title_content">
            <h1>Office</h1>
          </div>
        </div>
        <div className="office_content_ul">
            <div className="office_content_ul_content">
                <ul className="office_1">
                    {offices.map((office, index) => (
                        <li key={index}>
                            <div className="office_text">
                                <div className="office_text_content">
                                    <h3>{office.name}</h3>
                                    <a href="#" onClick={(e) => { e.preventDefault(); openModal(index); }}>View photos</a>
                                </div>
                            </div>
                            <div className="office_img">
                                <div className="office_img_content">
                                    <img src={office.images[0]} alt={office.name} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
       <div className="office_content_button">
        <div className="office_content_button_content">
            <a href="#">See all offices</a>
        </div>
       </div>
      </div>

      {/* 彈跳視窗輪播 */}
      {isModalOpen && (
        <div className="office-modal-overlay" onClick={closeModal}>
          <div className="office-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="office-modal-header">
              <h3>{offices[currentOffice].name} Office Photos</h3>
              <button className="office-modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="office-modal-body">
              <div className="office-modal-image-container">
                <button className="office-modal-prev" onClick={prevImage}>‹</button>
                <img 
                  src={offices[currentOffice].images[currentImageIndex]} 
                  alt={`${offices[currentOffice].name} office ${currentImageIndex + 1}`}
                  className="office-modal-image"
                />
                <button className="office-modal-next" onClick={nextImage}>›</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Office;
