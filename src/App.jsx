import './Reset.sass'
import './Style.sass'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Professionals from './Professionals'
import Marquee from './Marquee'
import Office from './Office'
import Timeline from './Timeline'
import Likes from './Likes'
import Projects from './Projects'
import Game_1 from './Game_1'
import Game_2 from './Game_2'
import Game_3 from './Game_3'
import Game_4 from './Game_4'
import Audio from './Audio'
import Creation from './Creation'
import Pallium_play from './Pallium_play'
import Benefits from './Benefits'
import Support from './Support'
import Social from './Social'
import Image_film from './Image_film'
import Rewards from './Rewards'
import Community from './Community'
import Footer from './Footer'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // 設置平滑滾動
    document.documentElement.style.scrollBehavior = 'smooth';

    // 建立回到頂部按鈕
    const scrollToTop = document.createElement('button');
    scrollToTop.innerHTML = '↑';
    scrollToTop.style.cssText = `
      position: fixed;
      width: 50px;
      height: 50px;
      bottom: 20px;
      right: 20px;
      padding: 15px;
      background: #f24618;
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: none;
      z-index: 1000;
      font-size: 20px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      transform: translateY(20px);
    `;

    document.body.appendChild(scrollToTop);

    // 監聽滾動事件
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTop.style.display = 'block';
        setTimeout(() => {
          scrollToTop.style.opacity = '1';
          scrollToTop.style.transform = 'translateY(0)';
        }, 50);
      } else {
        scrollToTop.style.opacity = '0';
        scrollToTop.style.transform = 'translateY(20px)';
        setTimeout(() => {
          scrollToTop.style.display = 'none';
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 點擊回到頂部
    scrollToTop.addEventListener('click', () => {
      const scrollStep = -window.scrollY / (1000 / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    });

    // 清理函數
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(scrollToTop);
    };
  }, []);

  return (
    <>  
      <Header />
      <Banner />
      <About />
      <Professionals />
      <Marquee />
      <Office />
      <Timeline />
      <Likes />
      <Projects />
      <Game_1 />
      <Game_2 />
      <Game_3 />
      <Game_4 />
      <Audio />
      <Creation />
      <Pallium_play />
      <Benefits />
      <Support />
      <Social />
      <Image_film />
      <Rewards />
      <Community />
      <Footer />
    </>
  )
}

export default App
