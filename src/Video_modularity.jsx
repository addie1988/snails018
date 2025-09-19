import { useState, useEffect } from "react";

export default function Video_modularity({ isOpen, onClose, videoSrc }) {
    
  // 滾動鎖定效果
  useEffect(() => {
    if (isOpen) {
      // 鎖定背景滾動
      document.body.style.overflow = 'hidden';
      // 防止 iOS Safari 的彈跳效果
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
    } else {
      // 恢復背景滾動
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
      document.body.style.top = 'auto';
      document.body.style.left = 'auto';
    }

    // 清理函數
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
      document.body.style.top = 'auto';
      document.body.style.left = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* 彈出視窗元件 */}
      {isOpen && (
        <div className="video-modal-overlay" onClick={onClose}>
          <div 
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close" onClick={onClose}>
              ×
            </button>
            <video
              src={videoSrc}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="video-modal-video"
            />
          </div>
        </div>
      )}
    </>
  );
}
