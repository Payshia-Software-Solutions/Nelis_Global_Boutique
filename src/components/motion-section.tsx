
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionSection({ children, className }: MotionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
