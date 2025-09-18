import { useState, useEffect } from "react";
import Game_mods from "./Game_mods";
import game_2_content_video_1 from "./images/game_2_content_video_1.webp";

export default function Game_1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleImageClick = (index) => {
    setSelectedVideo(Game_mods.carouselData.videos[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo("");
  };

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
    <div className="game_2">
      <div className="game_2_content">
        <div className="game_2_content_image">
          <div className="game_2_content_image_content">
            <video
              src={Game_mods.gameContent.Game_2}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
        <div className="game_2_content_text">
          <div className="game_2_content_text_content">
            <h1>{'Mech Arena'}</h1>
            <ul>
              {Game_mods.gameContent.stats_2.map((stat, index) => (
                <li key={index}>
                  <p>{stat.value}</p>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
            <h4>{'A dynamic PvP shooter in a stylized sci-fi setting.'}</h4>
            <ul className="game_2_content_text_content_ul">
                <li className="game_2_content_text_content_ul_li">Online action emphasizing team interaction within a range of game modes, and dozens of mechs and weapons</li>
                <li className="game_2_content_text_content_ul_li">Play-tests to improve new and existing prototypes</li>
                <li className="game_2_content_text_content_ul_li">3D level design for more than 53 maps for battles, each with unique gameplay</li>
                <li className="game_2_content_text_content_ul_li">A matchmaking system to ensure interesting and balanced battles, and cloud technology for faster matching</li>
                <li className="game_2_content_text_content_ul_li">Artificial intelligence to provide an immersive gaming experience in battles with both players and bots</li>
            </ul>
          </div>

          <div className="game_2_content_video">
            <div className="game_2_content_video_content">
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
                  alt="icon"
                  onClick={() => handleImageClick(currentSlide)}
                  style={{ cursor: "pointer" }}
                />
                  <img
                    src={game_2_content_video_1}
                    alt={Game_mods.carouselData.images[currentSlide].alt}
                    onClick={() => handleImageClick(currentSlide)}
                    style={{ cursor: "pointer" }}
                    className="carousel-main-image"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 彈窗組件 */}
      {isModalOpen && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close" onClick={closeModal}>
              ×
            </button>
            <video
              src={'./src/images/game_2_content_video_1_1.mp4'}
              style={{ width: "100%", height: "auto" }}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="video-modal-video"
            />
          </div>
        </div>
      )}
    </div>
  );
}
