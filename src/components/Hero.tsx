'use client'
import React, { useRef } from "react";
import Button from "./Button";
import Image from "next/image";
import { mobileHero } from "../../public/images";
import check from "../../public/icons/check.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroContent } from "@/constants";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .fromTo(".content", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }, "<")
      .fromTo(".text-holder", 
      { scale: 0.8 }, 
      { scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "<");

  }, { scope: heroRef });

  return (
    <section className="padding-x lg:px-0 relative max-container" ref={heroRef}>
      <div id="info" className="my-12 md:hidden">
        <p
          data-contact
          className="font-thin tracking-wider opacity-60 font-General text-xl"
        >
          zyllux.agency@gmail.com
        </p>
        <p
          data-contact
          className="font-thin tracking-wider opacity-60 font-General mt-2 text-xl"
        >
          06.54.18.85.81
        </p>
      </div>
      <div
        id="container"
        className="my-6 flex flex-col md:flex-row lg:items-center justify-between"
      >
        <div>
          <div>
            <div className="text-holder">
              <h1
                className="content text-4xl tracking-wider lg:text-6xl lg:max-w-[20ch] font-General uppercase font-semibold lg:font-semibold"
                data-title
              >
                zylux 
              </h1>
            </div>
            <div className="text-holder">
              <h1
                className="content text-4xl tracking-wider lg:text-6xl lg:max-w-[20ch] font-General uppercase font-semibold lg:font-semibold"
                data-title
              >
                Architecture
              </h1>
            </div>
          </div>
          <p
            data-description
            className="content tracking-wider text-xl font-thin my-6 opacity-90 max-w-[28ch] lg:max-w-[40ch] lg:text-lg"
          >
            Concrétise vos projets d'architecture et de design intérieur avec
            expertise et passion
          </p>
          <div
            data-services
            className="content my-6 opacity-90 text-lg font-thin tracking-wider"
          >
            <span>Construction | </span>
            <span>Rénovation | </span>
            <span>Design intérieur</span>
          </div>
          <Button label="Consultation Gratuite" primary path="/quote" />
        </div>
        <Image
          className="w-[100em] md:w-[25em] lg:w-[30em]"
          src={mobileHero}
          alt="hero image"
        />
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
