import React from 'react';
import './App.css';
import CharlieLogo from './content/charlie-logo.png';

import CharlieDetection from './content/charlie-detection.png';
import OpenVino from './content/openvino-logo.png';
import Charlie from './content/robot.png';
import UnitedNations from './content/UN.jpg';
import CharlieDemo from './content/here-charlie-video.mp4';

import Github from './content/github-logo.png';
import Announcement from './components/Announcement';
import Feature from './components/Feature';

function App() {

  return (
    <div className='container'>
      <section className='header'>  
        <div className='header-branding'>
          <img className='header-image' alt='charlie-logo' src={CharlieLogo} />
          <p>Here-Charlie</p>
        </div>
        <img className='header-image' alt='github logo' src={Github} />
      </section>

      <main className='content'>

        <section className='content-hero'>
          <div className='content-hero-text'>
            <p className='content-hero-text-billboard'>Venture Outwards with A Robotic Service Dog</p>
            <p className='content-hero-text-subtext'>endorsed by Intel</p>
          </div>

          <img alt='charlie' src={Charlie} />
        </section>

        <Announcement
          header="What's so special about Charlie?"
          subtext="Our robotic service dog, Charlie, is built to assist those that are visually impaired. Charlie aims to regain functions that were lost due to visual impairment and be affordable." 
        />

        <Feature 
          image={CharlieDetection}
          header={"Equipped With Lidar and Programmed with ROS"}
          subtext={"so you know he's quick. Charlie can detect still and moving objects at blazing speeds, accurately."}
        />

        <Feature 
          image={OpenVino}
          header={'Trained From Over 10,000 Pictures (and counting)'}
          subtext={"using YoloV7 and Intel's OpenVino for Charlie to adapt to practically any situtation, outside on the streets or inside the home."}
          orientation='right'
        />

        {/* it's called a content explosion because of how ridiculously large the text is */}
        <section className='content-explosion'>
          <p className='content-explosion-header'>Service Dogs can up to $50,000 and take two years to train</p>
          <p className='content-explosion-subtext'>Compare that to Charlie, who has a price point of around <mark>$10,000 or less</mark></p>
        </section>

        <section className='content-explosion-two'>
          <img alt='united nations' src={UnitedNations} />

          <div className='content-explosion-two-text'>
            <p className='content-explosion-two-text-header'>And Here's the Impact.</p>
            <p className='content-explosion-two-text-subtext'>United Nations goals three and ten, Health and Well-Being, and Reducing Inequalities.</p>
          </div>
        </section>

        <section className='content-demo'>

          <div className='content-demo-text'>
            <p className='content-demo-text-header'>Still not convinced?</p>
            <p className='content-demo-text-subtext'>Watch our in-action demonstration video!</p>
          </div>

          <video src={CharlieDemo} controls />
        </section>

        <section className='content-purchase'>
          <div className='content-purchase-branding'>
            <img className='content-purchase-branding-image' alt='charlie-logo' src={CharlieLogo} />
            <p>Here-Charlie</p>
          </div>

          <a className='content-purchase-button' href='https://here-charlie.github.io'>Order Now</a>
        </section>
      </main>

      <footer>
        <p>©2024 Here-Charlie Group All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
