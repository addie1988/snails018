import { useState, useEffect } from "react";
import Game_mods from "./Game_mods";
import Video_modularity from "./Video_modularity";
import useScrollLock from "./useScrollLock";

export default function Game_1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Game_mods.carouselData.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Game_mods.carouselData.images.length) % Game_mods.carouselData.images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 使用統一的滾動鎖定 Hook
  useScrollLock(isModalOpen);

  // 處理影片彈跳視窗
  const handleImageClick = (index) => {
    setSelectedVideo(Game_mods.carouselData.images[index].video);
    setIsModalOpen(true);
  };

  // 關閉彈跳視窗
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo("");
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
    <div className="game_1">
      <div className="game_1_content">
        <div className="game_1_content_image">
          <div className="game_1_content_image_content">
            <video
              src={Game_mods.gameContent.Game_1}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
        <div className="game_1_content_text">
          <div className="game_1_content_text_content">
            <h1>{Game_mods.gameContent.title}</h1>
            <ul>
              {Game_mods.gameContent.stats.map((stat, index) => (
                <li key={index}>
                  <p>{stat.value}</p>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
            <h4>{Game_mods.gameContent.description.headline}</h4>
            <p>{Game_mods.gameContent.description.mainText}</p>
          </div>

          <div className="game_1_content_video">
            <div className="game_1_content_video_content">
              <div
                className="single-image-carousel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* 當前顯示的圖片 */}
                <div className="carousel-image-container">
                <img 
                  className="carousel-main-image-icon" 
                  src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/play.svg'} 
                  alt="播放按鈕"
                  onClick={() => handleImageClick(currentSlide)}
                  style={{ cursor: "pointer" }}
                />
                  <img
                    src={Game_mods.carouselData.images[currentSlide].src}
                    alt={Game_mods.carouselData.images[currentSlide].alt}
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
                  {Game_mods.carouselData.images.map((_, index) => (
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
          <div className="game_1_content_detailed">
            <div className="game_1_content_detailed_content">
              <p>{Game_mods.gameContent.description.detailedText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 影片彈跳視窗元件 */}
      <Video_modularity 
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={'./src/images/game_1_content_video_1_1.mp4'}
      />
    </div>
  );
}
