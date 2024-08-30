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
      "<15%"
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
      "<40%"
    )
    .from(
      "[data-image]",
      {
        alpha: 0,
        duration: 10,
      },
      "-=2.5"
    );

  return tl; // Return the timeline so it can be used elsewhere
};
