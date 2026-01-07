'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, Variants } from "framer-motion";
import ScrollAnimation from '../ui/Scrollbar';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";


function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileRegistrationOpen, setIsMobileRegistrationOpen] = useState(false);
  const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false);

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
  const supportDropdownRef = useRef(null); // Separate ref for support
  const mobileregistrationDropdownRef = useRef(null); // Separate ref for mobile registration
  const mobileSupportDropdownRef = useRef(null); // Separate ref for mobile support

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
      if (supportDropdownRef.current && 
          !(supportDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsSupportOpen(false);
      }
      if (mobileregistrationDropdownRef.current && 
          !(mobileregistrationDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMobileRegistrationOpen(false);
      }
      if (mobileSupportDropdownRef.current && 
          !(mobileSupportDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMobileSupportOpen(false);
      }
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
          <Link href="/"><Image src="/logo.png" alt="LH Talent Agency - logo" className="w-40 lg:w-auto" width={200} height={200} /></Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative w-10 h-10 flex flex-col items-center justify-center group lg:hidden p-1 rounded-full bg-[#353D76]`}
            aria-label="Menu"
          >
            {/* Hamburger Icon */}
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
        </button>


        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed top-12 right-0 flex flex-col items-center justify-center w-full nav-gradient h-[calc(100vh-48px)] z-20 transition-transform duration-500 ease-in-out bg-white ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
    <nav className="flex flex-col items-center py-8 space-y-4">
      <Link href="/" className="text-base hover:text-gray-400 font-medium" onClick={() => setIsMenuOpen(false)}>
        Home
      </Link>
      <div className="h-px w-48 bg-gray-300"></div>
      <Link href="/about-us" className="text-base hover:text-gray-400 font-medium" onClick={() => setIsMenuOpen(false)}>
        About
      </Link>
      <div className="h-px w-48 bg-gray-300"></div>
      <Link href="/our-services" className="text-base hover:text-gray-400 font-medium" onClick={() => setIsMenuOpen(false)}>
        Services
      </Link>
      <div className="h-px w-48 bg-gray-300"></div>

      {/* Registration Dropdown */}
      <div className="group relative text-base hover:text-gray-400 font-medium" ref={mobileregistrationDropdownRef}>
        <button
          onClick={() => setIsMobileRegistrationOpen(!isMobileRegistrationOpen)}
          className="flex items-center justify-center mx-auto"
        >
          Registration
          <motion.svg
            className="w-4 h-4 transform inline-flex mb-1 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial="closed"
            animate={isRegistrationOpen ? "open" : "closed"}
            variants={arrowVariants}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>
        <motion.div
          className="overflow-hidden bg-white rounded-2xl text-black w-56 text-center"
          initial="closed"
          animate={isMobileRegistrationOpen ? "open" : "closed"}
          variants={dropdownVariants}

        >
          <Link
            href="/become-live-streamer"
            className="block px-4 py-2 text-base hover:text-gray-400 font-medium whitespace-nowrap"
            onClick={() => {
              setIsMobileRegistrationOpen(false);
              setIsMenuOpen(false);
            }}
          >
            Become Live Streamer
          </Link>
          <div className="h-px w-40 mx-auto bg-gray-300"></div>
          <Link
            href="/become-an-agent"
            className="block px-4 py-2 text-base hover:text-gray-400 font-medium"
            onClick={() => {
              setIsMobileRegistrationOpen(false);
              setIsMenuOpen(false);
            }}
          >
            Become Agent
          </Link>
        </motion.div>
      </div>

      <div className="h-px w-48 bg-gray-300"></div>

      <Link href="/blogs" className="text-base hover:text-gray-400 font-medium" onClick={() => setIsMenuOpen(false)}>
        Blogs
      </Link>
      <div className="h-px w-48 bg-gray-300"></div>

      {/* Support Dropdown */}
      <div className="group relative text-base hover:text-gray-400 font-medium" ref={mobileSupportDropdownRef}>
        <button
          onClick={() => setIsMobileSupportOpen(!isMobileSupportOpen)}
          className="flex items-center justify-center mx-auto"
        >
          Support
          <motion.svg
            className="w-4 h-4 transform inline-flex mb-1 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial="closed"
            animate={isMobileSupportOpen ? "open" : "closed"}
            variants={arrowVariants}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>
        <motion.div
          className="overflow-hidden bg-white rounded-2xl mt-2 text-black w-48 text-center"
          initial="closed"
          animate={isMobileSupportOpen ? "open" : "closed"}
          variants={dropdownVariants}
        >
          <Link href="/customer-support" className="block px-4 py-2 text-base hover:text-gray-400" onClick={() => {
            setIsMobileSupportOpen(false);
            setIsMenuOpen(false);
          }}>
            Customer Support
          </Link>
          <div className="h-px w-40 mx-auto bg-gray-300"></div>
          <Link href="/asked-questions" className="block px-4 py-2 text-base hover:text-gray-400" onClick={() => {
            setIsMobileSupportOpen(false);
            setIsMenuOpen(false);
          }}>
            FAQ
          </Link>
        </motion.div>
      </div>

      {/* Apply Now Button */}
      <button
        className="bg-[#353D76] text-white rounded-full font-medium "
        onClick={() => setIsMenuOpen(false)}
      >
        <Link href="/apply-now" className="flex items-center gap-2 py-3 px-6">
        Apply Now
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 z-10 transition-transform duration-300 ease-out group-hover:scale-x-125 origin-left"
            >
              <path
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </Link>
      </button>
    </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 ">
          <Link href="/" className={`text-base font-medium relative group transition-all duration-300 ${pathname === '/' ? 'text-[#000000]' : 'text-[#7b7b7b]'}`}>
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="h-6 w-px bg-[#353d7688]"></div>
          <Link href="/about-us" className={`text-base font-medium relative group transition-all duration-300 ${pathname === '/about-us' ? 'text-[#000000]' : 'text-[#7b7b7b]'}`}>
            <span>About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="h-6 w-px bg-[#353d7688]"></div>
          <Link href="/our-services" className={`text-base font-medium relative group transition-all duration-300 ${pathname === '/our-services' ? 'text-[#000000]' : 'text-[#7b7b7b]'}`}>
            <span>Services</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="h-6 w-px bg-[#353d7688]"></div>
          {/* Registration Dropdown */}
          <div className="group relative text-base font-medium" ref={registrationDropdownRef}>
              <button onClick={() => setIsRegistrationOpen(!isRegistrationOpen)} className="flex items-center relative group transition-all duration-300 text-[#7b7b7b] hover:text-[#000000]">
                <span>Registration</span>
              <motion.svg
            className="w-4 h-4 transform inline-flex mb-1 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial="closed"
            animate={isRegistrationOpen ? "open" : "closed"}
            variants={arrowVariants}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <div
              className={`${
                isRegistrationOpen ? 'block' : 'hidden'
              } absolute top-9 -left-10 w-56 bg-linear-to-b from-[#FEFEFC] to-[#F9F6E3] mt-2 text-black rounded-[0rem_0rem_1rem_1rem] overflow-hidden text-center z-10`}
            >
              <Link href="/become-live-streamer" className="block px-4 py-3 text-base hover:text-white font-medium hover:bg-[#353D76] transition-all duration-300" onClick={() => setIsRegistrationOpen(false)}>
                Become Live Streamer
              </Link>
              <Link href="/become-an-agent" className="block px-4 py-3 text-base hover:text-white font-medium hover:bg-[#353D76] transition-all duration-300" onClick={() => setIsRegistrationOpen(false)}>
                Become An Agent
              </Link>
            </div>
          </div>
          <div className="h-6 w-px bg-[#353d7688]"></div>
          <Link href="/blogs" className={`text-base font-medium relative group transition-all duration-300 ${pathname === '/blogs' ? 'text-[#000000]' : 'text-[#7b7b7b]'}`}>
            <span>Blogs</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="h-6 w-px bg-[#353d7688]"></div>
          {/* Support Dropdown */}
          <div className="group relative text-base font-medium" ref={supportDropdownRef}>
            <button onClick={() => setIsSupportOpen(!isSupportOpen)} className="flex items-center relative group transition-all duration-300 text-[#7b7b7b] hover:text-[#000000]">
              <span>Support</span>
              <motion.svg
            className="w-4 h-4 transform inline-flex mb-1 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial="closed"
            animate={isSupportOpen ? "open" : "closed"}
            variants={arrowVariants}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#353D76] group-hover:w-full transition-all duration-300"></span>
            </button>
            <div
              className={`${
                isSupportOpen ? 'block' : 'hidden'
              } absolute top-9 -left-14 w-48 bg-linear-to-b from-[#FEFEFC] to-[#F9F6E3] rounded-[0rem_0rem_1rem_1rem] mt-2 text-black overflow-hidden z-10`}
            >
              <Link href="/customer-support" className="block px-6 py-3 text-base hover:text-white hover:bg-[#353D76] whitespace-nowrap text-center transition-all duration-300" onClick={() => setIsSupportOpen(false)}>
                Customer Support
              </Link>
              <Link href="/asked-questions" className="block px-6 py-3 text-base hover:text-white hover:bg-[#353D76] whitespace-nowrap text-center transition-all duration-300" onClick={() => setIsSupportOpen(false)}>
                FAQ
              </Link>
            </div>
          </div>


          
          {/* Apply Now Button */}
            <Link href="/apply-now" className="py-2 xl:py-2 px-6 bg-[#353D76] hover:bg-white text-white hover:text-[#353D76] rounded-full font-medium flex items-center gap-2 transition duration-300 border-2 border-[#353D76]">
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 z-10 transition-transform duration-300 ease-out group-hover:scale-x-125 origin-left"
            >
              <path
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </Link>

        </nav>
      </div>

      <ScrollAnimation />
    </header>
  );
}

export default Header;
