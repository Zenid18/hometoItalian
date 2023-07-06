import React, { useEffect, useRef, useState }  from 'react';
import './style.css';

const Card = ({ direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = cardRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Adjust the threshold value as needed
      setIsVisible(top < windowHeight * 0.75);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card ${isVisible ? 'slide-in' : ''} ${direction}`}
    >
      {/* Card content */}
    </div>
  );
};

export default Card;