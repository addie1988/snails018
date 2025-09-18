import pallium_play_image_1 from "../src/images/pallium_play_content_image_1.webp";
import pallium_play_image_2 from "../src/images/pallium_play_content_image_2.webp";
import pallium_play_image_3 from "../src/images/pallium_play_content_image_3.webp";
import pallium_play_image_4 from "../src/images/pallium_play_content_image_4.svg";


export default function Pallium_play() {
    return (
        <div className="pallium_play">
            <div className="pallium_play_content">
                <div className="pallium_play_content_image">
                    <div className="pallium_play_content_image_content">
                        <div className="pallium_play_content_image_area" style={{msOverflowStyle: "none", scrollbarWidth: "none"}}>
                            <div className="pallium_play_content_image_area_content">
                                <div className="pallium_play_content_image_area_content_left">
                                    <div className="pallium_play_content_image_area_content_left_content">
                                        <img src={pallium_play_image_1} alt="./src/images/pallium_play_content_image_1.webp" />
                                        <img src={pallium_play_image_2} alt="./src/images/pallium_play_content_image_2.webp" />
                                    </div>
                                </div>
                                <div className="pallium_play_content_image_area_content_right" style={{msOverflowStyle: "none", scrollbarWidth: "none"}}>
                                    <div className="pallium_play_content_image_area_content_right_content">
                                        <img src={pallium_play_image_3} alt="./src/images/pallium_play_image_3.webp" />
                                    </div>
                                </div>
                            </div>
                            <div className="pallium_play_content_image_area_content_bottom">
                                <div className="pallium_play_content_image_area_content_bottom_content">
                                    <img src={pallium_play_image_4} alt="./src/images/pallium_play_image_4.webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pallium_play_content_text">
                    <div className="pallium_play_content_text_content">
                        <h1>Plarium Play</h1>
                        <h4>Publishing platform for both our own mobile and desktop games as well as third-party titles. It’s got a news feed, forums, posts from Discord channels, FAQs, and online chats to discuss projects and new releases.</h4>
                        <ul>
                            <li>Available for PC and Mac</li>
                            <li>Microservices approach using Kubernetes and Consul Service Discovery load balancer guarantees a high level of performance and an uptime of 99%</li>
                            <li>Unlimited FPS allows you to enjoy HD graphics and gameplay without system freezes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}