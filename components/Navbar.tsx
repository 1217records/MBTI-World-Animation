"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ShareButtons from "./ShareButtons";
import LanguageToggle from "./LanguageToggle";
import { localeFromPath, localizePath } from "@/lib/i18n-config";

type NavbarProps = {
  pathname: string;
};

const Navbar = ({ pathname }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = localeFromPath(pathname);

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href={localizePath("/", locale)} className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="MBTI World Logo"
            width={28}
            height={28}
            className="group-hover:rotate-12 transition-transform duration-300 drop-shadow-sm"
          />
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#16324f] font-serif">
            MBTI-world
          </span>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Suspense fallback={null}>
            <LanguageToggle />
          </Suspense>
          <ShareButtons />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-[#16324f] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-6 gap-6 items-center">
            <div className="w-full">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">Language</p>
              <div className="flex justify-center">
                <Suspense fallback={null}>
                  <LanguageToggle />
                </Suspense>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">Share</p>
              <div className="flex justify-center scale-110">
                <ShareButtons />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
