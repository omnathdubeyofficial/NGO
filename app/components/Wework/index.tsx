"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  Lightbulb,
  HeartHandshake,
  Globe2,
  ArrowRightCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const teamData = [
  {
    profession: "National President",
    name: "Paramhans Singh",
    imgSrc: "/images/chacha.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
      whatsapp: "#",
      x: "#",
    },
  },
  {
    profession: "National Vice President",
    name: "Dr. Kajol Babusingh Bais",
    imgSrc: "/images/kajol.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
      whatsapp: "#",
      x: "#",
    },
  },
  {
    profession: "National Secretary",
    name: "Avneesh Singh Chandel",
    imgSrc: "/images/avi.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
      whatsapp: "#",
      x: "#",
    },
  },
  {
    profession: "IT Head",
    name: "Omnath Dubey",
    imgSrc: "/images/249064878_ea40.webp",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
      whatsapp: "#",
      x: "#",
    },
  },
];

const missionData = [
  {
    icon: <Users size={48} className="text-blue-600 mb-4" />,
    title: "Our Mission",
    description:
      "To uplift marginalized communities by providing access to education, healthcare, and sustainable development.",
    link: "#mission",
  },
  {
    icon: <Lightbulb size={48} className="text-yellow-500 mb-4" />,
    title: "Our Vision",
    description:
      "A world where every individual has equal opportunity to live with dignity, security, and hope.",
    link: "#vision",
  },
  {
    icon: <HeartHandshake size={48} className="text-green-600 mb-4" />,
    title: "Problems We Solve",
    description:
      "We address poverty, illiteracy, lack of medical support, and social inequality through impactful programs.",
    link: "#problems",
  },
  {
    icon: <Globe2 size={48} className="text-purple-700 mb-4" />,
    title: "Our Impact",
    description:
      "Over 50,000 lives touched through health camps, school drives, and livelihood projects across India.",
    link: "#impact",
  },
];

const Dedicated = () => {
  return (
    <div className="w-full px-4 py-16 sm:py-20 bg-gray-50">
      {/* Mission Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {missionData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-indigo-900 mb-2 sm:mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {item.description}
            </p>
            <a
              href={item.link}
              className="inline-flex items-center text-indigo-700 font-semibold hover:underline text-sm sm:text-base"
            >
              Learn More <ArrowRightCircle className="ml-2" size={20} />
            </a>
          </div>
        ))}
      </div>

      {/* Our Team */}
      <div className="text-center mt-20 px-2">
        {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 mb-12">
          Meet Our Team
        </h2> */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold text-indigo-900">
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm mt-1">{member.profession}</p>
              <div className="flex justify-center gap-3 mt-4 flex-wrap">
                <SocialIcon icon={<FaFacebookF />} href={member.social.facebook} />
                <SocialIcon icon={<FaInstagram />} href={member.social.instagram} />
                <SocialIcon icon={<FaLinkedinIn />} href={member.social.linkedin} />
                <SocialIcon icon={<FaWhatsapp />} href={member.social.whatsapp} />
                <SocialIcon icon={<FaXTwitter />} href={member.social.x} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center border border-black rounded-full text-black hover:bg-black hover:text-white transition"
  >
    {icon}
  </a>
);

export default Dedicated;
