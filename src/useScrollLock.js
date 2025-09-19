import { useEffect } from 'react';

/**
 * 統一的滾動鎖定 Hook
 * 用於管理彈跳視窗開啟時的背景滾動鎖定
 */
export const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      // 保存當前滾動位置
      const scrollY = window.scrollY;
      
      // 鎖定背景滾動
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.bottom = '0';
      
      // 防止 iOS Safari 的彈跳效果
      document.body.style.webkitOverflowScrolling = 'touch';
      
      // 保持當前滾動位置
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      
    } else {
      // 恢復背景滾動
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
      document.body.style.top = 'auto';
      document.body.style.left = 'auto';
      document.body.style.right = 'auto';
      document.body.style.bottom = 'auto';
      document.body.style.webkitOverflowScrolling = 'auto';
      
      // 恢復平滑滾動
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // 清理函數
    return () => {
      if (isLocked) {
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
        document.body.style.width = 'auto';
        document.body.style.height = 'auto';
        document.body.style.top = 'auto';
        document.body.style.left = 'auto';
        document.body.style.right = 'auto';
        document.body.style.bottom = 'auto';
        document.body.style.webkitOverflowScrolling = 'auto';
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };
  }, [isLocked]);
};

export default useScrollLock;
