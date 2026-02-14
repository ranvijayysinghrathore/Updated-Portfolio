import React, { useState, useEffect, useCallback } from 'react';

const Info = () => {
  const [count, setCount] = useState(20); 
  const target = 20; 
  const [hasStarted, setHasStarted] = useState(false); 

  const startCounting = useCallback(() => {
    if (count < target) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count, target]);

  useEffect(() => {
    let interval;
    if (hasStarted) {
      interval = setInterval(() => {
        startCounting();
      }, 50); 
    }
    return () => clearInterval(interval); 
  }, [hasStarted, count, startCounting]);

  const checkIfInView = useCallback(() => {
    const section = document.getElementById('completed-projects');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !hasStarted) {
        setHasStarted(true); 
      }
    }
  }, [hasStarted]);

  useEffect(() => {
    window.addEventListener('scroll', checkIfInView);
    return () => {
      window.removeEventListener('scroll', checkIfInView);
    };
  }, [checkIfInView]);

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div>

      <div className="about__box" id="completed-projects">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">{count}+ Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
