"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { logo } from "../../public/icons";
import Link from "next/link";
import { avatar } from "../../public/images";
import { NavLinks } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Info from "./Info";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const container = useRef<HTMLElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

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

  useEffect(() => {
    if (isActive) {
      tl.current!.play();
    } else {
      tl.current!.reverse();
    }
  }, [isActive]);
  return (
    <header className="relative " ref={container}>
      <Info />

      <div className="flex justify-between mt-6 margin-x">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div
          id="menu"
          className={`rounded-md   flex flex-col justify-center items-center w-[60px] h-[60px] transition-all duration-1000 cursor-pointer ${
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

        <div className="flex  margin-x justify-between mt-6 margin-x">
          <div>
            <Link href="/">
              <Image src={logo} className=" hidden"  alt="logo" />
            </Link>
          </div>
          <div
            id="menu"
            className={`rounded-md    flex flex-col justify-center items-center w-[60px] h-[60px] transition-all duration-1000 cursor-pointer ${
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
          <Image src={avatar} className="hidden z-30 lg:block object-cover"  alt="" width={350} />
          <ul>
            {NavLinks.map((link, index) => (
              <div key={index} className="link-clip text-center lg:text-start lg:w-max">
                <div className="link-holder " onClick={toggleMenu}>
                  <Link className="text-4xl leading-loose lg:text-6xl uppercase " href={link.path}>{link.name}</Link>
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
