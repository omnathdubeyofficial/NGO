"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Dedicated = () => {
  const sections = [
{
  images: [
    "https://cdn.pixabay.com/photo/2019/09/16/13/30/boat-4480998_1280.jpg",
  ],
  heading: "Clean Ganga Initiative",
  text: "Bhagirath Sahayog Seva Sansthan has undertaken dedicated efforts towards the cleaning and conservation of the sacred Ganga River. Through awareness drives, riverbank clean-up campaigns, and community participation, the Sansthan has contributed to preserving the purity and ecological balance of the river. These efforts reflect our deep commitment to environmental responsibility and cultural heritage. Click the button below to view highlights of the Ganga Cleanliness Drive.",
  button: "View Clean-Up Highlights",
  link: "/components/ViewCleanupHighlights",
}
,
{
  images: [
    "https://cdn.pixabay.com/photo/2023/06/22/07/13/soil-8080788_1280.jpg",
  ],
  heading: "A Step Towards Greener Earth",
  text: "Bhagirath Sahayog Seva Sansthan has actively led tree plantation drives to promote environmental sustainability. Various medicinal and shade-giving trees like Peepal, Neem, Mango, and Amla have been planted across different locations. This green initiative is a meaningful step toward restoring ecological balance and ensuring a cleaner, healthier environment for future generations. Click the button below to view glimpses of our plantation efforts.",
  button: "View Plantation Highlights",
  link: "/components/GreenerEarth",
}
,
 {
  images: [
    "https://cdn.pixabay.com/photo/2018/06/17/17/48/merry-christmas-3481061_1280.jpg",
  ],
  heading: "Recognized and Encouraged",
  text: "Bhagirath Sahayog Seva Sansthan has received appreciation and encouragement through multiple official letters and commendations from various authorities. These acknowledgments reflect the organization's dedication to social welfare and community upliftment. Click the button below to view these letters of recognition.",
  button: "View Appreciation Letters",
  link: "/components/appreciation_letters",
}
,
    {
  images: [
    "images/news_ngo.jpg",
  ],
  heading: "In the News",
  text: "Bhagirath Sahayog Seva Sansthan has consistently made headlines for its unwavering dedication to uplifting underprivileged communities. Through impactful livelihood training, skill development programs, and grassroots empowerment initiatives, the organization has earned recognition in several leading newspapers and media platforms. These stories highlight real transformation driven by the Sansthan's mission for sustainable change.",
  button: "Explore News",
  link: "/components/IntheNews",
}

  ];

  const Section = ({
    images,
    heading,
    text,
    button,
    link,
    reverse,
  }: {
    images: string[];
    heading: string;
    text: string;
    button: string;
    link: string;
    reverse?: boolean;
  }) => (
    <div
      className={`w-full max-w-7xl mx-auto px-4 py-10 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8`}
    >
      {/* Single Image Section */}
      <div className="w-full lg:w-1/2 animate-fade-in-left">
        <Image
          src={images[0]}
          alt="Section Image"
          width={600}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-right text-left lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-darkpurple leading-tight">
          {heading}
        </h1>
<p className="text-base sm:text-lg text-gray-800 bg-[#E6F4EA] max-w-xl mx-auto lg:mx-0 px-6 py-4 rounded-xl transition duration-300 hover:bg-[#1B4332] hover:text-white font-serif">
  {text}
</p>



        <Link href={link}>
          <button className="bg-blue mt-4 text-white px-8 py-3 rounded-full hover:bg-hoblue shadow-lg transition">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {sections.map((section, index) => (
        <Section key={index} {...section} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default Dedicated;
