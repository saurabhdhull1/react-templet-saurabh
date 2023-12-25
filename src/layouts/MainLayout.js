import React, { useState, useEffect } from 'react';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ProgressBar } from 'react-bootstrap';
import '../App.css';

const CircularProgressBar = ({ percentage }) => {
  const radius = 25; // Half of the circle's width and height
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <svg height="50" width="50" style={{overflow: 'visible'}}>
        <circle
          className="progress-circle"
          stroke="#007bff" // Set your desired color here
          strokeWidth="5"
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="progress-text">
          {`${Math.round(percentage)}%`}
        </text>
      </svg>
    </div>
  );
};

const MainLayout = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <MyNavbar />
      <main>{children}</main>
      <Footer />
      <img 
      className="btn btn-danger p-2"
      id="btn-back-to-top"
      onClick={backToTop} 
      src="/gototop.svg" 
      alt="Go to Top" 
      />
      <CircularProgressBar percentage={scrollProgress} />
    </div>
  );
};

export default MainLayout;
