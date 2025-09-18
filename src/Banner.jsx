import React, { useState, useEffect } from 'react'

function Banner() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  
  const fullText = "Scroll down >>>"
  
  useEffect(() => {
    if (currentIndex < fullText.length && isAnimating) {
      const timer = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 200) // 每個字間隔200ms
      
      return () => clearTimeout(timer)
    } else if (currentIndex >= fullText.length) {
      // 動畫完成後，等待3秒重新開始
      const restartTimer = setTimeout(() => {
        setCurrentText('')
        setCurrentIndex(0)
        setIsAnimating(true)
      }, 3000)
      
      return () => clearTimeout(restartTimer)
    }
  }, [currentIndex, fullText, isAnimating])
  

  return (
    <>
      <div className='banner'>
          <div className='banner_content'>
              <div className='banner_content_image'>
                  <div className='banner_content_image_content'>
                      <video src={'https://cdn-company.plarium.com/meet/production/media/assets/videos/raid.mp4'} autoPlay loop muted />
                  </div>
              </div>
              <div className='banner_content_text'>
                <div className='banner_content_text_content'>
                  <div className='typing-container'>
                    <p className='typing-text'>
                      {currentText.split('').map((letter, index) => (
                        <span
                          key={index}
                          className={`letter letter-${index}`}
                          style={{
                            animation: `fadeIn 0.8s ease ${index * 0.1}s forwards, glow 2s ease ${index * 0.1 + 0.5}s infinite`,
                            opacity: 0,
                            display: 'inline-block',
                            marginRight: letter === ' ' ? '0.3em' : '0.1em'
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                      <span className='cursor'>|</span>
                    </p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Banner