"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface CircleCarouselProps {
  items: { id: string; content: React.ReactNode }[];
  radius?: number;
}

export default function CircleCarousel({
  items,
  radius = 150,
}: CircleCarouselProps) {
  const controls = useAnimation();
  const total = items.length;

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      <motion.div
        animate={controls}
        className="absolute inset-0 rounded-full"
        style={{ transformOrigin: "center center" }}
      >
        {items.map((item, index) => {
          const angle = (360 / total) * index;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px - 25px)`,
                top: `calc(50% + ${y}px - 25px)`,
              }}
            >
              <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center">
                {item.content}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
