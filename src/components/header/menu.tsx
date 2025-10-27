"use client";
import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`
        bg-white flex items-center justify-between fixed p-1 rounded-full bottom-4  z-40 text-black
        transition-all duration-500
        ${menuOpen ? "w-auto gap-2 " : " gap-2 "}
      `}
    >
     
      <div className="flex items-center gap-2 overflow-hidden">
        {menuOpen ? (
          links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-3 py-2 rounded-full hover:bg-gray-200 hover:font-bold hover:text-xl
                transition-all duration-500 transform font-semibold
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 "}
              `}
              style={{ transitionDelay: `${index * 100}ms` }} 
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))
        ) : (
          <span className="font-semibold ms-2">Menu</span>
        )}
      </div>

      
      <button
        className="bg-black rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`transform transition-transform duration-300 ${
            menuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
          }`}
        >
          {menuOpen ? <FiX color="white" size={24} /> : <FiMenu color="white" size={24} />}
        </div>
      </button>
    </nav>
  );
}
