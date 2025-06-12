"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Dedicated = () => {
  const slides = [
    "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const content = {
    heading: "Our service is dedicated to serving society",
    text: "Bhagirath Sahayog Seva Sansthan is a dedicated initiative working towards community development, education, and empowerment. Join hands with us in this journey of transformation.",
    button: "Explore",
  };

  const Section = ({ reverse }: { reverse?: boolean }) => (
    <div
      className={`w-full max-w-7xl mx-auto px-4 py-10 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8`}
    >
      {/* Carousel Section */}
      <div className="w-full lg:w-1/2 order-1 lg:order-none animate-fade-in-left">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {slides.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6 order-2 animate-fade-in-right text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-darkpurple leading-tight">
          {content.heading}
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
          {content.text}
        </p>
        <button className="bg-blue text-white px-8 py-3 rounded-full hover:bg-hoblue shadow-lg transition">
          {content.button}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      <Section />
      <Section reverse />
      <Section />
    </div>
  );
};

export default Dedicated;
