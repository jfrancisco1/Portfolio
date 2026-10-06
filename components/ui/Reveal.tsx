"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Fades content in once when it scrolls into view.
 * Reduced-motion users get no transform (MotionConfig) and no fade (`[data-reveal]` rule in globals.css).
 */
export function Reveal({ children, className }: RevealProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.div
          data-reveal
          className={className}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
