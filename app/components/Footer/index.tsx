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
      { name: "In the News", href: "/components/IntheNews" },
      { name: "Recognized and Encouraged", href: "/components/appreciation_letters" },
      { name: "A Step Towards Greener Earth", href: "/components/GreenerEarth" },
      { name: "Clean Ganga Initiative", href: "/components/ViewCleanupHighlights" },
      { name: "Our Mission", href: "/components/IntheNews" },
      { name: "Our Vision", href: "/components/IntheNews" },
      { name: "Problems We Solve", href: "/components/IntheNews" },
      { name: "Our Impact", href: "/components/IntheNews" },
      { name: "Our Team", href: "/components/IntheNews" },
    ],
  },
  {
    title: "Our Services and Commitments",
    items: [
      { name: "Spreading Education & Awareness for Community Development", href: "/services/education-awareness" },
      { name: "Empowering Society Through Healthcare Services", href: "/services/healthcare" },
      { name: "Special Initiatives for Women Empowerment", href: "/services/women-empowerment" },
      { name: "Promoting Natural Resource Conservation", href: "/services/resource-conservation" },
      { name: "Fostering Child Development & Education", href: "/services/child-development" },
      { name: "Establishing Equality & Peace in Society", href: "/services/equality-peace" },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { name: "Volunteer with Us", href: "/get-involved/volunteer" },
      { name: "Donate Now", href: "/get-involved/donate" },
      { name: "Fundraise for a Cause", href: "/get-involved/fundraise" },
      { name: "Become a Partner", href: "/get-involved/partner" },
      { name: "Corporate Social Responsibility (CSR)", href: "/get-involved/csr" },
      { name: "Internship Opportunities", href: "/get-involved/internship" },
      { name: "Sponsor a Child", href: "/get-involved/sponsor-child" },
      { name: "Join Our Events", href: "/get-involved/events" },
      { name: "Start a Local Chapter", href: "/get-involved/local-chapter" },
      { name: "Skill-Based Volunteering", href: "/get-involved/skill-volunteer" },
      { name: "Spread the Word", href: "/get-involved/spread-word" },
    ],
  },
  {
    title: "Programs",
    items: [
      { name: "Health & Sanitation", href: "/programs/health-sanitation" },
      { name: "Education & Literacy", href: "/programs/education-literacy" },
      { name: "Women Empowerment", href: "/programs/women-empowerment" },
      { name: "Child Welfare", href: "/programs/child-welfare" },
      { name: "Youth Skill Development", href: "/programs/youth-skill" },
      { name: "Environment & Sustainability", href: "/programs/environment" },
      { name: "Disaster Relief & Emergency Support", href: "/programs/disaster-relief" },
      { name: "Livelihood & Income Generation", href: "/programs/livelihood" },
      { name: "Senior Citizen Support", href: "/programs/senior-support" },
      { name: "Rural Development", href: "/programs/rural-development" },
      { name: "Urban Slum Upliftment", href: "/programs/urban-slum" },
      { name: "Cultural & Social Integration", href: "/programs/social-integration" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#E0F2F1] text-gray-900 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        {/* Logo & Social */}
        <div>
          <Image
            src="/images/logo-removebg-preview.png"
            alt="Bhagirath Logo"
            width={180}
            height={60}
            className="mb-6"
          />
          <p className="text-sm mb-6 leading-relaxed">
            Bhagirath Sahayog Seva Sansthan is committed to uplifting the underprivileged through holistic programs in health, education, and sustainable development.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/15nPC2h14B/"
              className="w-9 h-9 flex items-center justify-center border border-black rounded-full transition duration-300 hover:bg-[#004D40] hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/bhagirathsahyogseva?igsh=b2d5cHJ5b24xdnhq"
              className="w-9 h-9 flex items-center justify-center border border-black rounded-full transition duration-300 hover:bg-[#004D40] hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@bsssofficial?si=ETB6HC9Pfy4DV5IA"
              className="w-9 h-9 flex items-center justify-center border border-black rounded-full transition duration-300 hover:bg-[#004D40] hover:text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/919453838751"
              className="w-9 h-9 flex items-center justify-center border border-black rounded-full transition duration-300 hover:bg-[#004D40] hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://x.com/BhagirathSSS?t=CnRsgzyoIl7G16MMaYn0OQ&s=09"
              className="w-9 h-9 flex items-center justify-center border border-black rounded-full transition duration-300 hover:bg-[#004D40] hover:text-white"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Footer Menus */}
        {footerLinks.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm px-2 py-1 block rounded-md transition duration-300 hover:bg-[#004D40] hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-400 mt-16 pt-6 text-center text-sm text-gray-700">
        <p>© {new Date().getFullYear()} Bhagirath Sahayog Seva Sansthan. All Rights Reserved.</p>
        <p className="mt-1">
          Designed & Developed by Omnath Dubey |{" "}
          <Link href="https://vaekoninfotech.com" className="hover:underline text-black">
            VaeKon InfoTech
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
