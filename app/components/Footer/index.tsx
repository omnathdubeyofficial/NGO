import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter
} from "react-icons/fa6";

const footerLinks = [
  {
    title: "About Us",
    items: [
      "Our Mission",
      "Our Values",
      "Our Founder",
      "Our Initiatives",
      "Our Impact",
      "Our Disaster Focus",
      "Internship",
      "Careers",
      "Corporate Information",
    ],
  },
  {
    title: "Team & Governance",
    items: [
      "Governance Team",
      "Team",
      "Annual Report",
      "Financial",
      "Chapter Report",
    ],
  },
  {
    title: "Get Involved",
    items: [
      "Contact",
      "Individual",
      "Corporates",
      "Institutions",
      "Collection Camps",
      "Dropping Centers",
      "Events",
    ],
  },
  {
    title: "Programs",
    items: [
      "Past Initiatives",
      "News",
      "Resources",
    ],
  },

];

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        {/* Logo & Social */}
        <div>
          <Image src="/images/logo-removebg-preview.png" alt="Bhagirath Logo" width={180} height={60} className="mb-6" />
          <p className="text-sm mb-6 leading-relaxed">
            Bhagirath Sahayog Seva Sansthan is committed to uplifting the underprivileged through holistic programs in health, education, and sustainable development.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-white hover:text-black transition"><FaFacebookF /></a>
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-white hover:text-black transition"><FaInstagram /></a>
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-white hover:text-black transition"><FaYoutube /></a>
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-white hover:text-black transition"><FaWhatsapp /></a>
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-white hover:text-black transition"><FaXTwitter /></a>
          </div>
        </div>

        {/* Footer Menus */}
        {footerLinks.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:underline text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Bhagirath Sahayog Seva Sansthan. All Rights Reserved.</p>
        <p className="mt-1">Designed & Developed by Omnath Dubey | <Link href="https://vaekon.com" className="hover:underline text-black">Vaekon InfoTech</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
