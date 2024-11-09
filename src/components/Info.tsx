import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimateContact } from "./animate";

const Info = () => {
  const timeline = useRef(gsap.timeline());
  const container = useRef(null);
  
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
      <div className="border-b-thin h-10" data-borders>
        <div className="h-full flex justify-between max-container gap-12 items-center">
          <a className="text-sm" data-contact href="mailto:karaayaarchitecture@gmail.com">
            karaayaarchitecture@gmail.com
          </a>
          <div className="h-full border-r-thin" data-borders />
          <a className="text-sm" data-contact href="mailto:Kaa.bureau@gmail.com">
            Kaa.bureau@gmail.com
          </a>
          <div className="h-full border-r-thin" data-borders />
          <a className="text-sm" data-contact href="tel:+212539935439">
            (+212) 5 39 93 54 39
          </a>
          <div className="h-full border-r-thin" data-borders />
          <a className="text-sm" data-contact href="https://maps.app.goo.gl/wDt8tA8ASPNAPmvx5" target="_blank" rel="noopener noreferrer">
            35 rue moussa ibn noussair, 1ᵉʳ étage Tangier, Morocco 90020
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;