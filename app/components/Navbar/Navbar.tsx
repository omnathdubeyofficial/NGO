import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";
import Image from "next/image";

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
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full top-0 z-50 transition-shadow bg-white shadow-sm ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
            <Image
              src="/images/logo-removebg-preview.png"
              alt="NGO Logo"
              className="h-10 sm:h-14 object-contain"
              width={300}
              height={300}
            />
          </Link>

          <div className="hidden lg:flex space-x-6 items-center">
            {navItems.map((item, idx) =>
              item.subItems ? (
                <div key={idx} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-800 hover:text-primary font-medium text-base focus:outline-none"
                  >
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute bg-white shadow-lg mt-2 rounded-md overflow-hidden z-10 w-52">
                      {item.subItems.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-b-0 hover:text-blue-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-gray-800 hover:text-primary font-medium text-base"
                >
                  {item.name}
                </Link>
              )
            )}
            {/* <Contactusform /> */}
          </div>

          <div className="lg:hidden">
            <Bars3Icon
              className="h-6 w-6 text-gray-800 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Drawerdata />
      </Drawer>
    </Disclosure>
  );
}
