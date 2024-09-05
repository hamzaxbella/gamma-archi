import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Image from "next/image";
import { desktopHero, mobileHero } from "../../public/images";
import check from "../../public/icons/check.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroContent } from "@/constants";
import { animateHero } from "./animate";

const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = timeline.current;

      tl.add(animateHero() , '<');
    },
    { scope: heroRef }
  );

  return (
    <section className="relative max-container" ref={heroRef}>
      <div id="info" className="my-12 lg:hidden">
        <p
          data-contact
          className="font-extralight tracking-wider opacity-60 font-General text-xl"
        >
          karaayaarchitecture@gmail.com
        </p>
        <p
          data-contact
          className="font-extralight tracking-wider opacity-60 font-General mt-2 text-xl"
        >
          05.39.93.54.39
        </p>
      </div>
      <div
        id="container"
        className="my-6  flex  flex-col lg:flex-row lg:items-center justify-between"
      >
        <div>
          <div>
            <div className="text-holder">
              <h1
                className="content text-4xl tracking-wider lg:text-6xl lg:max-w-[20ch] font-General uppercase font-semibold lg:font-semibold"
                data-title
              >
                kara aya 
              </h1>
            </div>
            <div className="text-holder">
              <h1
                className="content text-4xl tracking-wider lg:text-6xl lg:max-w-[20ch] font-General uppercase font-semibold lg:font-semibold"
                data-title
              >
                architecture
              </h1>
            </div>
          </div>
          <p
            data-description
            className="content text-xl font-extralight my-6 opacity-90 max-w-[28ch] lg:max-w-[40ch] lg:text-lg"
          >
            Concrétise vos projets d'architecture et de design intérieur avec
            expertise et passion
          </p>
          <div
            data-services
            className="content my-6 opacity-90 text-lg font-thin tracking-wider"
          >
            <span>Villas | </span>
            <span>Rénovation | </span>
            <span>Interieur</span>
          </div>
          <Button label="Consultation Gratuite" primary path="/quote" />
        </div>
        <picture data-image>
          <source srcSet={desktopHero} media="(min-width: 786px)" />
          <Image
            className="w-[100em] lg:w-[30em]"
            src={mobileHero}
            alt="hero image"
          />
        </picture>
      </div>
      <div className="hidden lg:flex w-full justify-between">
        {HeroContent.trust.map((sentence, index) => (
          <div data-trust-item className="flex gap-2" key={index}>
            <Image src={check} alt="check" width={20} height={20} />
            <p className="font-thin">{sentence}</p>
          </div>
        ))}
      </div>
      <div className="absolute -right-20 z-10 bottom-20 w-20 h-20 bg-effect blur-3xl" />
    </section>
  );
};

export default Hero;
