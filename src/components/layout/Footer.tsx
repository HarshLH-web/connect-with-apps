'use client';
import Image from 'next/image';
import Link from 'next/link';
    // import  { useState } from 'react';
    // import { useRouter } from 'next/navigation';

function Footer() {
 
  // Add state for search input
//   const [searchQuery, setSearchQuery] = useState('');
//   const router = useRouter();

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       router.push(`/blogs?tag=${encodeURIComponent(searchQuery.trim())}`);
//       setSearchQuery('');
//     }
//   };

  return (
    <footer className="bg-[#ffffff] text-black pt-10 pb-5">
      <div className="w-full lg:w-full max-w-360 mx-auto flex flex-col lg:flex-row lg:justify-center gap-8 px-6 lg:px-0 xl:px-6">
        {/* Contact Section - First on mobile */}
        <div className='order-1 lg:order-3 lg:pb-12 lg:w-[30%] xl:w-[25%]'>
        <div className="">
            
          <p className="text-2xl font-bold mb-2 lg:mb-4">Contact Us</p>
          {/* <div className="w-8 h-0.5 bg-black ml-2 mb-4"></div> */}
        <div className="flex flex-col gap-2 lg:gap-3 h-full">
            <div className="flex items-center gap-2">
                    <Image src="/whatsapp.svg" alt="whatsapp" className="w-6 h-6" width={20} height={20} />
                    <p className="text-gray-900 flex items-start gap-2">+91 8448877709</p>
            </div>

            
            <div className="flex items-center gap-2">
                <Image src="/mail.svg" alt="Email" className="w-6 h-6" width={20} height={20} />
                <p className="text-gray-900 flex items-start gap-2">support@connectwithapps.com</p>
            </div>
            
            <div className="flex items-start gap-2">   
                <Image src="/location.svg" alt="Phone" className="w-6 h-6" width={20} height={20} />
                <p className="text-gray-900 flex items-start gap-2">Omaxe Green Meadow City Bhiwadi, <br />Rajasthan 301019</p>
            </div>
          
          </div>

        </div>
        </div>

        {/* Quick Links Section - Second on mobile */}
        <div className="order-2 lg:order-1 lg:pb-12 whitespace-nowrap lg:w-[30%]">
          <p className="text-2xl font-semibold mb-2 lg:mb-4">Quick Links</p>
          {/* <div className="w-6 h-0.5 bg-white mx-2 mb-4"></div> */}
          <div className="flex flex-col lg:flex-row md:gap-4 xl:gap-16 justify-start lg:pr-8 xl:pr-16">
            <div className="space-y-1.5 flex flex-col">
              <Link href="/" className="text-gray-900 block md:inline transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300">Home</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/about-us" className="text-gray-900 block md:inline transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300">About Us</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/blogs" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Blogs</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/become-an-agent" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Become Agent</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/become-live-streamer" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Become Streamer</Link>
              {/* <div className="h-px bg-[#242424] lg:hidden"></div> */}
            </div>
            <div className="space-y-1.5 flex flex-col mt-2 lg:mt-0">
              {/* <a href="/register-influencer" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Register as Influencer</a>
              <div className="h-px bg-[#242424]"></div> */}
              {/* <div className="h-px bg-[#242424]"></div> */} 
              {/* <Link href="/asked-questions" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">FAQs</Link> */}
              {/* <div className="h-px bg-[#242424]"></div> */} 
              <Link href="/customer-support" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Support</Link>
              <Link href="/contact-us" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Contact Us</Link>
              <Link href="/terms-and-conditions" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Terms And Conditions</Link>
              <Link href="/privacy-policy" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Privacy Policy</Link>
              {/* <div className="h-px bg-[#242424]"></div>
              <Link href="/streaming-tips" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Streaming Tips</Link> */}
            </div>
          </div>
        </div>

        {/* Blog Links Section - Third on mobile */}
        <div className="order-3 lg:order-2 pb-12 whitespace-nowrap xl:pl-12 lg:w-[30%]">
          <p className="text-2xl font-semibold mb-2 lg:mb-4">Blog</p>
          {/* <div className="w-6 h-0.5 bg-white mx-2 mb-4"></div> */}

          <div className="space-y-1.5 flex flex-col lg:max-w-[80%]">
              <Link href="/blogs/tango-agency-registration" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Tango Agency Registration</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/blogs/become-poppo-live-host-and-earn-money" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">How to earn money on Poppo Live</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/blogs/how-poppo-app-agency-earn-money" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Poppo Agent Commission</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/blogs/joyo-live-agency" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Joyo Live Agency Registration</Link>
              {/* <div className="h-px bg-[#242424]"></div> */}
              <Link href="/blogs/how-to-trade-coins-in-poppo-live" className="text-gray-900 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Poppo Coin Seller</Link>
            </div>
        </div>
      </div>

      {/* Copyright and Social Links - Last on both mobile and desktop */}
      <div className="border bg-[#F8ECEE] border-[#00000087] py-4 text-center lg:text-left flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center order-4 w-[90%] sm:w-[95%] max-w-360 mx-auto px-2 lg:px-6 rounded-2xl">
        <div className="flex items-center gap-2 lg:gap-4">
        <Image src="/logo.svg" alt="Connect With Apps" className="w-42 lg:w-52" width={200} height={200} />
        <div className='w-px h-8 bg-black/25 hidden lg:block'></div>
            <p className="text-sm text-gray-900 hidden lg:block">
            &copy; 2025 Connect With Apps. All rights reserved.
            </p>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
            <Image src="/fb.svg" alt="Facebook" className="w-6 h-6" width={20} height={20} />
            <Image src="/insta.svg" alt="Instagram" className="w-6 h-6" width={20} height={20} />
            <Image src="/linkedIn.svg" alt="Twitter" className="w-6 h-6" width={20} height={20} />
            <Image src="/yt.svg" alt="YouTube" className="w-6 h-6" width={20} height={20} />
        </div>
        <p className="text-xs text-gray-900 block lg:hidden">
            &copy; 2025 Connect With Apps. All rights reserved.
            </p>
      </div>
    </footer>
  );
}

export default Footer;