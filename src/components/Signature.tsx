'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Signature = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<SVGPathElement[]>([]);

  const addToRefs = (el: SVGPathElement) => {
    if (el && !pathRefs.current.includes(el)) {
      pathRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = svgRef.current;

      pathRefs.current.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.to(pathRefs.current, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger,
          start: 'top 80%',
          once: true,
        },
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 144" className="h-auto w-32" fill="none">
      <path
        ref={addToRefs}
        stroke="#d3d3d3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M5.946 20.4c.792 2.64 1.584 5.28 4.764 21.16s8.724 44.92 11.712 60.276 3.252 16.148 4.576 14.312 3.7-6.324 10.996-23.948 19.44-48.248 27.016-65.74S75.226 5.536 77.946 2"
      />
      <path
        ref={addToRefs}
        stroke="#d3d3d3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M33.946 110c0 1.584 0 6.624 1.188 13.024.452 2.438 3.564 2.176 5.316 2.044s2.808-.396 3.88-.796 2.128-.928 2.804-1.596.94-1.46 1.076-2.66c.314-2.769.4-5.208.668-6.012 2.396-7.188-11.98 18.644-15.704 21.84-3.26 2.797-6.42 3.484-7.224 4.284-3.956 3.936 17.556-3.712 25.404-7.168 3.95-1.739 7.584-3.984 15.296-12.992S85.978 95.12 92.622 85.772s7.964-11.724 8.38-12.42c.193-.324-2.768 6.992-7.684 18.56-2.599 6.115-6.236 12.36-9.06 17.208s-4.936 8.016-5.628 8.988c-.21.295 6.46-5.14 7.336-7.436 1.713-4.489-19.716 6.944-27.864 9.936-8.85 3.25-10.812 4.048-15.184 6.836-8.234 5.251-17.476 7.084-25.572 8.016-5.174.596-12.584.668-14.808.672s.944-.26 40.196-7.92 114.492-22.708 153.648-30.46S236.33 90 237.146 90"
      />
    </svg>
  );
};

export default Signature;
