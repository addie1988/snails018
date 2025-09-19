import { useEffect, useRef, useState } from "react";
import image_film_1 from "./images/image_film_1.webp";
import image_film_2 from "./images/image_film_2.webp";
import image_film_3 from "./images/image_film_3.webp";
import image_film_4 from "./images/image_film_4.webp";
import image_film_5 from "./images/image_film_5.webp";
import Video_modularity from "./Video_modularity";

export default function Image_film() {
    const carouselRef = useRef(null);
    const trackRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const products = [
        { 
            id: 1,
            image: image_film_1, 
            video: "./src/images/image_film_1.mp4" // 修正路徑,加回 src
        },
        { 
            id: 2,
            image: image_film_2, 
            video: "./src/images/image_film_2.mp4"
        },
        { 
            id: 3,
            image: image_film_3, 
            video: "./src/images/image_film_3.mp4"
        },
        { 
            id: 4,
            image: image_film_4, 
            video: "./src/images/image_film_4.mp4"
        },
        { 
            id: 5,
            image: image_film_5, 
            video: "./src/images/image_film_5.mp4"
        }
    ];

    // 滑鼠懸停暫停動畫
    useEffect(() => {
        const carousel = carouselRef.current;
        const track = trackRef.current;
        
        if (!carousel || !track) return;

        const handleMouseEnter = () => {
            track.style.animationPlayState = 'paused';
        };
        
        const handleMouseLeave = () => {
            track.style.animationPlayState = 'running';
        };

        carousel.addEventListener('mouseenter', handleMouseEnter);
        carousel.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            carousel.removeEventListener('mouseenter', handleMouseEnter);
            carousel.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // 點擊圖片開啟影片彈窗
    const handleImageClick = (video) => {
        setCurrentVideo(video);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // 防止背景滾動
    };

    // 關閉影片彈窗
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentVideo("");
        document.body.style.overflow = 'auto'; // 恢復背景滾動
    };

    return (
        <div className="image_film">
            <div className="image_film_content">
                <div className="image_film_slider" ref={carouselRef}>
                    <div className="image_film_track" ref={trackRef}>
                        {/* 原始圖片列表 */}
                        {products.map((product) => (
                            <div key={product.id} className="image_film_slide" onClick={() => handleImageClick(product.video)}>
                                <div className="image_film_slide_content">
                                    <div className="product_overlay">
                                        <img 
                                            className="carousel-main-image-icon"
                                            src="https://cdn-company.plarium.com/meet/production/media/assets/icons/play.svg"
                                            alt="播放按鈕"
                                        />
                                    </div>
                                    <img 
                                        src={product.image}
                                        alt={`影片縮圖 ${product.id}`}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                        ))}
                        {/* 複製圖片列表實現無限輪播 */}
                        {products.map((product) => (
                            <div key={`clone-${product.id}`} className="image_film_slide" onClick={() => handleImageClick(product.video)}>
                                <div className="image_film_slide_content">
                                    <div className="product_overlay">
                                        <img 
                                            className="carousel-main-image-icon"
                                            src="https://cdn-company.plarium.com/meet/production/media/assets/icons/play.svg"
                                            alt="播放按鈕"
                                        />
                                    </div>
                                    <img 
                                        src={product.image}
                                        alt={`影片縮圖 ${product.id}`}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Video_modularity
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                videoSrc={currentVideo}
            />
        </div>
    );
}