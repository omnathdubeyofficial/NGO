"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: "हमारे बारे में", href: "#aboutus-section", current: false },
    { name: "हमारी सेवाएँ", href: "#services-section", current: false },
    { name: "कार्यक्रम", href: "#programs-section", current: false },
    { name: "सहयोगी", href: "#partners-section", current: false },
    { name: "प्रशंसा पत्र", href: "#testimonial-section", current: false },
    { name: "समाचार और अपडेट", href: "#news-section", current: false },
    { name: "संपर्क करें", href: "#contact-section", current: false },
];



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className={`navbar ${isScrolled ? "scrolled-navbar" : ""}`}>
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8" style={{ fontFamily: 'Hind, sans-serif' }}>
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className="flex items-center">
                                <img
    src="/images/logo-removebg-preview.png"
    alt="The Vision Sports Logo"
    className={`object-contain transition-all duration-300 ${
        isScrolled ? "h-10 sm:h-14" : "h-16 sm:h-20"
    }`}
/>

                                </Link>
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:flex items-center border-right">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900"
                                                    : "navlinks hover:text-black",
                                                "px-3 py-4 rounded-md text-lg font-normal"
                                            )}
                                            aria-current={item.href ? "page" : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* <Contactusform /> */}
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}
                        {/* DRAWER ICON */}
                        <div className="block lg:hidden">
                            <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                                onClick={() => setIsOpen(true)}
                            />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
