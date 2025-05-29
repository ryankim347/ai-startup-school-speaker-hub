"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

interface CircularCarouselProps {
  images: CarouselImage[];
  title?: string;
  subtitle?: string;
  radius?: number;
  imageSize?: number;
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({
  images,
  title = "The future is built on Artificial Intelligence.",
  subtitle = "SCROLL TO EXPLORE",
  radius = 300,
  imageSize = 120,
}) => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
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
    <div className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
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
        className="absolute inset-0 flex items-center justify-center"
        style={{
          width: `${(radius + imageSize) * 2}px`,
          height: `${(radius + imageSize) * 2}px`,
          margin: "auto",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={getImageStyle(index, images.length)}
            className="hover:scale-110 transition-transform duration-300 cursor-pointer"
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
                className="object-cover rounded-lg"
                style={{ width: "100%", height: "100%" }}
                onError={() => handleImageError(index)}
                priority={index < 5} // Prioritize first 5 images for faster loading
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularCarousel;
