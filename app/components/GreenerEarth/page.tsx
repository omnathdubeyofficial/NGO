"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/green_ngo/green_ngo.jpeg",
  "/images/green_ngo/green_ngo1.jpeg",
    "/images/green_ngo/green_ngo2.jpeg",
    //   "/images/green_ngo/green_ngo3.jpeg",
    //     "/images/green_ngo/green_ngo4.jpeg",
];

const GreenerEarth = () => {
  return (
    <main className="w-full">
      {/* ✅ Hero Section */}
      <section className="relative w-full bg-emerald-100 bg-cover bg-center py-28 mt-11 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d1fae5]/90 to-[#a7f3d0]/90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-emerald-800 leading-tight mb-4">
            View Clean-Up Highlights
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            A visual journey through our environmental clean-up drives. Every step counts. Every action matters.
          </p>
          <Link href="#gallery">
            <button className="mt-8 bg-navyblue text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-md">
              Explore Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            Clean-Up Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group transition duration-300"
              >
                <Image
  src={img}
  alt={`Clean-up Image ${index + 1}`}
  width={500}
  height={400}
  className="object-cover w-full h-auto transform group-hover:scale-105 transition duration-300 ease-in-out"
/>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GreenerEarth;
