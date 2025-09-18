import { useEffect, useRef, useState } from "react";
import timeline_1 from "./images/timeline_1.webp";
import timeline_2 from "./images/timeline_2.webp";
import timeline_3 from "./images/timeline_3.webp";
import timeline_4 from "./images/timeline_4.webp";
import timeline_5 from "./images/timeline_5.webp";

function Timeline() {
  const scrollWrapperRef = useRef(null);
  const [count, setCount] = useState(0);
  const [endCount, setEndCount] = useState(0);

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    if (!scrollWrapper) return;

    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    // 數字計數動畫
    const timer = setInterval(() => {
      if (count < 16) {
        setCount(prev => prev + 1);
      }
    }, 1000);

    // 結尾數字計數動畫
    const endTimer = setInterval(() => {
      if (endCount < 500) {
        setEndCount(prev => prev + 5);
      }
    }, 1000);

    // 滑鼠滾動事件
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;
      scrollWrapper.scrollLeft += e.deltaY;

      setTimeout(() => {
        isScrolling = false;
      }, 16);
    };

    // 觸控滑動事件
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      scrollLeft = scrollWrapper.scrollLeft;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 2;
      scrollWrapper.scrollLeft = scrollLeft + walk;
    };

    // 鍵盤事件
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollWrapper.scrollLeft -= 300;
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollWrapper.scrollLeft += 300;
      }
    };

    // 添加事件監聽器
    scrollWrapper.addEventListener("wheel", handleWheel, { passive: false });
    scrollWrapper.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    scrollWrapper.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    document.addEventListener("keydown", handleKeyDown);

    // 清理事件監聽器
    return () => {
      clearInterval(timer);
      clearInterval(endTimer);
      scrollWrapper.removeEventListener("wheel", handleWheel);
      scrollWrapper.removeEventListener("touchstart", handleTouchStart);
      scrollWrapper.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [count, endCount]);

  return (
    <div className="timeline">
      <div className="timeline_content">
        <div className="timeline_scroll_wrapper" ref={scrollWrapperRef}>
          <div className="timeline_scroll_content">
            {/* 時間軸內容 */}
            <div className="timeline_content_img">
              <div className="timeline_content_img_content">
                <ul>
                  <li>
                    {/* 開頭標題 */}
                    <div className="timeline_content_title">
                      <div className="timeline_content_title_content">
                        <h1>{count}</h1>
                        <p>
                          years of experience creating games in various genres
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline_content_img_title">
                      <div className="timeline_content_img_title_content">
                        <h3>2009-2017</h3>
                        <p>
                          We created 10+ strategies in diverse settings for
                          social networks and mobile devices.
                        </p>
                      </div>
                    </div>
                    <div className="timeline_content_img_p">
                      <div className="timeline_content_img_p_content">
                        <img src={timeline_1} alt="timeline_1" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline_content_img_title">
                      <div className="timeline_content_img_title_content">
                        <h3>2017+</h3>
                        <p>
                          We expanded our portfolio to include different genres:
                          MMORTS, survival RPG, and casual. Our games also
                          became available for both PC and Mac.
                        </p>
                      </div>
                    </div>
                    <div className="timeline_content_img_p">
                      <div className="timeline_content_img_p_content">
                        <img src={timeline_2} alt="timeline_2" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline_content_img_title">
                      <div className="timeline_content_img_title_content">
                        <h3>2019</h3>
                        <p>
                          We released RAID: Shadow Legends — one of the top-3
                          grossing RPGs in the USA.
                        </p>
                      </div>
                    </div>
                    <div className="timeline_content_img_p">
                      <div className="timeline_content_img_p_content">
                        <img src={timeline_3} alt="timeline_3" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline_content_img_title">
                      <div className="timeline_content_img_title_content">
                        <h3>2021</h3>
                        <p>
                          We released Mech Arena — a dynamic PvP shooter in a
                          stylized sci-fi setting. We acquired Futureplay,
                          developer of casual game Merge Gardens.
                        </p>
                      </div>
                    </div>
                    <div className="timeline_content_img_p">
                      <div className="timeline_content_img_p_content">
                        <img src={timeline_4} alt="timeline_4" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline_content_img_title">
                      <div className="timeline_content_img_title_content">
                        <h3>2023-NOW</h3>
                        <p>
                          We're working on a new multi-platform shooter, casual
                          farming sim Elf Islands, and other new projects.
                        </p>
                      </div>
                    </div>
                    <div className="timeline_content_img_p">
                      <div className="timeline_content_img_p_content">
                        <img src={timeline_5} alt="timeline_5" />
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* 結尾標題 */}
                    <div className="timeline_content_tail_title">
                      <div className="timeline_content_tail_title_content">
                        <h1>{endCount} million</h1>
                        <p>players from more than 186 countries worldwide</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
