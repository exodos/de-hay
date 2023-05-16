"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let timer: NodeJS.Timeout;

  const handleImageLoad = () => {
    timer = setTimeout(() => {
      let newSlide = currentSlide == images.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    }, 3000);
  };

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[90vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image: any, index: any) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.name}
                  fill
                  object-fit="contain"
                  className="animate-fadeIn"
                  priority
                  onLoadingComplete={handleImageLoad}
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2  cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2  cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
