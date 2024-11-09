'use client';
import React, { useRef } from 'react';
import Accordion from './Accordion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaqsContentProps } from '@/lib/interfaces';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FAQTemplate = ({ FAQcontent }: FaqsContentProps) => {
  const FAQref = useRef(null);

  useGSAP(() => {
    gsap.from('.accordion', {
      scrollTrigger: {
        trigger: FAQref.current,
        toggleActions: 'play play play play', // Prevents the animation from being reversed
        start: 'top 100%',
        end: 'bottom 80%',
        scrub: 1,
      },
      duration: 1.5,
      opacity: 0,
      y: 100,
      ease: 'power1.inOut',
      stagger: 0.5,
    });
  }, { scope: FAQref });

  return (
    <section ref={FAQref} className="relative padding-x lg:px-0 w-full max-container">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-2xl lg:text-4xl uppercase my-6 font-bold tracking-widest">
          faq
        </h1>
        <p className="font-thin text-lg max-w-[45ch] leading-6 tracking-wider">
          Nous sommes heureux de répondre à toutes les questions que vous avez en tête.
        </p>
      </div>
      <div className="accordion my-24 max-w-[800px] mx-auto">
        {FAQcontent.map((faq, idx) => (
          <Accordion key={idx} title={faq.question} answer={faq.response} />
        ))}
      </div>
    </section>
  );
};

export default FAQTemplate;
