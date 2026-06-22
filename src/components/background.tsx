"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  [8, 18, 5, 0],
  [18, 68, 3, 1.2],
  [32, 26, 4, 2.3],
  [48, 76, 5, 0.8],
  [62, 16, 3, 1.8],
  [73, 58, 4, 2.8],
  [87, 29, 5, 1.4],
  [94, 78, 3, 2],
  [40, 48, 3, 3],
  [82, 88, 4, 0.4],
];

export function Background() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="absolute -left-48 -top-48 size-[34rem] rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="absolute -right-48 top-[18%] size-[32rem] rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="absolute bottom-[-16rem] left-[30%] size-[34rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      {!reduceMotion &&
        particles.map(([left, top, size, delay], index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-cyan-300/50 shadow-[0_0_12px_rgba(34,211,238,.5)]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: 4 + (index % 3),
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}
