import { useRef, useState } from 'react';
import social_1 from './images/social_1.webp';
import social_2 from './images/social_2.webp';
import social_1_1 from './images/social_1_1.mp4';
import social_1_2 from './images/social_1_2.mp4';

export default function Social() {
    const scrollContainerRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');

    const handleWheel = (e) => {
        e.preventDefault();
        const container = scrollContainerRef.current;
        if (container) {
            // 優化滾動速度和流暢度
            const scrollAmount = e.deltaY * 2;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleImageClick = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo('');
    };

    return (
        <div className="social">
            <div className="social_content">
                <div className="social_content_title">
                    <div className="social_content_title_content">
                    <h1>Social <br /> responsibility</h1>
                    </div>
                </div>
                <div className="social_content_ul">
                    <div className="social_content_ul_content">
                        <ul ref={scrollContainerRef} onWheel={handleWheel}>
                            <li>
                                <div className="social_content_ul_content_text">
                                    <div className="social_content_ul_content_text_content">
                                        <h3>Supporting Ukraine</h3>
                                        <p>Since the beginning of the full-scale invasion, we’ve paid national military contributions, and allocated a total of over 100 million hryvnias to Ukrainian volunteer organizations.</p>
                                    </div>
                                </div>
                                <div className="social_content_ul_content_img">
                                    <div className="social_content_ul_content_img_content">
                                        <img 
                                            src={social_1} 
                                            alt="social_1" 
                                            onClick={() => handleImageClick(social_1_1)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <p>
                                        We cooperate with Ukrainian foundations and volunteer associations such as the Superhumans Center, Children of Heroes, Veteran Hub, Volonterska, etc. Plarium also regularly donates technical equipment to meet the needs of volunteers.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="social_content_ul_content_text">
                                    <div className="social_content_ul_content_text_content">
                                        <h3>Helping Together</h3>
                                        <p>We are proud of our volunteer colleagues who contribute to our victory in many different ways, and we fully support them.</p>
                                    </div>
                                </div>
                                <div className="social_content_ul_content_img">
                                    <div className="social_content_ul_content_img_content">
                                        <img 
                                            src={social_2} 
                                            alt="social_2" 
                                            onClick={() => handleImageClick(social_1_2)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <p>
                                        Our employees participate in internal charity projects, host fundraising streams, turn artwork into donations, organize fundraisers, and even launch their own charitable foundations!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* 影片彈窗 */}
            {isModalOpen && (
                <div className="video-modal-overlay" onClick={closeModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-modal-close" onClick={closeModal}>
                            ×
                        </button>
                        <video 
                            src={currentVideo} 
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
    )
}