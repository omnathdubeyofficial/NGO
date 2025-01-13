import React, {ReactNode , useState, useEffect } from "react";

import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";


interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

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
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
                className={
                    "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >

                <article className="relative w-340px max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="px-4 py-4 flex items-center">

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

                        <XMarkIcon className="block h-6 w-6" onClick={() => {
                            setIsOpen(false);
                        }} />
                    </header>
                    <div onClick={() => {
                        setIsOpen(false);
                    }}>{children}</div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
