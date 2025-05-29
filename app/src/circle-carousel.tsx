"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
  speakerId?: string;
}

interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  resources: {
    title: string;
    type: "blog" | "video" | "podcast" | "paper" | "other";
    url: string;
    description: string;
  }[];
}

interface CircularCarouselProps {
  images: CarouselImage[];
  title?: string;
  subtitle?: string;
  radius?: number;
  imageSize?: number;
  speakers?: Speaker[];
  onImageClick?: (speaker: Speaker) => void;
  hasInitialAnimationRun?: boolean;
  onInitialAnimationComplete?: () => void;
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({
  images,
  title = "YC Startup School Speakers",
  subtitle = "CLICK TO EXPLORE",
  radius = 300,
  imageSize = 120,
  speakers = [],
  onImageClick,
  hasInitialAnimationRun = false,
  onInitialAnimationComplete,
}) => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [hasLoaded, setHasLoaded] = useState(hasInitialAnimationRun);
  const [isSpinning, setIsSpinning] = useState(hasInitialAnimationRun);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasInitialAnimationRun) {
      // If animation has already run, set everything to final state immediately
      setHasLoaded(true);
      setIsSpinning(true);
      return;
    }

    // Trigger the animation after a short delay to ensure smooth rendering
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    // Start the continuous spinning after the initial animation completes
    const spinTimer = setTimeout(() => {
      setIsSpinning(true);
      onInitialAnimationComplete?.();
    }, 1600); // 100ms initial delay + 1500ms initial animation + 100ms buffer

    return () => {
      clearTimeout(timer);
      clearTimeout(spinTimer);
    };
  }, [hasInitialAnimationRun, onInitialAnimationComplete]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  const handleImageClick = (index: number) => {
    if (!onImageClick || !speakers.length) return;

    const image = images[index];
    const speaker = speakers.find((s) => s.id === image.speakerId);

    if (speaker) {
      onImageClick(speaker);
    }
  };

  const getImageStyle = (index: number, total: number) => {
    const angle = (360 / total) * index;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;

    return {
      position: "absolute" as const,
      left: "50%",
      top: "50%",
      transform: `
        translate(-50%, -50%) 
        translate(${x}px, ${y}px)
        rotate(${angle + 90}deg)
      `,
      width: `${imageSize}px`,
      height: `${imageSize}px`,
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    };
  };

  return (
    <div
      className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Central Content */}
      <div className="text-center z-10 max-w-md px-6">
        <h1 className="text-2xl md:text-4xl font-light text-gray-800 mb-4 leading-relaxed">
          {title}
        </h1>
        <p className="text-sm md:text-base text-gray-500 tracking-wider uppercase">
          {subtitle}
        </p>
      </div>

      {/* Circular Image Arrangement */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-1500 ease-in-out ${
          hasLoaded ? "rotate-0" : "-rotate-90"
        } ${isSpinning ? "animate-spin-slow" : ""}`}
        style={{
          width: `${(radius + imageSize) * 2}px`,
          height: `${(radius + imageSize) * 2}px`,
          margin: "auto",
          opacity: hasLoaded ? 1 : 0,
          transform: hasLoaded ? "rotate(0deg)" : "rotate(-90deg)",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={getImageStyle(index, images.length)}
            className="hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            {imageErrors.has(index) ? (
              // Fallback div when image fails to load
              <div
                className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
              >
                <span className="text-gray-500 text-xs">AI</span>
              </div>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={imageSize}
                height={imageSize}
                className="object-cover object-top rounded-lg"
                style={{ width: "100%", height: "100%" }}
                onError={() => handleImageError(index)}
                priority={index < 5} // Prioritize first 5 images for faster loading
              />
            )}
          </div>
        ))}
      </div>

      {/* CSS for slow spinning animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 150s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CircularCarousel;
