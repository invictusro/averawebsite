"use client";

import { useEffect, useRef } from 'react';

interface BackgroundImageProps {
  src: string;
  children: React.ReactNode;
  className?: string;
}

export default function BackgroundImage({ src, children, className = '' }: BackgroundImageProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.backgroundImage = `url(${src})`;
    }
  }, [src]);

  return (
    <section ref={elementRef} className={className}>
      {children}
    </section>
  );
}
