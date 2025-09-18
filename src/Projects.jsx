import { useEffect, useState } from 'react'
import imagesprojects_1 from './images/projects_1.webp'
import imagesprojects_2 from './images/projects_2.webp'
import imagesprojects_3 from './images/projects_3.webp'
import imagesprojects_4 from './images/projects_4.webp'
import imagesprojects_5 from './images/projects_5.webp'
import imagesprojects_6 from './images/projects_6.webp'
import imagesprojects_7 from './images/projects_7.webp'
import imagesprojects_9 from './images/projects_9.webp'
import imagesprojects_10 from './images/projects_10.webp'
import imagesprojects_11 from './images/projects_11.webp'
import imagesprojects_12 from './images/projects_12.webp'
import imagesprojects_13 from './images/projects_13.webp'
import imagesprojects_14 from './images/projects_14.webp'
import imagesprojects_15 from './images/projects_15.webp'
import imagesprojects_16 from './images/projects_16.webp'
import imagesprojects_17 from './images/projects_17.webp'
import imagesprojects_18 from './images/projects_18.webp'
import imagesprojects_19 from './images/projects_19.webp'
import imagesprojects_20 from './images/projects_20.webp'
import imagesprojects_21 from './images/projects_21.webp'
import imagesprojects_22 from './images/projects_22.webp'
import imagesprojects_23 from './images/projects_23.webp'
import imagesprojects_24 from './images/projects_24.webp'
import imagesprojects_25 from './images/projects_25.webp'
import imagesprojects_26 from './images/projects_26.webp'
import imagesprojects_27 from './images/projects_27.webp'
import imagesprojects_28 from './images/projects_28.webp'
import imagesprojects_29 from './images/projects_29.webp'
import imagesprojects_30 from './images/projects_30.webp'
import imagesprojects_31 from './images/projects_31.webp'
import imagesprojects_32 from './images/projects_32.webp'
import imagesprojects_33 from './images/projects_33.webp'
import imagesprojects_34 from './images/projects_34.webp'
import imagesprojects_35 from './images/projects_35.webp'
import imagesprojects_36 from './images/projects_36.webp'
import imagesprojects_37 from './images/projects_37.webp'
import imagesprojects_38 from './images/projects_38.webp'
import imagesprojects_39 from './images/projects_39.webp'
import imagesprojects_40 from './images/projects_40.webp'
import imagesprojects_41 from './images/projects_41.webp'
import imagesprojects_42 from './images/projects_42.webp'
import imagesprojects_43 from './images/projects_43.webp'
import imagesprojects_44 from './images/projects_44.webp'
import imagesprojects_45 from './images/projects_45.webp'
import imagesprojects_46 from './images/projects_46.webp'
import imagesprojects_47 from './images/projects_47.webp'
import imagesprojects_48 from './images/projects_48.webp'
import imagesprojects_49 from './images/projects_49.webp'
import imagesprojects_50 from './images/projects_50.webp'
import imagesprojects_51 from './images/projects_51.webp'
import imagesprojects_52 from './images/projects_52.webp'
import imagesprojects_53 from './images/projects_53.webp'

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fontSize, setFontSize] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  
  const images = [
    imagesprojects_1, imagesprojects_2, imagesprojects_3, imagesprojects_4,
    imagesprojects_5, imagesprojects_6, imagesprojects_7, imagesprojects_9,
    imagesprojects_10, imagesprojects_11, imagesprojects_12, imagesprojects_13,
    imagesprojects_14, imagesprojects_15, imagesprojects_16, imagesprojects_17,
    imagesprojects_18, imagesprojects_19, imagesprojects_20, imagesprojects_21,
    imagesprojects_22, imagesprojects_23, imagesprojects_24, imagesprojects_25,
    imagesprojects_26, imagesprojects_27, imagesprojects_28, imagesprojects_29,
    imagesprojects_30, imagesprojects_31, imagesprojects_32, imagesprojects_33,
    imagesprojects_34, imagesprojects_35, imagesprojects_36, imagesprojects_37,
    imagesprojects_38, imagesprojects_39, imagesprojects_40, imagesprojects_41,
    imagesprojects_42, imagesprojects_43, imagesprojects_44, imagesprojects_45,
    imagesprojects_46, imagesprojects_47, imagesprojects_48, imagesprojects_49,
    imagesprojects_50, imagesprojects_51, imagesprojects_52, imagesprojects_53
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        if (currentIndex === images.length - 1) {
          setIsPaused(true)
          setTimeout(() => {
            setCurrentIndex(0)
            setFontSize(1)
            setIsPaused(false)
          }, 5000) // 停留5秒後重播
        } else {
          setCurrentIndex(prev => (prev + 1) % images.length)
          setFontSize(prev => Math.min(prev + 0.1, 22))
        }
      }
    }, 100)
    return () => clearInterval(interval)
  }, [currentIndex, isPaused, images.length])

  return (
    <div className='projects'>
      <div className='projects_content'>
        <ul style={{
          position: 'relative',
          height: '120vh',
          overflow: 'hidden'
        }}>
          <li style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: currentIndex === images.length - 1 ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            zIndex: 1
          }}>
            <h1 style={{
              color: '#fff', 
              fontSize: `${fontSize}em`,
              transition: 'font-size 0.3s ease-out',
              fontFamily: 'UnifrakturCook'
            }}>Projects</h1>
          </li>
          {images.map((img, index) => (
            <li key={index} style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index <= currentIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}>
              <img src={img} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects