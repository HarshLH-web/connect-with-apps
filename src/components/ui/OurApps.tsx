"use client";
import Image from "next/image";
import { useState } from "react";

const AppsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(2); // POPPO expanded by default
  // const [isMobile, setIsMobile] = useState(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
    console.log(index);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const sections = [
    {
      title: "TAKA LIVE",
      heading: "TAKA LIVE",
      description: "Discover the world of fun and non-stop entertainment.",
      agentBtnText: "Takalive Agent",
      agentBtnURL: "https://lhtalentagency.com/join-honeycam-agency",
      bgimg: "/our-apps/taka-bg.png",
      imgUrl: "/our-apps/taka-logo.webp",
    },
    {
      title: "MIMI LIVE",
      heading: "MIMI LIVE",
      description: "Build great connections without language barriers.",
      hostBtnText: "Mimi Host",
      hostBtnURL: "https://mimiliveagency.com/#host",
      agentBtnText: "Mimi Agent",
      agentBtnURL: "https://mimiliveagency.com/#agent",
      bgimg: "/our-apps/mimi-bg.webp",
      imgUrl: "/our-apps/mimi-live.webp",
    },
    {
      title: "POPPO LIVE",
      heading: "POPPO LIVE",
      description: "Make live-streaming and group interactions playful.",
      hostBtnText: "Poppo Host",
      hostBtnURL: "/blogs/become-poppo-live-host-and-earn-money",
      agentBtnText: "Poppo Agent",
      agentBtnURL:
        "https://poppoagencyregistration.com/register/become-poppo-agent",
      bgimg: "/bg.webp",
      imgUrl: "/Poppo-Live.webp",
    },
    {
      title: "NIKI LIVE",
      heading: "NIKI LIVE",
      description: "A fun live-streaming application with a global reach.",
      hostBtnText: "Niki Host",
      hostBtnURL: "https://nikiliveagent.com/#host",
      agentBtnText: "Niki Agent",
      agentBtnURL: "https://nikiliveagent.com/#agent",
      bgimg: "/our-apps/niki-bg.webp",
      imgUrl: "/our-apps/Niki-live.webp",
    },
    {
      title: "JOYO LIVE",
      heading: "JOYO LIVE",
      description:
        "A streaming app exclusively designed for the Indian audience.",
      hostBtnText: "Joyo Host",
      hostBtnURL: "https://joyoliveagent.com/#host-registration",
      agentBtnText: "Joyo Agent",
      agentBtnURL: "/blogs/joyo-live-agency",
      bgimg: "/our-apps/joyo-bg.png",
      imgUrl: "/our-apps/Joyo-logo.png",
    },
  ];

  return (
    <div className="w-full lg:w-[80%] max-w-4xl mx-auto px-2 py-12">
      <div
        id="accordion"
        className="flex flex-col gap-2 items-stretch h-180 md:h-120 lg:h-160 overflow-hidden"
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`accordion-item flex-1 relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out rounded-3xl border border-[#0000007c] ${
              activeIndex === index ? "flex-5 md:flex-7 lg:flex-5" : "flex-1"
            }`}
            onClick={() => toggleAccordion(index)}
            // onMouseLeave={() => toggleAccordion(index)}
          >
            <div className="relative w-full h-full">
              <Image
                src={section.bgimg}
                alt={`Image ${index + 1}`}
                className={`w-full h-full object-cover ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
                width={1000}
                height={1000}
              />
              <div
                className={`absolute inset-0 bg-black/30 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
            <div>
              <Image
                src={section.imgUrl}
                alt={`${section.title} - Logo`}
                width={65}
                height={65}
                className={`h-10 w-10 md:h-12 md:w-12 rounded-2xl md:rounded-full absolute left-6 bottom-5 lg:bottom-[10px] lg:left-4 transition-all delay-0 duration-100 ${
                  activeIndex === index ? "opacity-0" : "opacity-100"
                }`}
              />
              <h3
                className={`text-2xl md:text-[26px] text-black font-semibold whitespace-nowrap tracking-wide transition-all duration-0 absolute left-20 bottom-6 lg:bottom-4 lg:left-22 ${
                  activeIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                {section.title}
              </h3>

              <Image
                src="/app-plus.svg"
                alt="Arrow Right"
                width={30}
                height={30}
                className={`absolute right-6 bottom-6 lg:bottom-5 lg:right-5 transition-all delay-0 duration-100
                  ${activeIndex === index ? "opacity-0" : "opacity-100"}`}
              />

              <div key={index}>
                <Image
                  src="/close-app.svg"
                  alt="Arrow Right"
                  width={30}
                  height={30}
                  className={`absolute -right-1 -top-1 transition-all delay-0 duration-100 h-12 w-12 lg:h-16 lg:w-16
                  ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
                  onClick={() => toggleAccordion(index)}
                />
              </div>
            </div>

            {/* Inside the accordion item content */}
            <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
              <div
                className={`detail-content text-center transition-all duration-100 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* <Image src="/close-app.svg" alt="Arrow Right" width={30} height={30} className={`absolute right-0 top-0 transition-all delay-0 duration-100
                  ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`} /> */}
                <Image
                  src={section.imgUrl}
                  alt={`${section.title} - Logo`}
                  width={65}
                  height={65}
                  className="h-16 w-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2"
                />
                <h4 className="text-xl md:text-2xl font-semibold">
                  {section.heading}
                </h4>
                <p className="mt-2 text-base lg:text-lg px-4">
                  {section.description}
                </p>
                <div className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  {section.hostBtnText && (
                    <a
                      href={section.hostBtnURL}
                      className="px-4 py-2 bg-transparent border border-[#FFE9DF] hover:bg-[#FFE9DF] hover:text-[#DE0400] transition duration-300 rounded-3xl"
                      aria-label={`Become ${section.hostBtnText}`}
                    >
                      Become {section.hostBtnText}
                    </a>
                  )}
                  <a
                    href={section.agentBtnURL}
                    className="px-4 py-2 bg-transparent border border-[#FFE9DF] hover:bg-[#FFE9DF] hover:text-[#DE0400] transition duration-300 rounded-3xl"
                    aria-label={`Become ${section.agentBtnText}`}
                  >
                    Become {section.agentBtnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsAccordion;
