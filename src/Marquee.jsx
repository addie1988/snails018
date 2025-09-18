import React, { useEffect, useRef } from 'react'
import marquee_1 from './images/marquee_1.webp'
import marquee_2 from './images/marquee_2.webp'
import marquee_3 from './images/marquee_3.webp'
import marquee_4 from './images/marquee_4.webp'
import marquee_5 from './images/marquee_5.webp'
import marquee_6 from './images/marquee_6.webp'
import marquee_7 from './images/marquee_7.webp'
import marquee_8 from './images/marquee_8.webp'

function Marquee() {
  const marqueeRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    const container = containerRef.current
    
    if (!marquee || !container) return

    let animationId
    let position = 0
    const speed = 1 // 移動速度，可以調整

    const animate = () => {
      position -= speed
      marquee.style.transform = `translateX(${position}px)`

      // 檢查第一組圖片是否已經完全移出視窗
      const firstImage = marquee.querySelector('li:first-child')
      if (firstImage) {
        const imageWidth = firstImage.offsetWidth
        const gap = 10 // 圖片間距
        const totalWidth = (imageWidth + gap) * 8 // 8張圖片的總寬度
        
        // 當移動距離超過一組圖片的總寬度時，重設位置
        if (Math.abs(position) >= totalWidth) {
          position = 0
          marquee.style.transform = `translateX(${position}px)`
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const images = [
    marquee_1, marquee_2, marquee_3, marquee_4,
    marquee_5, marquee_6, marquee_7, marquee_8
  ]

  // 複製兩組圖片來實現無縫循環
  const repeatedImages = [...images, ...images]

  return (
    <div className='marquee'>
      <div className='marquee_content' ref={containerRef}>
        <ul ref={marqueeRef}>
          {repeatedImages.map((img, index) => (
            <li key={index}>
              <img src={img} alt={`marquee ${(index % 8) + 1}`} />
              {/* 雙數 li 添加內文 */}
              {index % 2 === 1 && (
                <div className="marquee-text">
                  {index % 8 === 1 && <p>At our annual Game Jam, <br /> we create up to 15 games</p>}
                  {index % 8 === 3 && <p>These pretty kitties got <br /> 920 likes on our Instagram</p>}
                  {index % 8 === 5 && <p>One of our Plarium Run Club <br /> charity races raised $37,025</p>}
                  {index % 8 === 7 && <p>At one Game Jam, <br />  a team built wings <br />  to control a character </p>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Marquee