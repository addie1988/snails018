import React, { useState, useEffect } from "react";
import Game_mods from "./Game_mods";
import useScrollLock from "./useScrollLock";

function Game_3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  // 使用統一的滾動鎖定 Hook
  useScrollLock(isModalOpen);

  const handleImageClick = (index) => {
    setSelectedVideo(Game_mods.carouselData.videos_3[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo("");
  };

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Game_mods.carouselData.images_3.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Game_mods.carouselData.images_3.length) %
        Game_mods.carouselData.images_3.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, currentSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  return (
    <div className="game_3">
      <div className="game_3_content">
        <div className="game_3_content_image">
          <div className="game_3_content_image_content">
            <video
              src={Game_mods.gameContent.Game_3}
              style={{ width: "100%", height: "auto" }}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
        <div className="game_3_content_text">
          <div className="game_3_content_text_content">
            <h1>{"Unannounced Shooter Game"}</h1>
            <p>
              {
                "Our new challenge is a multi-platform third-person shooter, with innovative gameplay in a realistic setting."
              }
            </p>
          </div>

          <div className="game_3_content_video">
            <div className="game_3_content_video_content">
              <div
                className="single-image-carousel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* 當前顯示的圖片 */}
                <div className="carousel-image-container">
                  <img
                    src={Game_mods.carouselData.images_3[currentSlide].src}
                    alt={Game_mods.carouselData.images_3[currentSlide].alt}
                    onClick={() => handleImageClick(currentSlide)}
                    style={{ cursor: "pointer" }}
                    className="carousel-main-image"
                  />
                </div>

                {/* 導航按鈕 */}
                <button
                  className="carousel-nav-btn carousel-nav-prev"
                  onClick={prevSlide}
                  aria-label="上一張"
                >
                  ‹
                </button>
                <button
                  className="carousel-nav-btn carousel-nav-next"
                  onClick={nextSlide}
                  aria-label="下一張"
                >
                  ›
                </button>

                {/* 指示器 */}
                <div className="carousel-dots">
                  {Game_mods.carouselData.images_3.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${
                        index === currentSlide ? "active" : ""
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`跳轉到第 ${index + 1} 張圖片`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 彈出視窗 */}
      {isModalOpen && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeModal}>
              ×
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="video-modal-video"
            >
              您的瀏覽器不支援影片播放。
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game_3;
