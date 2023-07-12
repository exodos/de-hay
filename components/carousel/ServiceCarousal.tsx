"use client";

import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

export default function ServiceCarousal({ images }) {
  return (
    <Carousel
      className="relative w-full rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-gray-900" : "w-4 bg-gray-400"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images?.map((image, imageIdx) => (
        <div key={imageIdx}>
          <Image
            src={image?.img}
            alt=""
            width={300}
            height={300}
            className="h-auto w-full rounded-lg object-center shadow-lg"
          />
        </div>
      ))}
    </Carousel>
  );

  //   return (
  //     <>
  //       <div className="carousel w-full">
  //         {images?.map((image, imageIdx: any) => (
  //           <div
  //             id={`item${imageIdx + 1}`}
  //             className="carousel-item relative w-full"
  //             key={imageIdx}
  //           >
  //             <Image
  //               src={image?.img}
  //               alt=""
  //               width={100}
  //               height={100}
  //               className="w-full"
  //             />
  //           </div>
  //         ))}
  //       </div>
  //       {images?.map((image, imageIdx) => (
  //         <div className="flex w-full justify-center gap-2 py-2" key={imageIdx}>
  //           <a href={`#item${imageIdx + 1}`} className="btn btn-xs">
  //             {imageIdx + 1}
  //           </a>
  //         </div>
  //       ))}
  //     </>
  //   );
}
