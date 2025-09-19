import React, { useEffect, useRef } from 'react'

// 動態光點背景組件
const FloatingLights = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const lightsRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // 設置畫布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 光點類別
    class Light {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100 // 從底部開始
        this.size = Math.random() * 3 + 1
        this.speed = Math.random() * 0.8 + 0.2
        this.opacity = 0
        this.maxOpacity = Math.random() * 0.8 + 0.2
        this.fadeInSpeed = Math.random() * 0.02 + 0.01
        this.fadeOutSpeed = Math.random() * 0.01 + 0.005
        this.isFadingIn = true
        this.color = this.getRandomColor()
      }

      getRandomColor() {
        const colors = [
          '#FFD700', // 金色
          '#FFA500', // 橙色
          '#FF69B4', // 熱粉色
          '#00BFFF', // 深天藍
          '#98FB98', // 淺綠色
          '#DDA0DD', // 梅紅色
          '#F0E68C', // 卡其色
          '#FFB6C1'  // 淺粉色
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // 向上移動
        this.y -= this.speed
        
        // 淡入淡出邏輯
        if (this.isFadingIn) {
          this.opacity += this.fadeInSpeed
          if (this.opacity >= this.maxOpacity) {
            this.opacity = this.maxOpacity
            this.isFadingIn = false
          }
        } else {
          this.opacity -= this.fadeOutSpeed
        }

        // 如果光點超出頂部或完全透明，重新生成
        if (this.y < -50 || this.opacity <= 0) {
          this.x = Math.random() * canvas.width
          this.y = canvas.height + Math.random() * 100
          this.opacity = 0
          this.isFadingIn = true
          this.speed = Math.random() * 0.8 + 0.2
          this.maxOpacity = Math.random() * 0.8 + 0.2
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // 初始化光點
    const initLights = () => {
      lightsRef.current = []
      for (let i = 0; i < 50; i++) {
        lightsRef.current.push(new Light())
      }
    }

    // 動畫循環
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      lightsRef.current.forEach(light => {
        light.update()
        light.draw()
      })

      // 隨機添加新光點
      if (Math.random() < 0.1) {
        lightsRef.current.push(new Light())
      }

      // 限制光點數量
      if (lightsRef.current.length > 80) {
        lightsRef.current = lightsRef.current.slice(-60)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    initLights()
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default function Rewards() {
  return (
    <div className='rewards'>
      <FloatingLights />
      <div className='rewards_content'>
        <div className='rewards_content_img'>
            <div className='rewards_content_img_content'>
                <img src={'https://cdn-company.plarium.com/meet/production/media/assets/images/icon-resource.svg'} alt="rewards_content_img" />
            </div>
        </div>
        <div className='rewards_content_text'>
            <div className='rewards_content_text_content'>
                <h3>Congratulations – you've opened the site's bonus level</h3>
                <p>Push the button and check it out!</p>
            </div>
        </div>
        <div className='rewards_content_button'>
            <div className='rewards_content_button_content'>
                <a href="#">Play</a>
            </div>
        </div>
      </div>
    </div>
  )
}