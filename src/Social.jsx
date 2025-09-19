import { useRef, useState, useEffect } from "react";
import social_1 from "./images/social_1.webp";
import social_2 from "./images/social_2.webp";
import Video_modularity from "./Video_modularity";

export default function Social() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const scrollRef = useRef(null);

  const handleImageClick1 = () => {
    setIsModalOpen1(true);
  };

  const handleImageClick2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  // 檢測螢幕尺寸
  useEffect(() => {
    const checkScreenSize = () => {
      const isDesktopSize = window.innerWidth > 940; // 與 CSS 媒體查詢保持一致
      setIsDesktop(isDesktopSize);
    };

    // 初始檢測
    checkScreenSize();

    // 監聽視窗大小變化
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // 滾動效果控制
  useEffect(() => {
    const handleWheel = (e) => {
      // 只在桌機版啟用滾動效果
      if (!isDesktop || !scrollRef.current) return;

      e.preventDefault();
      const container = scrollRef.current;
      const scrollAmount = e.deltaY * 2;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // 確保不會滾動超出範圍
      const targetScroll = Math.max(
        0,
        Math.min(maxScroll, currentScroll + scrollAmount)
      );

      // 使用平滑滾動
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // 只在桌機版添加滾動事件監聽器
      if (isDesktop) {
        scrollContainer.addEventListener("wheel", handleWheel, {
          passive: false,
        });

        // 調試信息
        console.log("滾動容器狀態 (桌機版):", {
          scrollWidth: scrollContainer.scrollWidth,
          clientWidth: scrollContainer.clientWidth,
          canScroll: scrollContainer.scrollWidth > scrollContainer.clientWidth,
          isDesktop: isDesktop,
        });
      } else {
        // 移動版：移除滾動事件監聽器
        scrollContainer.removeEventListener("wheel", handleWheel);
        console.log("滾動效果已禁用 (移動版)");
      }
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isDesktop]);

  return (
    <div className="social">
      <div className="social_content">
        <div className="social_content_title">
          <div className="social_content_title_content">
            <h1>
              Social <br /> responsibility
            </h1>
          </div>
        </div>
        <div className="social_content_ul">
          <div className="social_content_ul_content">
            <ul ref={scrollRef}>
              <li>
                <div className="social_content_ul_content_text">
                  <div className="social_content_ul_content_text_content">
                    <h3>Supporting Ukraine</h3>
                    <p>
                      Since the beginning of the full-scale invasion, we've paid
                      national military contributions, and allocated a total of
                      over 100 million hryvnias to Ukrainian volunteer
                      organizations.
                    </p>
                  </div>
                </div>
                <div className="social_content_ul_content_img">
                  <div className="social_content_ul_content_img_content">
                    <img
                      className="carousel-main-image-icon"
                      src="https://cdn-company.plarium.com/meet/production/media/assets/icons/play.svg"
                      alt="播放按鈕"
                    />
                    <img
                      src={social_1}
                      alt="social_1"
                      onClick={handleImageClick1}
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  <div className="social_content_ul_content_p">
                  <div className="social_content_ul_content_p_content">
                    <p>
                      We cooperate with Ukrainian foundations and volunteer
                      associations such as the Superhumans Center, Children of
                      Heroes, Veteran Hub, Volonterska, etc. Plarium also
                      regularly donates technical equipment to meet the needs of
                      volunteers.
                    </p>
                  </div>
                </div>
                </div>
              </li>
              <li>
                <div className="social_content_ul_content_text">
                  <div className="social_content_ul_content_text_content">
                    <h3>Helping Together</h3>
                    <p>
                      We are proud of our volunteer colleagues who contribute to
                      our victory in many different ways, and we fully support
                      them.
                    </p>
                  </div>
                </div>
                <div className="social_content_ul_content_img">
                  <div className="social_content_ul_content_img_content">
                    <img
                      className="carousel-main-image-icon"
                      src="https://cdn-company.plarium.com/meet/production/media/assets/icons/play.svg"
                      alt="播放按鈕"
                    />
                    <img
                      src={social_2}
                      alt="social_2"
                      onClick={handleImageClick2}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="social_content_ul_content_p">
                  <div className="social_content_ul_content_p_content">
                    <p>
                      Our employees participate in internal charity projects,
                      host fundraising streams, turn artwork into donations,
                      organize fundraisers, and even launch their own charitable
                      foundations!
                    </p>
                  </div>
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Video_modularity
        isOpen={isModalOpen1}
        onClose={closeModal1}
        videoSrc={"./src/images/social_1_1.mp4"}
      />

      <Video_modularity
        isOpen={isModalOpen2}
        onClose={closeModal2}
        videoSrc={"./src/images/social_1_2.mp4"}
      />
    </div>
  );
}
