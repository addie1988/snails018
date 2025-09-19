import { useState, useEffect } from "react";
import about_content_text_img_1 from "../src/images/about_content_text_img_1.svg";
import about_content_text_img_2 from "../src/images/about_content_text_img_2.webp";
import about_content_text_img_3 from "../src/images/about_content_text_img_3.webp";
import about_content_text_img_4 from "../src/images/about_content_text_img_4.webp";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 滾動鎖定效果
  useEffect(() => {
    if (isModalOpen) {
      // 鎖定背景滾動
      document.body.style.overflow = 'hidden';
      // 防止 iOS Safari 的彈跳效果
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
    } else {
      // 恢復背景滾動
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
      document.body.style.top = 'auto';
      document.body.style.left = 'auto';
    }

    // 清理函數
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
      document.body.style.top = 'auto';
      document.body.style.left = 'auto';
    };
  }, [isModalOpen]);
  return (
    <div className="about">
      <div className="about_content">
        <div className="about_content_title">
          <div className="about_content_title_content">
            <h1>
              About <br /> Plarium
            </h1>
          </div>
        </div>
        <div className="about_content_text">
          <div className="about_content_text_content">
            <div className="about_content_text_p">
              <div className="about_content_text_p_content">
                <h2>
                  RAID: Shadow Legends, Mech Arena, and 20 other titles have
                  made Plarium one of the most successful game companies in the
                  world.
                </h2>
                <p>
                  We create free-to-play mobile and computer games that are
                  regularly featured on the App Store and Google Play.
                </p>
                <br />
                <p>
                  Our teams collaborate with Hollywood stars, famous streamers,
                  competitive players, and gamers from around the world.
                </p>
              </div>
            </div>
            <div className="about_content_text_img">
              <div className="about_content_text_img_content">
                <ul>
                  <li>
                    <img src={about_content_text_img_2} alt="img1" />
                  </li>
                  <li>
                    <img src={about_content_text_img_3} alt="img2" />
                  </li>
                  <li>
                    <img src={about_content_text_img_4} alt="img3" />
                  </li>
                </ul>
                <div className="about_content_text_img_svg">
                  <div className="about_content_text_img_svg_content">
                    <img
                      src={about_content_text_img_1}
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
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-video">
              <div className="modal-video_content">
                <div className="modal-header">
                  <h3>Detailed Information</h3>
                  <button className="modal-close" onClick={closeModal}>
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-image">
                    <img src={about_content_text_img_1} alt="svg" />
                  </div>
                  <div className="modal-text">
                    <p>
                      RAID: Call of the Arbiter was named Best Short-Form Series
                      at the Content Innovation Awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
