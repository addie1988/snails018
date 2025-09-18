import { useState, useEffect } from 'react'
import logo from './images/logo.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // 監聽滾動事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const shouldBeScrolled = scrollTop > 50
      setIsScrolled(shouldBeScrolled)
      
      // 動態添加/移除body class
      if (shouldBeScrolled) {
        document.body.classList.add('header-fixed')
      } else {
        document.body.classList.remove('header-fixed')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('header-fixed')
    }
  }, [])

  // 監聽點擊事件，點擊空白處關閉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 檢查點擊的目標是否在 header 內部
      const header = document.querySelector('.header')
      if (header && !header.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
         <div className='header_content'>
            <div className='header_logo'>
                <div className="header_logo_content">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            
            {/* 桌面版選單 */}
            <div className='header_menu desktop-menu'>
                <div className='header_menu_content'>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Offices</a></li>
                        <li><a href='#'>History</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Benefits</a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>
                </div>
            </div>

            {/* 桌面版按鈕 */}
            <div className='header_button desktop-buttons'>
                <div className='header_button_content'>
                  <div className='header_button_content_uk'>
                  <a href='#'>uk</a>
                  <a href='#'>Vacancies</a>
                  </div>
                </div>
            </div>

            {/* 移動版漢堡選單按鈕 */}
            <div className='mobile-menu-toggle' onClick={toggleMenu}>
                <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
         </div>

         {/* 移動版下拉選單 */}
         <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className='mobile-menu-content'>
                <ul>
                    <li><a href='#' onClick={toggleMenu}>About</a></li>
                    <li><a href='#' onClick={toggleMenu}>Offices</a></li>
                    <li><a href='#' onClick={toggleMenu}>History</a></li>
                    <li><a href='#' onClick={toggleMenu}>Projects</a></li>
                    <li><a href='#' onClick={toggleMenu}>Benefits</a></li>
                    <li><a href='#' onClick={toggleMenu}>Blog</a></li>
                </ul>
                <div className='mobile-buttons'>
                    <a href='#' onClick={toggleMenu}>uk</a>
                    <a href='#' onClick={toggleMenu}>Vacancies</a>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Header