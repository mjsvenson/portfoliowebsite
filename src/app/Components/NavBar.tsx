'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from "./Images/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="NavBar" className="fixed top-0 left-0 w-full bg-black z-50 mask-b-from-40% mask-b-to-90%">
      <div className="flex items-center justify-between px-5 py-2">
        <a href="#Intro">
          <Image src={Logo} alt="Logo" width={80} height={80} className="w-14 h-14 md:w-20 md:h-20" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          <a href="#ProjectSection" className="text-white hover:text-sky-400 transition">Projects</a>
          <a href="#WorkSection" className="text-white hover:text-sky-400 transition">Work Experience</a>
          <a href="#EducationSection" className="text-white hover:text-sky-400 transition">Education</a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white text-3xl px-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black pb-4 gap-4">
          <a href="#ProjectSection" onClick={() => setIsOpen(false)} className="text-white">Projects</a>
          <a href="#WorkSection" onClick={() => setIsOpen(false)} className="text-white">Work Experience</a>
          <a href="#EducationSection" onClick={() => setIsOpen(false)} className="text-white">Education</a>
        </div>
      )}
    </nav>
  );
}