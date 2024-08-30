import React, { useEffect, useRef } from "react";
import { introAnimation , collapse } from "./animate";
import gsap from "gsap";


const Loader = ({timeline} : gsap.core.Timeline) => {

    const overlayRef = useRef<HTMLDivElement>(null)
    const progressBarRef = useRef<HTMLDivElement>(null)
    const progressNumberRef = useRef<HTMLSpanElement>(null)


    useEffect(() => {
      console.log('working hommie')
        timeline && 
        timeline.add(introAnimation(progressNumberRef , progressBarRef) , 0).add(collapse(overlayRef))
      } , [timeline])

    
      return (
        <div
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          className=" overflow-hidden z-30 fixed top-0 left-0 w-[100vw] h-[100vh] bg-thirdly flex flex-col justify-center items-center gap-6"
          ref={overlayRef}
        >
          <div>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 h-px w-0 bg-effect" ref={progressBarRef}/>
            <span className="text-8xl font-thin absolute bottom-4 right-4" ref={progressNumberRef}>
              0 
            </span>
          </div>
        </div>
      );
    };

export default Loader;
