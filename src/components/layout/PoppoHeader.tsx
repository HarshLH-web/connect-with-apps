'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, Variants } from "framer-motion";
import ScrollAnimation from '../ui/Scrollbar';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";


function PoppoHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  // const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileRegistrationOpen, setIsMobileRegistrationOpen] = useState(false);
  // const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false);

  const dropdownVariants = {
    open: {
      maxHeight: "240px", // Corresponds to max-h-60 in Tailwind
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      maxHeight: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  } as Variants;

  const arrowVariants = {
    open: { rotate: 180 } as Variants['open'],
    closed: { rotate: 0 } as Variants['closed'],
  } as Variants;
  
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the close button
  const registrationDropdownRef = useRef(null); // Separate ref for registration
  // const supportDropdownRef = useRef(null); // Separate ref for support
  const mobileregistrationDropdownRef = useRef(null); // Separate ref for mobile registration
  // const mobileSupportDropdownRef = useRef(null); // Separate ref for mobile support

  // Close the menu if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node) &&
      buttonRef.current &&
      !(buttonRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (registrationDropdownRef.current && 
          !(registrationDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsRegistrationOpen(false);
      }
      // if (supportDropdownRef.current && 
      //     !(supportDropdownRef.current as HTMLElement).contains(event.target as Node)) {
      //   setIsSupportOpen(false);
      // }
      if (mobileregistrationDropdownRef.current && 
          !(mobileregistrationDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMobileRegistrationOpen(false);
      }
      // if (mobileSupportDropdownRef.current && 
      //     !(mobileSupportDropdownRef.current as HTMLElement).contains(event.target as Node)) {
      //   setIsMobileSupportOpen(false);
      // }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    // Disable scroll when the menu is open
    useEffect(() => {
      if (isMenuOpen) {
        document.body.classList.add('no-scroll');  // Disable scroll
      } else {
        document.body.classList.remove('no-scroll');  // Enable scroll
      }
  
      return () => {
        document.body.classList.remove('no-scroll');  // Clean up when the component unmounts
      };
    }, [isMenuOpen]);

  return (
    <header className="bg-white text-black lg:text-black/10 w-full lg:border-b fixed top-0 z-50">
      <div className="max-w-[90%] lg:max-w-[95%] xl:max-w-[85%] mx-auto sm:px-4 py-2 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/"><Image src="/logo.svg" alt="Connect With Apps - logo" className="min-w-40 lg:min-w-44 w-40 lg:w-44" width={200} height={200} /></Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative w-10 h-10 flex flex-col items-center justify-center group lg:hidden p-1 rounded-full bg-[#353D76]`}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded mt-1 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded mt-1 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
        </button> */}
       <div className="flex items-center space-x-4 lg:hidden">
       <Link href="#registration" className={`text-base font-medium relative group transition-all duration-300 text-black/90`}>
            <span>Agency</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-base font-medium relative group transition-all duration-300"
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
            >
              <Image src="/Download-icon.svg" alt="Download Policies" className="w-5 h-5 mt-2" width={24} height={24} />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-20 py-0 border border-gray-200">
                <a
                  href="/policies/POPPO AGENCY POLICY - WEBSITE.pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition rounded-t-xl border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agency Policy
                </a>
                <a
                  href="/policies/POPPO HOST REGISTRATION - WEBSITE.pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Host Policy
                </a>
                <a
                  href="/policies/Poppo Coin Trading - Website.pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Coin Seller Policy
                </a>
                <a
                  href="/policies/Poppo rocket host and star host policy... .pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition rounded-b-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rocket Host and Star Host Policy
                </a>
              </div>
            )}
          </div>
       </div>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 ">
          <Link href="#registration" className={`text-base font-medium relative group transition-all duration-300 text-black/90`}>
            <span>Agency</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-base font-medium relative group transition-all duration-300"
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
            >
              <Image src="/Download-icon.svg" alt="Download Policies" className="w-5 h-5 mt-2" width={24} height={24} />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-20 py-0 border border-gray-200">
                <a
                  href="/policies/POPPO AGENCY POLICY - WEBSITE.pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition rounded-t-xl border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agency Policy
                </a>
                <a
                  href="/policies/POPPO HOST REGISTRATION - WEBSITE.pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Host Policy
                </a>
                <a
                  href="/policies/Poppo Coin Trading - Website.pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Coin Seller Policy
                </a>
                <a
                  href="/policies/Poppo rocket host and star host policy... .pdf"
                  download
                  className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-100 transition rounded-b-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rocket Host and Star Host Policy
                </a>
              </div>
            )}
          </div>

        </nav>
      </div>

      <ScrollAnimation />
    </header>
  );
}

export default PoppoHeader;
