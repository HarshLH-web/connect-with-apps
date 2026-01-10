import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import appsData from "@/assets/Apps.json";
import Link from "next/link";
import TopBanner from "@/components/ui/TopBanner";

interface App {
  name: string;
  logo: string;
  description: string[][];
  download: { text: string; url: string }[];
  buttons: { text: string; url: string }[];
}

const Apply = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const dropdownRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Apply Now | Connect With Apps: Start Your Streaming Career</title>
        <meta
          name="description"
          content="Ready to take the next step? Unlock the world of opportunities in live-streaming and content creation. Apply to join Connect With Apps today!"
        />
        <meta
          name="keywords"
          content="Live streaming Platforms, Live video streaming platforms, Broadcast streaming agency, Talent agency for streamers"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://connectwithapps.com/apply-now"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Apply Now | Connect With Apps: Start Your Streaming Career"
        />
        <meta property="og:site_name" content="Connect With Apps" />
        <meta
          property="og:description"
          content="Ready to take the next step? Unlock the world of opportunities in live-streaming and content creation. Apply to join Connect With Apps today!"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="connectwithapps.com" />
        <meta
          property="twitter:url"
          content="https://connectwithapps.com/apply-now"
        />
        <meta
          name="twitter:title"
          content="Apply Now | Connect With Apps: Start Your Streaming Career"
        />
        <meta
          name="twitter:description"
          content="Ready to take the next step? Unlock the world of opportunities in live-streaming and content creation. Apply to join Connect With Apps today!"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://connectwithapps.com/apply-now" />
      </Head>

      <Header />
      <TopBanner title="Apply Now" bgImage="bg-[url('/apply-bg.png')]" />

      <div className="mx-auto w-[90%] max-w-6xl">
        <div
          id="wrapper"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-16 pb-12 lg:pt-12 lg:pb-12"
        >
          {appsData.map((app: App, index: number) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  dropdownRefs.current[index] = el;
                }
              }}
              className="w-full md:w-auto mx-auto max-w-xl border border-[#00000012] rounded-3xl py-4 px-6 lg:px-12 lg:py-6 bg-linear-to-b from-[#FEFEFC] to-[#F9F6E3] relative lg:block"
            >
              <div className="flex justify-between flex-col md:flex-row items-center gap-5 lg:gap-3">
                <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
                  <Image
                    src={app.logo}
                    alt={app.name}
                    width={64}
                    height={64}
                    className="w-12 h-12 lg:w-20 lg:h-20"
                  />
                  <h2 className="text-2xl lg:text-3xl font-medium uppercase whitespace-nowrap">
                    {app.name}
                  </h2>
                </div>
                <div className="flex flex-col gap-2 w-full md:border-l border-[#00000012] md:pl-4 md:w-2/3 ">
                  {app.description.map(
                    (descriptionArray: string[], i: number) =>
                      descriptionArray.map((description: string, j: number) => (
                        <div
                          key={`${i}-${j}`}
                          className="flex items-start justify-start gap-2 border-b border-[#00000012] last:border-b-0 pb-2"
                        >
                          <Image
                            src="/Apply-nowPage/apply-tick.svg"
                            alt="tick"
                            width={16}
                            height={16}
                            className="w-4 h-4 mt-1"
                          />
                          <p className="text-base">{description}</p>
                        </div>
                      ))
                  )}
                </div>
              </div>
              <div className="bg-[#16161612] w-full h-px mx-auto hidden md:block rounded-full"></div>

              <div className="flex flex-col md:flex-row items-center lg:items-start gap-8 mt-6">
                <div className="flex justify-center items-center flex-col md:flex-row gap-2 lg:gap-4 w-full my-auto">
                  {app.buttons.map(
                    (button: { text: string; url: string }, i: number) => (
                      <Link
                        href={button.url}
                        key={i}
                        className="border border-[#00000025] rounded-full px-4 py-1.5 lg:py-2 text-base lg:text-lg text-[#000000e8] hover:bg-[#000000c4] hover:text-white transition-all duration-300"
                      >
                        {button.text}
                      </Link>
                    )
                  )}

                  <div className="absolute right-4 top-4 md:static">
                    <div
                      className="relative"
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <Image
                        src="/Download-icon.svg"
                        alt="download"
                        width={24}
                        height={24}
                        className="cursor-pointer w-5 h-5 lg:w-6 lg:h-6"
                      />
                      {openDropdownIndex === index && (
                        <div className="absolute right-0 bg-linear-to-b from-[#FEFEFC] to-[#F9F6E3] border border-gray-300 rounded-md shadow-lg mt-2 min-w-32 lg:min-w-40">
                          <ul className="py-0">
                            {app.download.map(
                              (
                                download: { text: string; url: string },
                                i: number
                              ) => (
                                <li
                                  key={i}
                                  className="px-2 lg:px-4 py-1 lg:py-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300 last:border-b-0"
                                >
                                  <a
                                    href={download.url}
                                    download={download.text}
                                    className=" text-sm lg:text-base"
                                  >
                                    {download.text}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="w-[95%] max-w-screen-2xl mx-auto border-t border-[#DFDFDF] lg:my-6" />
      <Footer />
    </>
  );
};

export default Apply;
