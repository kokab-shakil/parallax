import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assests/images/pahad1.png"
const Test = () => {
     const headerRef = useRef(null);
    const [background, setBackground] = useState('red');
     
    
 
    const toggleBackground = () => {
        const color = background === '#5a7d95' ? 'yellow' : 'green';
        setBackground(color);
    }
 
    useEffect(() => {
 
        gsap.to(headerRef.current, {
            backgroundColor: background,
            duration: 1, 
            ease: 'none'
        });
 
    }, [background]);
 
    return (
      
        <div>
             <div className="App">
            ...
            <button  ref={headerRef} onClick={() => toggleBackground()}>Change background</button>
            ...
        </div>
        </div>
    );
}
export default Test;