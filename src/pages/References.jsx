import React, { useEffect, useRef } from "react";

import rf1 from "../assets/rf1.png";
import rf2 from "../assets/rf2.png";
import rf3 from "../assets/rf3.png";
import rf4 from "../assets/rf4.png";
import rf5 from "../assets/rf5.png";
import rf6 from "../assets/rf6.png";
import rf7 from "../assets/rf7.png";
import rf8 from "../assets/rf8.png";
import rf9 from "../assets/rf9.png";
import rf10 from "../assets/rf10.png";
import rf11 from "../assets/rf11.png";
import rf12 from "../assets/rf12.png";
import rf13 from "../assets/rf13.png";
import rf14 from "../assets/rf14.png";
import rf15 from "../assets/rf15.png";
import rf16 from "../assets/rf16.png";
import rf17 from "../assets/rf17.png";
import rf18 from "../assets/rf18.png";
import rf19 from "../assets/rf19.png";
import rf20 from "../assets/rf20.png";
import rf21 from "../assets/rf21.png";
import rf22 from "../assets/rf22.png";
import rf23 from "../assets/rf23.png";
import rf24 from "../assets/rf24.png";
import rf25 from "../assets/rf25.png";

const brands = [
  rf1, rf2, rf3, rf4, rf5, rf6, rf7, rf8, rf9, rf10,
  rf11, rf12, rf13, rf14, rf15, rf16, rf17, rf18, rf19, rf20,
  rf21, rf22, rf23, rf24, rf25
];

const BrandsLogo = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollAmount = 0;
    let speed = 1;

    const moveMarquee = () => {
      if (marquee) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(moveMarquee);
    };

    moveMarquee();
  }, []);

  return (
    <div className="overflow-hidden relative w-full bg-gray-100 py-6">
      <div className="flex items-center justify-center w-full">
        <div className="flex whitespace-nowrap gap-10" ref={marqueeRef}>
          {brands.concat(brands).map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-12 sm:h-16 md:h-20"
            />
          ))}
        </div>
      </div>
    </div>
  );
};  

export default BrandsLogo;