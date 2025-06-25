"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      <div className="space-y-6 animate-fade-in-right">
        <h2 className="text-xl font-semibold text-emerald-600 uppercase tracking-wider">Bhagirath Sahayog Seva Sansthan</h2>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Walk Together<br />Transform <a className="bg-navyblue text-white pl-3 pr-3">Lives</a>
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Join our mission to empower communities through education, environmental initiatives, and livelihood support. Every step with us is a stride towards a better tomorrow.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/">
            <button className="bg-navyblue text-white px-6 py-3 rounded-full hover:bg-emerald-700 shadow transition">
              Donate Now
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-full hover:bg-emerald-50 transition">
              Join Us
            </button>
          </Link>
        </div>
      </div>

      <div className="animate-fade-in-left">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {["ngo_2.jpeg","ngo_1.jpeg"].map((img, i) => (
            <div key={i}>
              <Image src={`/images/ngoimg/${img}`} alt={`Slide ${i + 1}`} width={600} height={400} className="rounded-xl" />
            </div>
          ))}
          {/* <div>
            <Image src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 3" width={600} height={400} className="rounded-xl" />
          </div> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Banner;