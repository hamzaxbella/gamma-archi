'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set your breakpoint here
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't show the custom cursor on mobile

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const cursorSize = { width: 10, height: 10 };
    const followerSize = { width: 40, height: 40 };

    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Center cursor by subtracting half its size
      if (cursor) {
        cursor.style.left = `${mouseX - cursorSize.width / 2}px`;
        cursor.style.top = `${mouseY - cursorSize.height / 2}px`;
      }

      // Smoothly move follower with a delay and center it
      if (follower) {
        gsap.to(follower, {
          left: mouseX - followerSize.width / 2,
          top: mouseY - followerSize.height / 2,
          delay: 0.04,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const handleHover = () => {
      gsap.to(cursor, { scale: 2.5, backgroundColor: 'gold' });
      gsap.to(follower, { scale: .5, borderColor: 'gold' });
    };

    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'gold' });
      gsap.to(follower, { scale: 1, borderColor: 'gold' });
    };

    const importantElements = document.querySelectorAll('button, a, .important');
    importantElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      importantElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, [isMobile]);

  if (isMobile) return null; // Do not render the custom cursor on mobile

  return (
    <>
      <div className={styles.cursor} ref={cursorRef}></div>
      <div className={styles.follower} ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;
