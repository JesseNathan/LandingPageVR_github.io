import React, { useEffect, useRef } from "react";
import Navbar from './Components/Navbar'
import Circle from './Components/circle';
import VRImage from './Components/VRManImage';
import Footer from "./Components/Footer";
import Newsletter from './Components/Newsletter';
import img1 from './image/vrGirl.png'
import img2 from './image/VR-Images1.jpg'
import img3 from './image/VR-Images2.jpg'
import img4 from './image/VR-Images3.jpg'
import './Animation/animation.css';   
import './section2.css'
import './subscribe.css'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  <BrowserRouter>
    <Routes>
      <Route index element = {<home/>}/>
      <Route path ='Product' element = {<product/ >}/>
    </Routes>
  </BrowserRouter>

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        }else{
          entry.target.classList.remove('slide-up');
        }
      });
    });

    const items = containerRef.current.querySelectorAll('.vr-item');
    items.forEach((element, index) => {
      element.style.transitionDelay = `${index * 0.2}s`; // Delay setiap item
      observer.observe(element);
    });

    return () => {
      items.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <body>
      <div className="page1">
        <Navbar />

        <section class="hero">
        <Circle />
          <div class="hero-content">
              <h1>Next Future <br/><span>Virtual Reality</span></h1>
              <p className='josefin'>The Future Of Virtual Reality is increasingly multisensory, allowing users to experience the metaverse with all their senses. The more realistic the virtual world, the more immersive the experience.</p>
              <div class="cta-buttons">
                  <a href="#" class="btn-primary">Get it Now</a>
                  <a href="#" class="btn-secondary">Explore Device</a>
              </div>
          </div>
          <div class="hero-image">
              <img src={img1} alt="VR Girl"/>
          </div>
        </section>      
      </div>

      <div ref={containerRef} class="container">
          <h1>Choose VR What You Need</h1>
          <div class="vr-options">
              <div class="vr-item">
                  <img src={img2} alt="Gear VR Headset"/>
                  <p>Gear VR Headset</p>
              </div>
              <div class="vr-item">
                  <img src={img3} alt="Smart VR Headset"/>
                  <p>Smart VR Headset</p>
              </div>
              <div class="vr-item">
                  <img src={img4} alt="Play Station VR"/>
                  <p>Play Station VR</p>
              </div>
          </div>
      </div>

      <div className="container2">
         <div className="hero-content2">
            <h1>Experience Our <br/> Latest <span>VR Product</span></h1>
            <p className="featureDetail">The Future Of Virtual Reality is inreasingly multisensory, allowing users to experience the metaverse with all their senses. The more realistic the virtual world, the more immersive the experience</p>
            
            <div className="Feature">
              <div className="main">
                <p> <span>20+ </span> <br />  World of Experience </p>
              </div>
              <div className="main2">
                <p> <span>15k+</span> <br/> Play VR of the Years</p>
              </div>
              <div className="main2">
                <p> <span>4k+</span> <br/> Happy Client </p>
              </div>
              <div className="main2">
                <p> <span>1k+</span> <br/> All Product Popular</p>
              </div>  
            </div>
         </div>

        <VRImage />
      </div>

     <Newsletter />

    <Footer />
    </body>

  )
}

export default App
