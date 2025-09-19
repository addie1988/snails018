import { useState, useEffect } from "react";
import useScrollLock from "./useScrollLock";

export default function Video_modularity({ isOpen, onClose, videoSrc }) {
    
  // 使用統一的滾動鎖定 Hook
  useScrollLock(isOpen);

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
