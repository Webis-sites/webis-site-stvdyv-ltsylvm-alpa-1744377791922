"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCamera, FaImages, FaComments, FaInfoCircle, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: "services", label: "שירותים", icon: <FaCamera className="ml-2" /> },
    { id: "gallery", label: "גלריה", icon: <FaImages className="ml-2" /> },
    { id: "testimonials", label: "המלצות", icon: <FaComments className="ml-2" /> },
    { id: "about", label: "אודות", icon: <FaInfoCircle className="ml-2" /> },
    { id: "faq", label: "שאלות נפוצות", icon: <FaQuestionCircle className="ml-2" /> },
    { id: "contact", label: "צור קשר", icon: <FaEnvelope className="ml-2" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-3">
                <Image
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="לוגו סטודיו לצילום אלפא"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <motion.h1
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-right text-[#FF6B6B]"
              >
                סטודיו לצילום אלפא
              </motion.h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 md:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-right flex items-center px-3 py-2 text-gray-700 hover:text-[#FF6B6B] transition-colors duration-200 rounded-lg"
                aria-label={`ניווט אל ${item.label}`}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF6B6B] group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#588C7E] hover:text-[#FF6B6B] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF6B6B] transition-all duration-200"
              aria-expanded={isOpen}
              aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md shadow-lg rounded-b-2xl mx-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center justify-end px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#FF6B6B] hover:bg-gray-50 transition-colors duration-200"
                  aria-label={`ניווט אל ${item.label}`}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;