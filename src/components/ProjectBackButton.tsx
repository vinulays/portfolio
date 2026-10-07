'use client';

import { useHasPreviousPage } from '@/providers/NavigationProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';

export default function ProjectBackButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const hasPreviousPage = useHasPreviousPage();

  useEffect(() => {
    const button = buttonRef.current;

    if (!button || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const animation = button.animate(
      [
        { opacity: 0, transform: 'translateY(16px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      {
        duration: 420,
        delay: 100,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'backwards',
      },
    );

    return () => animation.cancel();
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => {
        if (hasPreviousPage) {
          router.back();
        } else {
          router.replace('/projects');
        }
      }}
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-1/2 z-50 inline-flex min-h-12 -translate-x-1/2 cursor-pointer items-center gap-2.5 rounded-full border border-white/20 bg-muted px-5 text-sm font-medium text-white transition-colors hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <FaChevronLeft aria-hidden="true" className="h-3 w-3" />
      Back
    </button>
  );
}
