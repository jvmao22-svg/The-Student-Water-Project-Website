"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface FloatingCircleProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
  speed?: number;
  delay?: number;
}

export function FloatingCircle({
  src,
  alt = "",
  size = 320,
  className = "",
  speed = 0.12,
  delay = 0,
}: FloatingCircleProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const offset = distanceFromCenter * -speed;
      el.style.setProperty("--parallax-y", `${offset}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 [transform:translateY(var(--parallax-y,0px))] ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="circle-float h-full w-full overflow-hidden rounded-full shadow-xl"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            quality={90}
            className="object-cover"
            sizes={`${size}px`}
          />
        </div>
      </div>
    </div>
  );
}
