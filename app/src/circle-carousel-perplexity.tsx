"use client";

import React, { useState, useEffect, useRef, CSSProperties } from "react";

interface CarouselItem {
  id: string;
  src: string;
  alt: string;
}

interface CircularCarouselProps {
  items: CarouselItem[];
  radius?: number;
  itemSize?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
  centerContent?: React.ReactNode;
}

const CircularCarouselPerplexity: React.FC<CircularCarouselProps> = ({
  items,
  radius = 320,
  itemSize = 80,
  autoRotate = false,
  rotationSpeed = 4000,
  centerContent,
}) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoRotate && !isHovered) {
      intervalRef.current = setInterval(() => {
        setRotation((prev) => prev + 360 / items.length);
      }, rotationSpeed);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoRotate, isHovered, items.length, rotationSpeed]);

  // Responsive adjustments
  const [responsiveRadius, setResponsiveRadius] = useState(radius);
  const [responsiveItemSize, setResponsiveItemSize] = useState(itemSize);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setResponsiveRadius(radius * 0.55);
        setResponsiveItemSize(itemSize * 0.6);
      } else if (window.innerWidth < 900) {
        setResponsiveRadius(radius * 0.75);
        setResponsiveItemSize(itemSize * 0.8);
      } else {
        setResponsiveRadius(radius);
        setResponsiveItemSize(itemSize);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radius, itemSize]);

  const containerSize = responsiveRadius * 2 + responsiveItemSize * 2;

  return (
    <div
      style={{
        position: "relative",
        width: containerSize,
        height: containerSize,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f8fa",
        overflow: "visible",
        minHeight: 400,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Items */}
      {items.map((item, i) => {
        const angle = (360 / items.length) * i + rotation;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * responsiveRadius;
        const y = Math.sin(rad) * responsiveRadius;
        const itemStyle: CSSProperties = {
          position: "absolute",
          left: `calc(50% + ${x}px - ${responsiveItemSize / 2}px)`,
          top: `calc(50% + ${y}px - ${responsiveItemSize / 2}px)`,
          width: responsiveItemSize,
          height: responsiveItemSize,
          boxShadow: "0 4px 12px rgba(0,0,0,0.14)",
          borderRadius: 12,
          overflow: "hidden",
          background: "#fff",
          transform: `rotate(${angle}deg)`,
          transition: "transform 0.4s cubic-bezier(.4,2,.3,1), box-shadow 0.3s",
          cursor: "pointer",
          willChange: "transform",
        };
        return (
          <div
            key={item.id}
            style={itemStyle}
            tabIndex={0}
            aria-label={item.alt}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 12,
                display: "block",
                transition: "opacity 0.3s",
              }}
              draggable={false}
            />
          </div>
        );
      })}

      {/* Center Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "min(350px, 80vw)",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          padding: "32px 12px 24px 12px",
          background: "rgba(255,255,255,0.97)",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
          fontFamily: "inherit",
        }}
      >
        {centerContent || (
          <>
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: "#222",
                marginBottom: 12,
              }}
            >
              The future is built on Artificial Intelligence.
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 2,
                color: "#888",
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              SCROLL&nbsp;&nbsp;TO&nbsp;&nbsp;EXPLORE
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CircularCarouselPerplexity;

// Example usage for your Next.js page:

// import CircularCarousel from './CircularCarousel'
//
// const items = [
//   { id: '1', src: '/images/ai-1.jpg', alt: 'AI 1' },
//   { id: '2', src: '/images/ai-2.jpg', alt: 'AI 2' },
//   // ...add all your images here
// ]
//
// export default function Home() {
//   return (
//     <div style={{ minHeight: '100vh', background: '#f7f8fa', paddingTop: 60 }}>
//       <CircularCarousel items={items} />
//     </div>
//   )
// }
