import likes_1 from './images/likes_1.webp'
import likes_2 from './images/likes_2.webp'
import likes_3 from './images/likes_3.webp'
import likes_4 from './images/likes_4.webp'
import likes_5 from './images/likes_5.webp'
import likes_6 from './images/likes_6.webp'
import likes_7 from './images/likes_7.webp'
import likes_8 from './images/likes_8.webp'
import likes_9 from './images/likes_9.webp'
import likes_10 from './images/likes_10.webp'
import likes_11 from './images/likes_11.webp'
import likes_12 from './images/likes_12.webp'
import likes_13 from './images/likes_13.webp'
import { useEffect, useState } from 'react'

export default function Likes() {
  const [counts, setCounts] = useState({
    views: Array(13).fill(0),
    likes: Array(13).fill(0)
  });

  useEffect(() => {
    // 旋轉效果
    const liElements = document.querySelectorAll('.likes_content_img_content li');
    liElements.forEach(li => {
      const randomRotate = Math.random() * 10 - 5;
      li.style.transform = `rotate(${randomRotate}deg)`;
    });

    // 計數器效果
    const interval = setInterval(() => {
      setCounts(prev => ({
        views: prev.views.map(v => v < 1000 ? v + 0.5 : 0),
        likes: prev.likes.map(l => l < 5 ? l + 0.05 : 0)
      }));
    }, 50);

    // 滾動效果
    const handleScroll = () => {
      // 處理 likes_content_title 的滾動效果
      const titleElement = document.querySelector('.likes_content_title');
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // 計算標題在視窗中的位置比例
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        
        // 當標題開始進入視窗時開始消失
        if (rect.top < windowHeight && rect.bottom > 0) {
          const opacity = 1 - scrollProgress;
          const translateY = scrollProgress * 50; // 向下移動50px
          
          titleElement.style.opacity = Math.max(0, opacity);
          titleElement.style.transform = `translateY(${translateY}px)`;
          titleElement.style.transition = 'all 0.3s ease-out';
        } else if (rect.top >= windowHeight) {
          // 標題在視窗上方時完全顯示
          titleElement.style.opacity = '1';
          titleElement.style.transform = 'translateY(0)';
        } else {
          // 標題在視窗下方時完全隱藏
          titleElement.style.opacity = '0';
          titleElement.style.transform = 'translateY(50px)';
        }
      }

      // 處理其他元素的滾動效果
      const elements = document.querySelectorAll('.likes_content_img_ul_1, .likes_content_img_ul_2, .likes_content_img_ul_3, .likes_content_img_ul_4');
      
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.transition = `all 0.8s ease ${index * 0.2}s`;
        } else {
          element.style.opacity = '0';
          element.style.transform = 'translateY(100px)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化時執行一次

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="likes">
      <div className="likes_content">
        <div className="likes_content_title">
          <div className="likes_content_title_content">
            <h4>Our community is amazing. Players create videos, write fan fiction, create cosplay — they name children in honor of heroes in our games, make friends, and even find love in clans.</h4>
          </div>
        </div>
        <div className="likes_content_img">
          <div className="likes_content_img_content">
              <div className='likes_content_img_ul_1'>
                <div className='likes_content_img_ul_1_content'>
                      <ul>
                        <li>
                            <img src={likes_1} alt="likes_0" />
                            <div className='likes_content_img_ul_1_text'>
                                <div className='likes_content_img_ul_1_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[0])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[0].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_2} alt="likes_0" />
                            <div className='likes_content_img_ul_1_text'>
                                <div className='likes_content_img_ul_1_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[1])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[1].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_3} alt="likes_0" />
                            <div className='likes_content_img_ul_1_text'>
                                <div className='likes_content_img_ul_1_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[2])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[2].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                      </ul>
                </div>
              </div>
              <div className='likes_content_img_ul_2'>
                <div className='likes_content_img_ul_2_content'>
                    <ul>
                        <li>
                            <img src={likes_4} alt="likes_0" />
                            <div className='likes_content_img_ul_2_text'>
                                <div className='likes_content_img_ul_2_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[3])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[3].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_5} alt="likes_0" />
                            <div className='likes_content_img_ul_2_text'>
                                <div className='likes_content_img_ul_2_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[4])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[4].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_6} alt="likes_0" />
                            <div className='likes_content_img_ul_2_text'>
                                <div className='likes_content_img_ul_2_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[5])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[5].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
              </div>
              <div className='likes_content_img_ul_3'>
                <div className='likes_content_img_ul_3_content'>
                    <ul>
                        <li>
                            <img src={likes_7} alt="likes_0" />
                            <div className='likes_content_img_ul_3_text'>
                                <div className='likes_content_img_ul_3_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[6])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[6].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_8} alt="likes_0" />
                            <div className='likes_content_img_ul_3_text'>
                                <div className='likes_content_img_ul_3_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[7])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[7].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_9} alt="likes_0" />
                            <div className='likes_content_img_ul_3_text'>
                                <div className='likes_content_img_ul_3_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[8])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[8].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
              </div>
              <div className='likes_content_img_ul_4'>
                <div className='likes_content_img_ul_4_content'>
                    <ul>
                        <li>
                            <img src={likes_10} alt="likes_0" />
                            <div className='likes_content_img_ul_4_text'>
                                <div className='likes_content_img_ul_4_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[9])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[9].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_11} alt="likes_0" />
                            <div className='likes_content_img_ul_4_text'>
                                <div className='likes_content_img_ul_4_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[10])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[10].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_12} alt="likes_0" />
                            <div className='likes_content_img_ul_4_text'>
                                <div className='likes_content_img_ul_4_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[11])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[11].toFixed(1)} k</p></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={likes_13} alt="likes_0" />
                            <div className='likes_content_img_ul_4_text'>
                                <div className='likes_content_img_ul_4_text_content'>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Eye.svg'} alt="likes_1" /> <p>{Math.round(counts.views[12])} k</p></span>
                                    <span><img src={'https://cdn-company.plarium.com/meet/production/media/assets/icons/Like.svg'} alt="likes_1" /> <p>{counts.likes[12].toFixed(1)} k</p></span>
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
