// MainContent.jsx

import React, {useEffect} from 'react';
import '../styles/MainContent.css';
import Elena from '../assets/Ellipse 107.jpg'
import Ellipse from '../assets/Group 1.jpg'

function MainContent() {
  useEffect(() => {
        let animationFrameId;

        const animateEllipse = (timestamp) => {
          const x = Math.sin(timestamp / 100) * 20; 
          const y = Math.cos(timestamp / 100) * 20;
          
          // const scrollY = window.scrollY;
          // console.log('Scroll Y:', scrollY);
          
          const ellipse = document.getElementById('ellipse');
          console.log('Ellipse:', ellipse);
          
          if (ellipse) {
            ellipse.style.transform = `translate(${x}px, ${y}px)`;
          }

          animationFrameId = requestAnimationFrame(animateEllipse);

        }
        
        animationFrameId = requestAnimationFrame(animateEllipse);
  

        return () => {
          cancelAnimationFrame(animationFrameId);
    };
  
});


  return (
    <main>
      <h1>Welcome to My Website</h1>
      <div>
        <img src={Elena} className='elena' alt='elena'/>
      </div>
      <div>
        <img src={Ellipse} id='ellipse' className='ellipse' alt='ellipse'/>
      </div>
      <p>This is the main content of the homepage.</p>
      <h1>“How you do anything is how you     
          do everything!“</h1>
      <h5>- Martha Beck</h5>
    </main>
  );
}

export default MainContent;
