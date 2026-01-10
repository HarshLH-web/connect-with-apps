"use client";
import Image from "next/image";
import { useState } from "react";

const AppsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(1); // POPPO expanded by default
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
      title: "CHAMET",
      heading: "CHAMET",
      description:
        "Connect worldwide via free video chat and live streaming, without language barriers.",
      hostBtnText: "Download Chamet",
      hostBtnURL:
        "https://play.google.com/store/apps/details?id=com.hkfuliao.chamet",
      agentBtnText: "Become Chamet Agent",
      agentBtnURL:
        "https://h5.schamet.com/webH5/inviteAgent/bind.html?companyId=3338",
      bgimg: "/our-apps/chamet-bg.webp",
      imgUrl: "/our-apps/Chamet-Live.webp",
    },
    {
      title: "POPPO LIVE",
      heading: "POPPO LIVE",
      description:
        "Interact globally through high-quality live streaming apps.",
      hostBtnText: "Become Poppo Host",
      hostBtnURL:
        "https://static.vshowapi.com/inviteNew/share?c=poppo&link_id=8096839&user_id=63534458&temp_type=1&sys_temp_id=2",
      agentBtnText: "Become Poppo Agent",
      agentBtnURL:
        "https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=poppo",
      bgimg: "/bg.webp",
      imgUrl: "/our-apps/Poppo-Live.webp",
    },
    {
      title: "NIKI LIVE",
      heading: "NIKI LIVE",
      description:
        "A high-energy global platform designed for fun and interactive streaming.",
      iOSBtnText: "Get Niki on iOS",
      iOSBtnURL:
        "https://apps.apple.com/my/app/niki-live-live-stream-party/id1513868713",
      hostBtnText: "Download Niki Live",
      hostBtnURL:
        "https://www.dropbox.com/scl/fi/u97bdcis371gn0twrigt4/com.glive.niki_V2.34.2_03_10.apk?rlkey=old0vqarhhdeq4xhwjjmjxhp4&raw=1",
      agentBtnText: "Become Niki Agent",
      agentBtnURL:
        "https://d34kziiug05v0a.cloudfront.net/event/jump/invite_agent?guild_id=31226&guild_code=7d714cfcd937350a9f6496e665a5720c&lang=en",
      bgimg: "/our-apps/niki-bg.webp",
      imgUrl: "/our-apps/Niki-live.webp",
    },
    {
      title: "JOYO LIVE",
      heading: "JOYO LIVE",
      description:
        "A fun, engaging application for real-time interactions on video streaming platforms.",
      hostBtnText: "Download Joyo Live",
      hostBtnURL:
        "https://joyo.go.link?adj_t=1p4hrtnk&deep_link=joyo%3A%2F%2Finvite%3FinviteCode%3D900248693",
      agentBtnText: "Become Joyo Agent",
      agentBtnURL:
        "https://h5.joyoshow.com/applyinvatefamily?user_id=900248693",
      bgimg: "/our-apps/joyo-bg.png",
      imgUrl: "/our-apps/joyo-logo.png",
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
                className={`h-12 w-12 md:h-12 md:w-12 rounded-2xl md:rounded-full absolute left-5 bottom-[18px] lg:bottom-[13px] lg:left-4 transition-all delay-0 duration-100 ${
                  activeIndex === index ? "opacity-0" : "opacity-100"
                }`}
              />
              <h3
                className={`text-2xl md:text-[26px] text-black font-semibold whitespace-nowrap tracking-wide transition-all duration-0 absolute left-20 bottom-[25px] lg:bottom-5 lg:left-22 ${
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
                className={`absolute right-6 bottom-[28px] lg:bottom-6 lg:right-5 transition-all delay-0 duration-100
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
                      {section.hostBtnText}
                    </a>
                  )}
                  {section.iOSBtnText && (
                    <a
                      href={section.iOSBtnURL}
                      className="px-4 py-2 bg-transparent border border-[#FFE9DF] hover:bg-[#FFE9DF] hover:text-[#DE0400] transition duration-300 rounded-3xl"
                      aria-label={`Get ${section.iOSBtnText}`}
                    >
                      {section.iOSBtnText}
                    </a>
                  )}
                  <a
                    href={section.agentBtnURL}
                    className="px-4 py-2 bg-transparent border border-[#FFE9DF] hover:bg-[#FFE9DF] hover:text-[#DE0400] transition duration-300 rounded-3xl"
                    aria-label={`Become ${section.agentBtnText}`}
                  >
                    {section.agentBtnText}
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
