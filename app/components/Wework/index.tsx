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
    name: "Dr. Kajol Bayas",
    imgSrc: "/images/kajol.jpg",
    social: {
      facebook: "https://www.facebook.com/kajol.bayas.7?mibextid=ZbWKwL",
      instagram: "https://www.instagram.com/kajolbayas_?igsh=enVvaGU5ZHpuNWd3",
      linkedin: "https://www.linkedin.com/in/dr-kajol-bayas-b06069194?trk=contact-info",
      // youtube: "#",
      // whatsapp: "#",
      x: "https://x.com/KajolBayas?t=2xlzrfQz6DoOPenS0Cg7wg&s=08",
    },
  },
  {
    profession: "National Secretary",
    name: "Avanish Singh Chandel",
    imgSrc: "/images/avi.jpg",
    social: {
      facebook: "https://www.facebook.com/share/19UwPHJtAz/",
      instagram: "https://www.instagram.com/avanishsinghchandel9119?igsh=MXd5YzYwZ3BnbGRsYQ==",
      linkedin: "https://www.linkedin.com/in/avanishsinghchandel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // youtube: "#",
      whatsapp: "https://wa.me/919453838751",
      x: "https://x.com/Avanish9453?t=5eOYlp2GwDevbyV6GwWwag&s=09",
    },
  },
  {
    profession: "Chief Information Officer (CIO)",
    name: "Omnath Dubey",
    imgSrc: "/images/249064878_ea40.webp",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61561864202816#",
      instagram: "https://www.instagram.com/omnathdubeyofficial/?__pwa=1",
      linkedin: "https://www.linkedin.com/in/omnathdubeyofficial/",
      // youtube: "#",
      whatsapp: "https://wa.me/919838381169",
      x: "https://x.com/dubeyomofficial?t=tES5rANJBMq5pBhMYvhrrA&s=09",
    },
  },
];

const missionData = [
  {
    icon: <Users size={48} className="text-blue-600 mb-4" />,
    title: "Our Mission",
    description:
      "Our mission is to uplift marginalized and underserved communities by breaking systemic barriers and enabling access to essential services. We believe that every human being deserves the right to quality education, primary healthcare, and sustainable livelihood opportunities. Through community-led initiatives, partnerships, and innovation, we work towards building self-reliant communities.",
    link: "#mission",
  },
  {
    icon: <Lightbulb size={48} className="text-yellow-500 mb-4" />,
    title: "Our Vision",
    description:
      "We envision a world where no one is left behind — a future in which every individual, regardless of background, gender, or geography, can access equal opportunities to live a life of purpose and well-being. Our vision is rooted in compassion, equity, and resilience, aiming for long-term systemic change across generations.",
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
  {member.social.facebook?.startsWith("https") && (
    <SocialIcon icon={<FaFacebookF />} href={member.social.facebook} />
  )}
  {member.social.instagram?.startsWith("https") && (
    <SocialIcon icon={<FaInstagram />} href={member.social.instagram} />
  )}
  {member.social.linkedin?.startsWith("https") && (
    <SocialIcon icon={<FaLinkedinIn />} href={member.social.linkedin} />
  )}
  {member.social.whatsapp?.startsWith("https") && (
    <SocialIcon icon={<FaWhatsapp />} href={member.social.whatsapp} />
  )}
  {member.social.x?.startsWith("https") && (
    <SocialIcon icon={<FaXTwitter />} href={member.social.x} />
  )}
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
