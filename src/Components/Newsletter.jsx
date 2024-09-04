import React, { useEffect, useRef } from 'react';
import '../subscribe.css'; 
import '../Animation/animation.css'; 

export default function Newsletter() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.5 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="newsletter-container">
      <div className="content-newsletter">
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p>lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsam ex voluptas fuga.</p>
        <p>lorem ipsum dolor sit amet consectetur.</p>
        <div className="subscribe-bar">
          <input type="email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
