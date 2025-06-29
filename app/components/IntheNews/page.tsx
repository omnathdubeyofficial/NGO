"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";



type ImageItem = { src: string }; // ✅ Define a type for image items

const images: ImageItem[] = [
  { src: "/images/ngo_news/ngo_news.jpeg" },
  { src: "/images/ngo_news/ngo_news1.jpeg" },
  { src: "/images/ngo_news/ngo_news2.jpeg" },
  { src: "/images/ngo_news/ngo_news3.jpeg" },
  { src: "/images/ngo_news/ngo_news4.jpeg" },
  { src: "/images/ngo_news/ngo_news5.jpeg" },
  { src: "/images/ngo_news/ngo_news6.jpeg" },
  { src: "/images/ngo_news/ngo_news7.jpeg" },
  { src: "/images/ngo_news/ngo_news8.jpeg" },
  { src: "/images/ngo_news/ngo_news9.jpeg" },
  { src: "/images/ngo_news/ngo_news10.jpeg" },
  { src: "/images/ngo_news/ngo_news11.jpeg" },
  { src: "/images/ngo_news/ngo_news12.jpeg" },
  { src: "/images/ngo_news/ngo_news13.jpeg" },
  { src: "/images/ngo_news/ngo_news14.jpeg" },
];

const IntheNews = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null); // ✅ Type specified
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const openLightbox = (img: ImageItem) => setSelectedImage(img); // ✅ Fixed typing
  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.src === selectedImage.src);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  useEffect(() => {
    if (selectedImage && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [selectedImage]);

  return (
    <main className="w-full bg-cream-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "News Clippings Gallery",
            description: "A collection of newspaper clippings highlighting Bhagirath Sahayog Seva Sansthan's impactful work.",
            image: images.map((img, index) => ({
              "@type": "ImageObject",
              url: img.src,
              name: `News Clipping ${index + 1}`,
            })),
          }),
        }}
      />

<section className="relative w-full bg-lightgrey text-black  pt-36 pb-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    
    {/* Left Side - Image */}

       <motion.div
      className="w-full lg:w-1/2"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="https://images.pexels.com/photos/3030823/pexels-photo-3030823.jpeg"
        alt="desc"
        width={500}
        height={300}
        className="w-full h-auto rounded-xl shadow-lg object-cover"
      />
    </motion.div>

    {/* Right Side - Content */}
    <motion.div
      className="w-full lg:w-1/2 text-left lg:text-left"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-lora font-semibold mb-4">
        Our Story in the News
      </h1>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-6">
Each clipping, each headline echoes our efforts.
The transformative work, social awareness drives, and welfare initiatives led by Bhagirath Sahayog Seva Sansthan find their voice in these news stories.      </p>
      <Link href="#gallery">
        <motion.button
          className="bg-navyblue text-white px-6 py-2 font-medium hover:bg-green-700 transition-colors duration-200"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore these moments
        </motion.button>
      </Link>
    </motion.div>

  </div>
</section>


      <section id="gallery" className="py-10 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl py-6 bg-lightgrey font-lora font-semibold text-navy-900 text-center mb-6">
            Newspaper <a className="bg-navyblue text-white pl-6 pr-6 ">Highlights</a> 
          </h2>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((img, index) => (
              <motion.div
                key={img.src}
                className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer mb-4 break-inside-avoid"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(img)}
                aria-label={`View news clipping ${index + 1}`}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              >
                <Image
                  src={img.src}
                  alt={`News Clipping ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={80}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-label="News clipping lightbox"
            ref={lightboxRef}
            tabIndex={-1}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-white rounded-lg p-4"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={`Enlarged news clipping`}
                width={800}
                height={600}
                className="object-contain w-full h-auto max-h-[60vh] rounded"
                priority
                quality={90}
              />
              <button
                className="absolute top-2 right-2 bg-gray-100 text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"
                onClick={() => navigateLightbox("prev")}
                aria-label="Previous clipping"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"
                onClick={() => navigateLightbox("next")}
                aria-label="Next clipping"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default IntheNews;