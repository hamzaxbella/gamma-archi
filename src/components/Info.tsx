import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimateContact } from "./animate";
const Info = () => {
  const timeline = useRef(gsap.timeline())
  const container = useRef(null)
  useGSAP(
    () => {
      const tl = timeline.current;

      tl.add(AnimateContact());
    },
    { scope: container }
  );

  
  return (
    <div ref={container} data-contact className="w-full hidden lg:block">
      <div className="absolute margin-x -left-20 z-10 -top-10  w-20 h-20 bg-effect blur-3xl" />
      <div className=" border-b-thin h-10 " data-borders>
        <div className="h-full flex justify-between max-container  gap-16 items-center">
          <p data-contact>karaayaarchitecture@gmail.com</p>
          <div className="h-full border-r-thin" data-borders />
          <p data-contact>05.39.93.45.39</p>
          <div className="h-full border-r-thin" data-borders />
          <p data-contact>
            35, rue Mossa Ibn Noussair, 1ᵉʳ étage, n° 1, 90020 Tanger, Maroc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
