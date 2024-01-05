// CustomCursor.js
import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  // State to track the position of the cursor
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect to update the position of the cursor on mousemove
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mousemove
    document.addEventListener('mousemove', updatePosition);

    // Cleanup: remove event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default CustomCursor;
