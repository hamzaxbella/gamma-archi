import gsap from "gsap";

// Define the types for the refs
export const introAnimation = (
    progressNumberRef: React.RefObject<HTMLSpanElement>,
    progressBarRef: React.RefObject<HTMLSpanElement>
  ) => {
    const tl = gsap.timeline();
    tl.to(
      progressBarRef.current, 
      {
        width: "100vw",
        duration: 5,
        ease: "power3.inOut"
      },
      "<"
    ).to(
      progressNumberRef.current, 
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent"
      },
      "<"
    ).to(
      progressNumberRef.current,
      {
        y: 24,
        autoAlpha: 0,
      }
    );
  
    return tl;
  };
  
  export const collapse = (
    overlayRef: React.RefObject<HTMLDivElement>
  ) => {
    const tl = gsap.timeline();
  
    tl.to(overlayRef.current, {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 2,
      ease: "power4.inOut",
    });
  
    return tl;
  };
  