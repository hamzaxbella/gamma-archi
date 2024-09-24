'use client'
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper class for typing
import "swiper/css";
import { AllServices } from "@/constants";
import Link from "next/link";

const Services: React.FC = () => {
  // Typing useRef for Swiper instance
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false); // State to track grabbing

  const handleMouseDown = () => setIsGrabbing(true);   // On mouse down, set grabbing
  const handleMouseUp = () => setIsGrabbing(false);    // On mouse up, reset grabbing

  return (
    <section className="w-full section-spacing">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-2xl lg:text-4xl uppercase my-6 font-bold tracking-widest">
          nos services
        </h1>
        <p className="font-thin text-lg max-w-[45ch] leading-6 tracking-wider">
          Nous essayons toujours d'être bon dans notre stratégie de travail.
        </p>
      </div>
      <div className="my-24">
        <Swiper
          className={`transition-all duration-200 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper instance
          onTouchStart={handleMouseDown}  // For touch devices
          onTouchEnd={handleMouseUp}  
          pagination={{ clickable: true }}
          onMouseDown={handleMouseDown}   // For desktop (mouse grab)
          onMouseUp={handleMouseUp}       // For desktop (mouse release)}
          
          breakpoints={{
            // When the window width is >= 320px (mobile)
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When the window width is >= 768px (tablet/desktop)
            768: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
          }}
        >
          {AllServices.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="my-6">
                <div className="mb-5">
                  <p className="font-thin text-lg lg:text-2xl">KAA</p>
                  <h2 className="font-semibold text-2xl lg:text-4xl tracking-wider text-secondary">
                    {service.title}
                  </h2>
                </div>
                <div className="pl-6 flex h-fit">
                  <div className="lg:mr-12 mr-6 w-px bg-gray-500" />
                  <div>
                    <p className="text-xl leading-7 lg:text-2xl py-6 lg:leading-10 font-thin max-w-[35ch]">
                      {service.description}
                    </p>
                    <Link
                      href="/projects/"
                      className="text-lg font-thin hover:ring-0 px-4 py-2 ring-1 text-secondary hover:bg-secondary hover:text-white transition-all duration-200 tracking-wide ring-secondary rounded-full"
                    >
                      Découvrire {">"}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-2 mt-6 justify-center">
          <button
            className="hover:bg-secondary ring-1 ring-secondary text-secondary font-thin hover:text-white transition-all duration-300 py-2 px-7 hover:ring-0 rounded-full"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            {"<"}
          </button>
          <button
            className="hover:bg-secondary ring-1 ring-secondary text-secondary font-thin hover:text-white transition-all duration-300 py-2 px-7 hover:ring-0 rounded-full"
            onClick={() => swiperRef.current?.slideNext()}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
