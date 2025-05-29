import React, { useEffect, useState } from "react";
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
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImageStyle = (index: number, total: number) => {
    const angle = (360 / total) * index;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;

    // Add some randomness to rotation for a more natural look
    const randomRotation = (Math.random() - 0.5) * 30;

    return {
      position: "absolute" as const,
      left: "50%",
      top: "50%",
      transform: `
        translate(-50%, -50%) 
        translate(${x}px, ${y}px) 
        rotate(${angle + rotation + randomRotation}deg)
      `,
      width: `${imageSize}px`,
      height: `${imageSize}px`,
      transition: "transform 0.1s ease-out",
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
            <Image
              src={image.src}
              alt={image.alt}
              width={imageSize}
              height={imageSize}
              className="object-cover rounded-lg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CircularCarousel;
