import React, { useState, useEffect, useRef } from "react";

import professionals_content_img_1 from "../src/images/professionals_1.webp";
import professionals_content_img_2 from "../src/images/professionals_2.webp"; 
import professionals_content_img_3 from "../src/images/professionals_3.webp";
import professionals_content_img_4 from "../src/images/professionals_4.webp";
import professionals_content_img_5 from "../src/images/professionals_5.webp";
import professionals_content_img_6 from "../src/images/professionals_6.webp";
import professionals_content_img_7 from "../src/images/professionals_7.webp";
import professionals_content_img_8 from "../src/images/professionals_8.webp";
import professionals_content_img_9 from "../src/images/professionals_9.webp";
import professionals_content_img_10 from "../src/images/professionals_10.webp";
import professionals_content_img_11 from "../src/images/professionals_11.webp";
import professionals_content_img_12 from "../src/images/professionals_12.webp";
import professionals_content_img_13 from "../src/images/professionals_13.webp";
import professionals_content_img_14 from "../src/images/professionals_14.webp";
import professionals_content_img_15 from "../src/images/professionals_15.svg";

function Professionals() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [isImageSequenceComplete, setIsImageSequenceComplete] = useState(false);
  const sectionRefs = useRef([]);
  const lastScrollY = useRef(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 滾動監聽和區域切換
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current;
      setIsScrollingDown(scrollDirection);

      const professionalsElement = document.querySelector(".professionals");
      if (professionalsElement) {
        const rect = professionalsElement.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          Math.min(1, -rect.top / (rect.height - window.innerHeight))
        );

        // 根據滾動進度切換區域 - 調整觸發點
        if (scrollProgress < 0.45) {
          setActiveSection(0);
        } else if (scrollProgress < 0.85) {
          setActiveSection(1);
        } else {
          setActiveSection(2);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 圖片顯示效果 - 延長動畫時間
  useEffect(() => {
    if (activeSection === 1) {
      const timer = setTimeout(() => {
        setVisibleItems([]);
        
        setTimeout(() => {
          for (let i = 0; i < 14; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, i * 150); // 增加間隔時間
          }
          
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, 14]);
            setIsImageSequenceComplete(true);
          }, 2500); // 延長最後文字出現時間
        }, 200);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setVisibleItems([]);
      setIsImageSequenceComplete(false);
    }
  }, [activeSection]);

  return (
    <div className="professionals">
      <div className="professionals_content">
        <div
          className={`professionals_content_title ${
            activeSection === 0 ? "active" : "inactive"
          }`}
          ref={(el) => (sectionRefs.current[0] = el)}
          data-section="0"
          style={{height: "100vh"}}
        >
          <div className="professionals_content_title_content">
            <h2>1300+</h2>
            <p>Professionals</p>
          </div>
        </div>
        <div
          className={`professionals_content_img ${
            activeSection === 1 ? "active" : "inactive"
          }`}
          ref={(el) => (sectionRefs.current[1] = el)}
          data-section="1"
          style={{height: "100vh"}}
        >
          <div className="professionals_content_img_content">
            <ul>
              {[
                professionals_content_img_1,
                professionals_content_img_2,
                professionals_content_img_3,
                professionals_content_img_4,
                professionals_content_img_5,
                professionals_content_img_6,
                professionals_content_img_7,
                professionals_content_img_8,
                professionals_content_img_9,
                professionals_content_img_10,
                professionals_content_img_11,
                professionals_content_img_12,
                professionals_content_img_13,
                professionals_content_img_14,
              ].map((img, index) => {
                const isVisible = visibleItems.includes(index);
                const visibleIndex = visibleItems.indexOf(index);
                const zIndex = visibleIndex >= 0 ? 1000 + visibleIndex : 0;

                return (
                  <li
                    key={index}
                    className={`professionals-image-item ${
                      isVisible ? "visible" : ""
                    }`}
                    style={{
                      zIndex: zIndex,
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`img${index + 1}`}
                      style={{
                        transform: "scale(2.4)",
                        transition: "transform 0.5s ease" // 延長圖片縮放動畫
                      }}
                    />
                  </li>
                );
              })}
              <li
                className={`professionals-text-item ${
                  visibleItems.includes(14) ? "visible" : ""
                }`}
                style={{
                  zIndex: visibleItems.includes(14)
                    ? 1000 + visibleItems.indexOf(14)
                    : 0,
                }}
              >
                <div className="professionals-text-item-content">
                  <h2>1300+</h2>
                  <p>professionals</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`professionals_content_text ${
            activeSection === 2 ? "active" : "inactive"
          }`}
          ref={(el) => (sectionRefs.current[2] = el)}
          data-section="2"
          style={{height: "100vh"}}
        >
          <div className="professionals_content_text_content">
            <div className="professionals_content_text_content_area">
              <div className="professionals_content_text_title">
                <div className="professionals_content_text_title_content">
                  <h2>1300+</h2>
                  <p>professionals united</p>
                  <p>by a passion for games</p>
                </div>
              </div>
              <div className="professionals_content_text_p">
                <div className="professionals_content_text_p_content">
                  <div className="professionals_content_text_p_content_p">
                    <p>
                      Plarium is a community of people passionate about their
                      work, where everyone can offer their ideas for new
                      features and improvements.
                    </p>
                    <br />
                    <p>
                      Our employees work in offices located in Lviv, Kyiv,
                      Warsaw, Barcelona, Helsinki, and Herzliya, as well as
                      remotely in Ukraine, Poland and Spain.
                    </p>
                  </div>
                </div>
                <div className="professionals_content_text_svg">
                  <div className="professionals_content_text_svg_content">
                    <img
                      src={professionals_content_img_15}
                      alt="svg"
                      onClick={openModal}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 彈出視窗 */}
      {isModalOpen && (
        <div className="professionals-popup-overlay" onClick={closeModal}>
          <div
            className="professionals-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="professionals-popup-content-area">
              <div className="professionals-popup-header">
                <h3>Professional Team Details</h3>
                <button
                  className="professionals-popup-close"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
              <div className="professionals-popup-body">
                <div className="professionals-popup-image">
                  <img src={professionals_content_img_15} alt="svg" />
                </div>
                <div className="professionals-popup-text">
                  <p>
                    45% of Plarium employees have been with us for over five
                    years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Professionals;
