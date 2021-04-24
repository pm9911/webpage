import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Supporting the architecture of skin</h1>
      <h4>vitamine C for Day and Night</h4>
      <p>Vitamin C is essential for enhancing<br />
        the skin’s resilience. Suited to use both<br />
        morning and evening, this potent ingredient <br />
        offers significant benefits when paired with <br />
        time and dedication.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Discover More About Vitamine C <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
