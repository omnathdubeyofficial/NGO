import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavigationItem {
  name: string;
  href?: string;
  current: boolean;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    current: false,
  },

    {
    name: "Climate Emergencies",
    href: "#",
    current: false,
  },
  {
    name: "Initiatives",
    current: false,
    children: [
      { name: "Cloth For Work", href: "#", current: false },
      { name: "Not Just A Piece Of Cloth", href: "#", current: false },
      {name: "School To School", href: "#", current: false},
      {name: "Rahat", href: "#", current: false},
      {name:"Green By BSSS", href: "#", current: false}
    ],
  },
  {
    name: "Get Involved",
    current: false,
    children: [
           { name: "Collection Camps", href: "#", current: false },
      { name: "Dropping Centers", href: "#", current: false },
      {name: "volunteer", href: "#", current: false},
      {name: "Partner with Us", href: "#", current: false},
      {name:"Baithak", href: "#", current: false},
      {name: "Fellowship", href: "#", current: false},
      {name: "Career", href: "#", current: false},
      {name: "Internship", href: "#", current: false},
    ],
  },

    {
    name: "Updates",
    current: false,
    children: [
    { name: "Menstruation Dialogue", href: "#" , current: false },
      { name: "Dignity Diaries", href: "#", current: false  },
      {name: "Chaupal 2025", href: "#", current: false },
      {name: "Junoon Awards", href: "#", current: false },
      {name:"Disaster Photo Updates", href: "#", current: false },
      {name: "Saree Campaign", href: "#", current: false },
      {name: "Cloth Day", href: "#", current: false },
    ],
  },
  { name: "About Us", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (e: React.MouseEvent, name: string) => {
    e.stopPropagation(); // prevent parent menu auto-close
    if (openDropdown === name) return;
    setOpenDropdown(name);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null); // close only when child link is clicked
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={(e) => handleDropdown(e, item.name)}
                      className={classNames(
                        "flex items-center justify-between w-full",
                        item.current
                          ? "bg-gray-900 text-purple"
                          : "text-black hover:bg-gray-700 hover:text-purple",
                        "py-2 rounded-md text-base font-medium"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </button>

                    {openDropdown === item.name && (
                      <div
                        className="ml-4 mt-1 border-l border-gray-300 pl-2"
                        onClick={(e) => e.stopPropagation()} // prevent accidental menu close
                      >
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || "#"}
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 border-b border-gray-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-purple"
                        : "text-black hover:bg-gray-700 hover:text-purple",
                      "block py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
