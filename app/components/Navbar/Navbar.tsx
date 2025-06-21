import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";

const navItems = [
  { name: "About Us", href: "#aboutus" },
  {
    name: "Our Services",
    subItems: [
      { name: "Education Support", href: "#education" },
      { name: "Health Campaigns", href: "#health" },
      { name: "Women Empowerment", href: "#women" },
    ],
  },
  {
    name: "Programs",
    subItems: [
      { name: "Annual Camps", href: "#annual" },
      { name: "Blood Donation", href: "#blood" },
    ],
  },
  { name: "Partners", href: "#partners" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo-removebg-preview.png"
                  alt="NGO Logo"
                  className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  width={200}
                  height={200}
                  priority
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, idx) =>
                  item.subItems ? (
                    <div key={idx} className="relative group" ref={dropdownRef}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white transform transition-all duration-200 ${
                          openDropdown === item.name
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.subItems.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={idx}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                {/* Donation Button */}
                <Link
                  href="#donate"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  Donate Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Disclosure.Button
                  as="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                  onClick={() => setIsOpen(true)}
                >
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Drawer */}
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </>
      )}
    </Disclosure>
  );
}