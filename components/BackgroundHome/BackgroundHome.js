import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

const BackgroundHome = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          colorMode: "lerpGradient",
          quantity: 4.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div id="cvs" ref={myRef}></div>;
};

export default BackgroundHome;
