"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Screenshot {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface CarouselProps {
  screenshots: Screenshot[];
}

export function Carousel({ screenshots }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div className="relative overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {screenshots.map((screenshot) => (
          <div key={screenshot.id} className="w-full flex-shrink-0">
            <div className="relative">
              <Image
                src={screenshot.imageUrl || "/placeholder.svg"}
                alt={screenshot.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        disabled={isAnimating}
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        disabled={isAnimating}
        aria-label="Next screenshot"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all",
              currentIndex === index
                ? "bg-white w-4"
                : "bg-white/60 hover:bg-white/80"
            )}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
