'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          textRef.current,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1,
            },
          },
        );
      });

      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative overflow-hidden pt-2 pb-0">
      <div className="text-center text-sm text-white/40">copyright &copy; {currentYear}, All rights reserved.</div>

      <div
        ref={textRef}
        className="w-full text-center text-[clamp(4rem,18vw,14rem)] leading-none font-black tracking-[-0.04em] whitespace-nowrap text-muted-foreground will-change-transform select-none lg:-mb-16"
      >
        VINULA
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
    </footer>
  );
};

export default Footer;
