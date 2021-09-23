import React from "react";
import sky from './assests/images/sky.png'
import  mountain from './assests/images/pahad1.png'
import man from './assests/images/pahadman.png'
import cloud from './assests/images/cloud.png'

import './parallex.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
function HomeBanner() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#background",
        start: "top top",
        scrub: 1
    }
});

const elem = gsap.utils.toArray('.parallax').forEach(elem => {
    const depth = elem.dataset.depth;
    const shifting = -(depth * (elem.offsetHeight*1.1));
    tl.to(elem, {
        y: shifting,
        ease: "none"
    }, 0)
    .to('#overlay', {
        opacity: 0,
        ease: "none"
    }, 0)
})



const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#content",
        start: "top center",
        toggleActions: 'play pause resume reverse'
    }
});

tl2.from('.block', {
    stagger: .3,
    opacity: 0,
    delay: .1,
    duration: 1,
    ease: 'Expo.easeInOut'
})
.from('.block .img', {
    stagger: .1,
    opacity: 0,
    duration: 1.5,
    ease: 'Expo.easeInOut'
})
.from('#content p', {
    y: 10,
    opacity: 0,
    duration: 1.5,
    ease: 'Expo.easeInOut'
})
  return (
      <div >
          <div id="background">
               <div id="overlay">
            <nav>
                <h3>Ready.co</h3>
                <button>Sign In</button>
            </nav>
            <h1>Fly High</h1>
            <footer>
                <div id="left">
                    <h2><span id="big">09</span>/10</h2>
                </div>
                <div id="right">
                    <a href="#">faceeboxok</a>
                    <a href="#">twitter</a>
                    <a href="#">twitch</a>
                </div>
            </footer>
        </div>
 
         <img data-depth=".08" id="cloud" className="parallax" src={cloud} alt=""/>
         <img data-depth=".08" id="sky" className="parallax" src={sky} alt=""/>
        <img data-depth=".1" id="pahad" className="parallax" src={mountain} alt=""/>
        <img data-depth=".2" id="man" className="parallax" src={man} alt=""/>
        <div id="gradient"></div>
         </div>
           <div id="content">
        <div id="elems">
            <div className="block">
                <div className="img"></div>
                <h5>air</h5>
            </div>
            <div className="block">
                <div className="img"></div>
                <h5>land</h5>
            </div>
            <div className="block">
                <div className="img"></div>
                <h5>sea</h5>
            </div>
            <div className="block">
                <div className="img"></div>
                <h5>space</h5>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.sdfs Impedit aut, aspernatur vero odit animi eaque quas sed iure quisquam velit inventore ducimus molestias doloremque laudantium sapiente explicabo ex. Laboriosam magnam at quod, voluptatum unde quibusdam.</p>
    </div>
          
      
    </div>
  );
}

export default HomeBanner;
