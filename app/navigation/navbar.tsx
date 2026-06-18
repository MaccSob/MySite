"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#E8E4DC]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-7 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.16em] text-[#1a1a18] uppercase hover:opacity-60 transition-opacity duration-200"
        >
          MaccSob
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative group block px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-colors duration-200 ${
                    isActive ? "text-[#1a1a18]" : "text-[#9a9790] hover:text-[#1a1a18]"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#C4502A] transition-transform duration-200 origin-left ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-30"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`block w-5 h-[1.5px] bg-[#1a1a18] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#1a1a18] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#1a1a18] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-[#F7F4EF]/95 backdrop-blur-md border-b border-[#E8E4DC]`}
      >
        <ul className="flex flex-col px-7 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center justify-between py-3 text-sm font-medium border-b border-[#E8E4DC] last:border-0 transition-colors duration-200 ${
                    isActive ? "text-[#1a1a18]" : "text-[#9a9790] hover:text-[#1a1a18]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4502A]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}