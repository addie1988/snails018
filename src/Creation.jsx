import React, { useState } from "react";
import creation_1 from "../src/images/creation_1.webp";
import creation from "../src/images/creation.mp4";

function Creation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="creation">
      <div className="creation_content">
        <div className="creation_content_text">
          <div className="creation_content_text_content">
            <h1>Product creation</h1>
            <p>
              To accelerate the development of game projects and teams, we
              create our own business solutions: platforms for game publishing
              and user engagement, services for marketing and analytics
              departments, and an internal company portal.
              <br />
              <br />
              We control all stages of project creation – from the initial idea
              to localization – so we have a deep understanding of technologies
              and business processes. We combine experience with innovation in
              analytics, marketing, and community interaction.
            </p>
          </div>
        </div>
        <div className="creation_content_video">
          <div className="creation_content_video_content">
            <img
              className="carousel-main-image-icon"
              src={
                "https://cdn-company.plarium.com/meet/production/media/assets/icons/play.svg"
              }
              alt="icon"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
            <img
              src={creation_1}
              alt="creation_1"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* 彈出視窗 */}
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
              src={creation}
              controls
              autoPlay
              className="video-modal-video"
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Creation;
