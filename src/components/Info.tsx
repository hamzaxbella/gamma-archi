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
          <a className="text-sm" data-contact href="mailto:zyllux.agency@gmail.com">
            zyllux.agency@gmail.com
          </a>
          <div className="h-full border-r-thin" data-borders />
          <a className="text-sm" data-contact href="tel:+212654188581">
            (+212) 6 54 18 85 81
          </a>
          <div className="h-full border-r-thin" data-borders />
          <a className="text-sm" data-contact href="https://maps.app.goo.gl/" target="_blank" rel="noopener noreferrer">
            Agadir, sous massa maroc.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;