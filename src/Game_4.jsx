import { useState, useEffect } from "react";
import Game_mods from "./Game_mods";
import game_4_content_video_1 from "./images/game_4_content_video_1.webp";

export default function Game_4() {
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
    <div className="game_4">
      <div className="game_4_content">
        <div className="game_4_content_image">
          <div className="game_4_content_image_content">
            <video
              src={Game_mods.gameContent.Game_4}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
        <div className="game_4_content_text">
          <div className="game_4_content_text_content">
            <h1>{'Merge Gardens'}</h1>
            <ul>
              {Game_mods.gameContent.stats_4.map((stat, index) => (
                <li key={index}>
                  <p>{stat.value}</p>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
            <h4>{'Futureplay studio’s flagship title. The game is pushing the creative boundaries of the merge category and receiving critical acclaim for its innovative rebranding.'}</h4>
            <p>{'Merge Gardens is an inventive combination of merge and match-3 gameplay mechanics. In 2023, the team reimagined the game with a new storyline, characters, and branding. This allowed for a tenfold increase in the number of installations and a twofold increase in revenue from active players. Today, the game continues to grow and blossom.'}</p>
          </div>

          <div className="game_4_content_video">
            <div className="game_4_content_video_content">
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
                    src={game_4_content_video_1}
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
              src={'./src/images/game_4_content_video_1_1.mp4'}
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
