import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blogs" },
    { href: "/books", label: "books" },
  ];

  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <Link
          href={navLinks[0].href}
          className="text-gray-300 underline hover:text-white"
        >
          {navLinks[0].label}
        </Link>
      </div>
      <div className="flex items-center gap-2 flex-row">
        {navLinks.slice(1).map((link, index) => (
          <Link
            href={link.href}
            className="text-gray-300 underline hover:text-white"
            key={index}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
