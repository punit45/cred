import React, { useEffect, useRef, useState } from 'react';
import "./productShowcase.css";

const ProductShowCase = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    const ref = useRef(null);

    const toggleAnimation = () => {
        showAnimation(true); 
    }

    const options = {
        root: null,
        rootMargin:'0px',
        threshold: 0.5,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);    
        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    })


  return (
    <div className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
    ref={ref}
    >
        <div className="showcase-wrapper">
            <img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            className="showcase-ui showcase-mockup-1" alt="cred-p2"
            />
             <img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            className="showcase-ui showcase-mockup-2" alt="cred-p3"
            />
             <img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            className="showcase-ui showcase-mockup-3" alt="cred-p4"
            />
             <img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            className="showcase-ui showcase-mockup-4" alt="cred-p5"
            />
             <img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            className="showcase-ui showcase-mockup-5" alt="cred-p6"
            />
        </div>
    </div>
  )
}

export default ProductShowCase;