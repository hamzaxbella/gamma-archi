"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { logo } from "../../public/icons";
import Link from "next/link";
import { avatar, desktopHero } from "../../public/images";
import { NavLinks } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Info from "./Info";
import { AnimateHeader } from "./animate";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const timeline = useRef(gsap.timeline())
  const [isMenuSticky , setIsMenuSticky] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useGSAP(() => {
    gsap.set(".link-holder", { y: 75 });
    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".link-holder", {
        y: 0,
        duration: 1.25,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      })
  });

  useGSAP(() => {
    const tl = timeline.current
    tl.add(AnimateHeader())
    
  } , {scope : container})

  useEffect(() => {
    if (isActive) {
      tl.current!.play();
    } else {
      tl.current!.reverse();
    }
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeSticky = scrollPosition >= window.innerHeight;
      setIsMenuSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className={` h-[150px] padding-x lg:px-0`} ref={container}>
      <Info />

      <div className={`flex  mt-6 max-container ${isMenuSticky ? 'justify-end' : 'justify-between'} fade`}  >
        <div>
          <Link href="/">
            <Image src={logo} width={69} height={69} alt="logo" />
          </Link>
        </div>
        <div
          id="menu"
          className={` ${isMenuSticky ? "fixed  z-30 " : "rounded-md"} important flex flex-col justify-center  items-center w-[60px] h-[60px]  rounded-lg cursor-pointer ${
            isActive ? "bg-background" : "bg-thirdly gap-2"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={` transition-all duration-1000 h-[1px] w-10 bg-white ${
              isActive && "rotate-45"
            }`}
          />
          <div
            className={` transition-all duration-1000 h-[1px] w-10 bg-white ${
              isActive && "-rotate-45"
            }`}
          />
        </div>
      </div>
      <div className="menu-overlay overflow-hidden w-[100vw] h-[100vh]  bg-thirdly fixed top-0 left-0 z-30 overlay-clip ">
      <Info />

        <div className="flex  max-container padding-x lg:px-0 justify-between mt-6">
          <div>
            <Link href="/">
              <Image src={logo} className=" hidden"  alt="logo" />
            </Link>
          </div>
          <div
            id="menu"
            className={`rounded-md  flex flex-col justify-center items-center w-[60px] h-[60px] transition-all duration-1000 cursor-pointer ${
              isActive ? "bg-background" : "bg-thirdly gap-2"
            }`}
            onClick={toggleMenu}
          >
            <div
              className={` transition-all duration-1000 h-[1px] w-10 bg-white ${
                isActive && "rotate-45"
              }`}
            />
            <div
              className={` transition-all duration-1000 h-[1px] w-10 bg-white ${
                isActive && "-rotate-45"
              }`}
            />
          </div>
        </div>
        <div className="w-full h-[80%] flex justify-center items-center gap-10">
          <Image src={desktopHero} className="hidden z-30 lg:block object-cover h-[500px] object-bottom "  alt="" width={450} height={100} />
          <ul>
            {NavLinks.map((link, index) => (
              <div key={index} className="link-clip text-center lg:text-start lg:w-max">
                <div className="link-holder " onClick={toggleMenu}>
                  <Link className="text-4xl leading-loose lg:text-6xl hover:text-yellow-400 transition-all duration-300 uppercase " href={link.path}>{link.name}</Link>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
