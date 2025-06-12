import React, { ReactNode, useEffect } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
    // Disable background scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <main
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? "bg-black bg-opacity-50" : "pointer-events-none opacity-0"
            }`}
        >
            {/* Overlay click area */}
            <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer Panel */}
            <aside
                className={`fixed top-0 left-0 h-full w-[320px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header */}
                <header className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/images/logo-removebg-preview.png"
                            alt="The Vision Sports Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-700 transition"
                        aria-label="Close menu"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </header>

                {/* Scrollable Content */}
                <div
                    className="flex-1 overflow-y-auto px-5 py-6 space-y-4"
                    onClick={() => setIsOpen(false)}
                >
                    {children}
                </div>
            </aside>
        </main>
    );
};

export default Drawer;
