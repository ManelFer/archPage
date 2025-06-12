"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Imagens
import fundo1 from "../../../../../public/fundo1.jpeg";
import fundo3 from "../../../../../public/fundo3.png";
import fundo4 from "../../../../../public/fundo4.png";
import fundo5 from "../../../../../public/fundo5.png";

const images = [fundo1, fundo3, fundo4, fundo5];

export const CarouselSection = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current.querySelector('[data-carousel-content]');
      if (container) {
        (container as HTMLElement).style.transform = `translateX(-${current * 100}%)`;
      }
    }
  }, [current]);

  return (
    <div className="w-full flex justify-center items-center py-6">
      <Carousel
        className="w-full max-w-md overflow-hidden"
        ref={carouselRef}
      >
        <CarouselContent
          data-carousel-content
          className="transition-transform duration-700 ease-in-out flex"
        >
          {images.map((img, index) => (
            <CarouselItem key={index} className="basis-full flex-shrink-0">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
