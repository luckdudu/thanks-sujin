import React, { useState, useEffect } from "react";
import './ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) { // 300px 이상 스크롤 시 버튼 표시
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 버튼 클릭 시 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button 
      className={`scroll-button ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollButton;
