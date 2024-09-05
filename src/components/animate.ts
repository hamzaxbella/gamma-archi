import gsap from "gsap";

export const animateHero = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.from("[data-title]", {
    y: 50,
    stagger: 0.05,
  })
    .from(
      "[data-description]",
      {
        y: 24,
        alpha: 0,
      },
      "<25%"
    )
    .from(
      "[data-services]",
      {
        y: 24,
        alpha: 0,
      },
      "<15%"
    )
    .to(
      "[data-button]",
      {
        alpha: 1,
      },
      "<15%"
    )
    .from(
      "[data-image]",
      {
        scale : 0.95,
        autoAlpha: 0,
        duration : 3
      },
      "-=1.5"
    );

  return tl; // Return the timeline so it can be used elsewhere
};


export const AnimateHeader = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.out",
            duration: 2.5, 
            dealy : 2.5      }
    })

    tl.from('[data-container]' , {
        autoAlpha : 0,
    })

    return tl
}

export const AnimateContact = () => {
  const tl = gsap.timeline()

  tl.from("[data-contact]" , {
    autoAlpha : 0,
    y : 15,
    stagger : 0.15,
    duration : 3,
    ease : 'expo.out',
    delay : 1
  })

  return tl
}