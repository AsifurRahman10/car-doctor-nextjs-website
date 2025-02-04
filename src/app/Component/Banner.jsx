"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {[
        "/assets/images/banner/2.jpg",
        "/assets/images/banner/1.jpg",
        "/assets/images/banner/3.jpg",
        "/assets/images/banner/4.jpg",
        "/assets/images/banner/5.jpg",
        "/assets/images/banner/6.jpg",
      ].map((image, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Background Image */}
          <img
            src={image}
            className="h-[400px] lg:h-[600px] w-full object-cover"
            alt="banner"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-32 text-white bg-black/50">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mt-4 text-lg max-w-lg">
              There are many variations of passages available, but the majority
              have suffered alteration in some form.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700">
                Discover More
              </button>
              <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black">
                Latest Project
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
