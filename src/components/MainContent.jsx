// MainContent.jsx

import React, {useEffect, useState} from 'react';
import '../styles/MainContent.css';
import Elena from '../assets/Ellipse 107.jpg'
import Ellipse from '../assets/Group 1.jpg'

function MainContent() {

  const sentences = [
    `"How you do anything is how you do everything!" - Martha Beck`,
    `"The only way to do great work is to love what you do." - Steve Jobs`,
    `"Believe you can and you're halfway there." - Theodore Roosevelt`,
    `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  
  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length)
    }, 2000);
    
    return () => clearInterval(timer); 
  }, [currentSentenceIndex, sentences.length]);

  const currentSentence = sentences[currentSentenceIndex];
  
  useEffect(() => {

        let animationFrameId;

        const preloadImages = () => {
          const elenaImage = new Image();
          elenaImage.src = Elena;
          elenaImage.onload = startAnimation;

          const ellipseImage = new Image();
          ellipseImage.src = Ellipse;
          ellipseImage.onload = startAnimation;
        }

        const startAnimation = () => {
          requestAnimationFrame(animateEllipse);
        } 

        const animateEllipse = (timestamp) => {
          const x = Math.sin(timestamp / 200) * 200; 
          const y = Math.cos(timestamp / 200) * 200;
          
          const ellipse = document.getElementById('ellipse');
          
          if (ellipse) {
            ellipse.style.transform = `translate(${x}px, ${y}px)`;
          }

          animationFrameId = requestAnimationFrame(animateEllipse);

        }
        
        animationFrameId = requestAnimationFrame(animateEllipse);

        preloadImages();
  

        return () => {
          cancelAnimationFrame(animationFrameId);
    };
  
});


  return (
    <main>
    <div className='content-container'>

      <div className='images-container'>
        <div>
          <img src={Elena} className='elena' alt='elena'/>
        </div>
        <div>
          <img src={Ellipse} id='ellipse' className='ellipse' alt='ellipse'/>
        </div>
      </div>

    <div className='text-container'>
      <h3>I currently reside in Berlin, Germany.</h3>

        <p>Before moving to Berlin, I lived in Skopje, Macedonia. Back in Skopje where I grew up, I got my masters degree in architecture.

        Being passionate about art and design and my experience as an architect and an engineer has taught me how to be detail-oriented, responsible and committed to a project and a specific task with a get-it-done and on-time product spirit. 

        Finding logic in everyday things, how they work and how people react to them made me think more broadly on this topic. I have always preferred practical and functional things, so I became interested in creating digital designs that would have the same features.</p>

      </div>
    </div>

    <h3 id='animated-text' className='animated-text'>{currentSentence}</h3>
      <h5>- Martha Beck</h5>
    </main>
  );
}

export default MainContent;
