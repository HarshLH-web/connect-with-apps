import type { NextPage } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const ConnectWithVone: NextPage = () => {
  return (
    <>
    <Header />
      <div
        className="fixed bottom-8 left-8 z-100 opacity-0 transform translate-y-6 transition-all duration-500 ease-out mix-blend-luminosity"
        id="scrollTopBtnContainer"
      >
        <button
          id="scrollTopBtn"
          title="Go to top"
          className="p-3 bg-[#2E0C31] text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          <Image
            src="/vone-images/scrollup.webp"
            alt="scroll-up"
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </button>
      </div>

      <main
        style={{
          backgroundImage: "url('/vone-images/main-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 pt-8 pb-12 sm:px-8 lg:px-8 lg:py-20 my-auto flex justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center h-auto md:px-8 lg:px-0 lg:gap-0 w-full lg:w-full mx-auto pt-24 md:pt-16">
            <div className="mb-0 md:flex-1 xl:flex-none xl:px-16 md:mt-6 xl:mt-0 order-2 md:order-1">
              <Image
                src="/vone-images/vone-main-mobile.webp"
                alt="Vone Agency Registration"
                className="w-full h-full aspect-auto"
                width={1080}
                height={1920}
              />
            </div>

            <div className="flex-1 text-center text-white md:flex-1 order-3 md:order-2 max-w-xl">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:text-left"
                style={{ minHeight: "2.5rem" }}
              >
                Connect With Vone
              </h1>
              <p
                className="mb-2 md:mb-4 text-[1rem] leading-tight md:text-md lg:text-xl md:text-left"
                style={{ minHeight: "1.5rem" }}
              >
                A global reach application with live-streaming features
                allowing your talent to shine and transform into a profitable
                career.
              </p>

              <hr className="border-t border-t-[#45547b60] border-b border-b-[#10162c70] bg-linear-to-r from-[#45547b60] to-[#10162c70]" />

              <p
                className="mb-2 md:mb-4 text-[1rem] leading-tight lg:text-lg md:text-left font-semibold py-4 md:py-6"
                style={{ minHeight: "1.5rem" }}
              >
                Get ready for an amazing journey with Vone App!
              </p>

              <div
                className="btn-container mb-4 w-full lg:w-full"
                style={{ minHeight: "4rem" }}
              >
                <div className="container">
                  <div className="flex flex-wrap gap-4 mx-auto items-center justify-center mb-16 md:mb-8">
                    <button className="flex lg:flex-1 min-w-36 text-white font-semibold rounded-3xl hover:bg-[#750DBC] border bg-transparent items-center justify-center transition-all duration-300">
                      <a
                        href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=vone"
                        className="flex items-center justify-center py-2 px-2 sm:px-4"
                      >
                        <Image
                          src="/vone-images/vone-logo.png"
                          alt="Agency Logo"
                          width={24}
                          height={24}
                          className="h-5 w-5 md:h-6 md:w-6 mx-2"
                        />
                        <p className="text-[1rem] leading-tight">
                          Agency Link
                        </p>
                      </a>
                    </button>
                    <button className="flex lg:flex-1 min-w-36 text-white font-semibold rounded-3xl bg-transparent hover:bg-[#750DBC] border items-center justify-center transition-all duration-300">
                      <a
                        href="https://static.vshowapi.com/inviteNew/share/?c=vone&link_id=370107&user_id=63534458&temp_type=1&sys_temp_id=3"
                        className="flex items-center justify-center py-2 px-2 sm:px-4"
                      >
                        <Image
                          src="/vone-images/download.svg"
                          alt="Google Play Logo"
                          width={24}
                          height={24}
                          className="h-5 w-5 md:h-6 md:w-6 mr-2"
                        />
                        <p className="text-[1rem] leading-tight">Download</p>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    
      <div className="w-full flex flex-col items-center justify-center py-8 lg:py-7 vone-bg">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-center w-[90%] max-w-5xl mx-auto text-white">
          <p className="text-2xl lg:text-3xl 2xl:text-3xl font-semibold text-center">
            Download Poppo
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 items-center justify-center">
            <a
              href="https://static.vshowapi.com/inviteNew/share/?c=poppo&link_id=8096911&user_id=63534458&temp_type=1&sys_temp_id=1"
              aria-label="Get Vone App"
              className="bg-transparent font-semibold text-white hover:bg-blue-700 transition-all duration-300 px-4 lg:px-6 py-[6px] rounded-full border border-white flex items-center gap-2"
            >
              <Image
                src="/vone-images/google-play.svg"
                alt="Vone App"
                className="w-5 lg:w-7 h-5 lg:h-7"
                width={20}
                height={20}
              />
              Get Poppo
            </a>
            <a
              href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=poppo"
              aria-label="Get Vone App"
              className="bg-white text-black font-semibold hover:bg-transparent hover:text-white transition-all duration-300 px-4 lg:px-6 py-[6px] rounded-full border border-white flex items-center gap-2"
            >
              <Image
                src="/vone-images/poppo.png"
                alt="Vone App"
                width={20}
                height={20}
                className="w-5 lg:w-7 h-5 lg:h-7"
              />
              Create Agency
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] text-[#ff0000] text-center py-2 px-4 font-semibold text-sm lg:text-lg w-full border-b border-[#8e8e8e]">
        <p className="">
          DISCLAIMER: This is an independent talent agency website and is NOT
          the official Vone App platform.
        </p>
      </div>


      <section id="about" className="bg-gray-50 scroll-mt-16 pt-6">
        <div className="container mx-auto">
          <div className="text-center px-8 md:px-16">
            <h2 className="text-center text-3xl md:text-4xl lg:text-6xl font-extrabold md:mb-4 pt-8 pb-6 md:pt-12 md:pb-2">
              About US
            </h2>
            <p className="text-[1rem] leading-tight md:text-lg xl:text-[22px] mb-6 xl:w-[80%] mx-auto">
              Vone Application is designed for users to promote their talent at
              a global level. Potential users showcase their skills to the
              audience through live streaming, interacting with them, and
              building connections.
            </p>
            <p className="text-[1rem] leading-tight md:text-lg xl:text-2xl font-bold mb-6 text-[#2F0084] mx-auto lg:w-[60%] max-w-xl">
              The application provides the opportunity to convert your passion
              into a profitable career.
            </p>

            <p className="text-xl lg:text-2xl mb-6 mx-auto uppercase text-gray-700">
              Start vone app{" "}
              <span className="text-black font-bold">Today!</span>
            </p>

            <div className="flex items-center justify-center flex-wrap pb-24 xl:pb-36 2xl:pb-44">
              <button className="text-blue-700 border-2 border-blue-600 font-bold py-2 rounded-[45px] m-2 btn hover:text-white hover:bg-blue-600 transition-all duration-300">
                <a
                  href="https://static.vshowapi.com/inviteNew/share/?c=vone&link_id=370107&user_id=63534458&temp_type=1&sys_temp_id=3 "
                  className="py-2 px-6"
                >
                  DOWNLOAD
                </a>
              </button>
              <button className="text-blue-700 border-2 border-blue-600 btn font-bold py-2 rounded-[45px] m-2 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <a
                  href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=vone"
                  className="py-2 px-6"
                >
                  APPLY NOW
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="agency" className="bg-[#FBF3FF] scroll-mt-16">
        <div className="h-fit">
          <div className="mx-auto max-w-7xl pt-12 lg:pt-20 pb-16 lg:pb-32">
            <div className="flex flex-col md:flex-row items-center my-auto">
              <div className="flex-1 text-left text-black px-6 sm:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold mb-4 xl:pr-12">
                  How to Create Agency in Vone -{" "}
                  <span className="text-blue-800"> Become Vone Agent</span>
                  <div className="hidden md:block w-[75px] h-[5px] bg-blue-700 mt-8 rounded-full" />
                </h2>
                <ul className="text-left list-disc pl-2 text-[1rem] leading-tight md:text-lg">
                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      {" "}
                      <a
                        href="https://static.vshowapi.com/inviteNew/share/?c=vone&link_id=370107&user_id=63534458&temp_type=1&sys_temp_id=3 "
                        className="underline text-blue-700 font-semibold"
                      >
                        Download the Vone App
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>Register &amp; Sign-in using your preferred option</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>Copy Vone ID from your profile</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      Click on the{" "}
                      <a
                        href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=vone"
                        className="underline text-blue-700 font-semibold"
                      >
                        Agency Registration Link{" "}
                      </a>
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      Enter your Vone ID &amp; Click <strong>“Get”</strong>
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>Find the verification code in your App messages</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>Enter the Verification Code and Submit</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      Await agency approval (usually 10-15 minutes)
                    </span>
                  </li>
                </ul>
                <p className="m-2 md:mb-4 text-[1rem] leading-tight md:text-lg lg:text-xl">
                  {" "}
                  <strong>
                    Inform us on{" "}
                    <a
                      className="text-blue-600 underline"
                      href="https://api.whatsapp.com/send/?phone=918448877709&text&type=phone_number&app_absent=0"
                    >
                      WhatsApp at +918448877709
                    </a>{" "}
                    after completing the process.
                  </strong>
                </p>
                <button className="flex w-fit mt-4 ml-2 text-blue-600 font-semibold rounded-[50px] border-blue-600 border-2 bg-transparent items-center justify-center mb-2 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <a
                    href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=vone"
                    className="py-2 px-6 rounded-[50px]"
                  >
                    Become Vone Agent
                  </a>
                </button>
              </div>
              <div className="flex-1 m-3 md:mb-0">
                <Image
                  src="/vone-images/become-vone-agent.png"
                  alt="Create Agency in Vone Live"
                  loading="lazy"
                  className="pr-4 w-full m-auto rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="register text-white scroll-mt-20">
        <div className="w-[90%] max-w-6xl mx-auto pt-12 lg:pt-20 pb-16 lg:pb-32">
          <div>
            <h2
              className="text-3xl lg:text-5xl font-bold mb-4 lg:pb-12 text-center"
              style={{ lineHeight: 1.2 }}
            >
              {" "}
              Vone Host Registration
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center mx-auto gap-8 lg:gap-0">
            <div className="w-full lg:w-1/2">
              <p className="text-xl lg:text-2xl font-semibold">Method 1</p>
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Host Registration with Agent ID
              </h3>
              <ul className="list-decimal px-6 text-[1rem] leading-tight md:text-lg space-y-1 py-4">
                <li>
                  {" "}
                  <a
                    href="https://static.vshowapi.com/inviteNew/share/?c=vone&link_id=370107&user_id=63534458&temp_type=1&sys_temp_id=3 "
                    className="underline font-semibold"
                  >
                    Download the Vone App
                  </a>
                </li>
                <li>Install &amp; Register on Vone App</li>
                <li>
                  The host must click on <strong>‘My Agency’</strong> from the
                  profile options.
                </li>
                <li>
                  Enter Agent ID <strong>‘263506’</strong> &amp; Apply to join
                  the agency.
                </li>
              </ul>
              <Image
                src="/vone-images/Host-1.png"
                alt="Host Registration with Agent ID"
                className="w-full lg:w-[80%] mt-4"
                width={500}
                height={500}
              />
            </div>
            <div className="hidden lg:block w-px h-140 bg-white mx-16" />
            <div className="block lg:hidden h-px w-4/5 bg-white mx-auto" />
            <div className="w-full lg:w-1/2">
              <p className="text-xl lg:text-2xl font-semibold">Method 2</p>
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Become a Host through an Invitation
              </h3>
              <ul className="list-decimal px-6 text-[1rem] leading-tight md:text-lg space-y-1 py-4">
                <li>
                  {" "}
                  <a
                    href="https://static.vshowapi.com/inviteNew/share/?c=vone&link_id=370107&user_id=63534458&temp_type=1&sys_temp_id=3 "
                    className="underline font-semibold"
                  >
                    Download the Vone App
                  </a>
                </li>
                <li>Install &amp; Register on Vone App</li>
                <li>
                  Find the Vone ID &amp; Host Code <br />
                  (To check ID &amp; Host code, click on the ‘My Agency’ option
                  in the profile and check Method 2)
                </li>
                <li>
                  Send us your Vone ID &amp; Host Code on{" "}
                  <a
                    href="https://wa.me/8448877709"
                    className="underline font-semibold"
                  >
                    {" "}
                    WhatsApp at +918448877709
                  </a>
                </li>
              </ul>
              <Image
                src="/vone-images/Host-2.webp"
                alt="Become a Host through an Invitation"
                className="w-64 lg:w-64 mx-auto mt-4"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF3FF]">
        <div className="w-[90%] max-w-5xl mx-auto pt-12 lg:pt-20 pb-16 lg:pb-32">
          <h2
            className="text-3xl lg:text-5xl font-bold mb-4 text-center"
            style={{ lineHeight: 1.2 }}
          >
            {" "}
            Vone Host Earnings
          </h2>
          <p className="text-base lg:text-xl text-gray-700 text-center">
            Vone Host earns through the virtual gifts sent by the audience to
            appreciate their talent. The host gets a 70% share of the total
            received gifts and these gifts can be easily converted into real
            money.
          </p>
          <Image
            src="/vone-images/earning.png"
            alt="Vone Host Earnings"
            className="w-full mx-auto my-4 lg:my-8"
            width={800}
            height={500}
          />
          <ul className="px-2 text-base lg:text-lg space-y-1 w-fit mx-auto">
            <li className="flex lg:items-center gap-2">
              <span>
                <Image
                  src="/vone-images/arrow_right_icon.svg"
                  alt="arrow-right-icon"
                  className="w-5 min-w-5 h-5 mt-1 lg:mt-0"
                  width={20}
                  height={20}
                />
              </span>
              Example: If a host gets a gift worth 10000 coins, she will earn
              7,000 coins as a 70% share.
            </li>
            <li className="flex lg:items-center gap-2">
              <span>
                <Image
                  src="/vone-images/arrow_right_icon.svg"
                  alt="arrow-right-icon"
                  className="w-5 min-w-5 h-5 mt-1 lg:mt-0"
                  width={20}
                  height={20}
                />
              </span>
              Points Value: <strong>10000 Points = $1</strong>
            </li>
            <li className="flex lg:items-center gap-2">
              <span>
                <Image
                  src="/vone-images/arrow_right_icon.svg"
                  alt="arrow-right-icon"
                  className="w-5 min-w-5 h-5 mt-1 lg:mt-0"
                  width={20}
                  height={20}
                />
              </span>
              Make sure to check out the Task and Level-up section in your
              profile for additional earnings.
            </li>
          </ul>
          <div className="flex justify-center mt-2">
            <button className="flex w-fit mt-4 text-blue-600 font-semibold rounded-[50px] border-blue-600 border-2 bg-transparent items-center justify-center mb-2 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <a
                href="https://static.vshowapi.com/inviteNew/share/?c=vone&link_id=370107&user_id=63534458&temp_type=1&sys_temp_id=3 "
                className="py-2 px-6 rounded-[50px]"
              >
                Become Vone Host
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="w-full mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/vone-images/live.webp"
                  alt="Go Live"
                  loading="lazy"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
                  width={300}
                  height={500}
                />
                <div className="text-center mt-4">
                  <h3 className="text-2xl lg:text-3xl text-blue-800 font-bold mb-2">
                    Go Live
                  </h3>
                  <p className="text-[#11524c] text-lg">
                    Start Streaming <br /> to Explore!
                  </p>
                </div>
              </div>

              <div className="block md:hidden w-4/5 h-px bg-gray-300 my-4" />
              <div className="hidden lg:block w-px h-96 bg-gray-300 my-4" />

              <div className="flex flex-col items-center">
                <Image
                  src="/vone-images/pk.webp"
                  alt="Passion PK"
                  loading="lazy"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-full lg:h-full object-contain"
                  width={300}
                  height={500}
                />
                <div className="text-center mt-4">
                  <h3 className="text-2xl lg:text-3xl text-blue-800 font-bold mb-2">
                    Passion PK
                  </h3>
                  <p className="text-[#11524c] text-lg">
                    Accept Challenges <br /> and Earn!
                  </p>
                </div>
              </div>

              <div className="block md:hidden w-4/5 h-px bg-gray-300 my-4" />
              <div className="hidden lg:block w-px h-96 bg-gray-300 my-4" />

              <div className="flex flex-col items-center">
                <Image
                  src="/vone-images/party.webp"
                  alt="Party Social/Party Room"
                  loading="lazy"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
                  width={300}
                  height={500}
                />
                <div className="text-center mt-4">
                  <h3 className="text-2xl lg:text-3xl text-blue-800 font-bold mb-2">
                    Party Social
                  </h3>
                  <p className="text-[#11524c] text-lg">
                    Amazing Group <br /> Interactions!
                  </p>
                </div>
              </div>

              <div className="block md:hidden w-4/5 h-px bg-gray-300 my-4" />
              <div className="hidden lg:block w-px h-96 bg-gray-300 my-4" />

              <div className="flex flex-col items-center">
                <Image
                  src="/vone-images/beauty.webp"
                  alt="Beauty Live"
                  loading="lazy"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-full lg:h-full object-contain"
                  width={300}
                  height={500}
                />
                <div className="text-center mt-4">
                  <h3 className="text-2xl lg:text-3xl text-blue-800 font-bold mb-2">
                    Beauty Live
                  </h3>
                  <p className="text-[#11524c] text-lg">
                    Highlighting <br /> Glam Gifts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7]">
        <div className="w-[90%] max-w-5xl mx-auto pt-12 lg:pt-20 pb-16 lg:pb-32">
          <h2
            className="text-3xl lg:text-5xl font-bold mb-4 text-center"
            style={{ lineHeight: 1.2 }}
          >
            {" "}
            Vone Agency <br /> Commission Structure
          </h2>
          <Image
            src="/vone-images/Vone-commission table.svg"
            alt="Vone Agency Commission Structure"
            className="w-full mx-auto my-6 lg:my-8 max-w-4xl"
            width={1000}
            height={500}
          />
          <ul className="px-2 text-base lg:text-lg space-y-1 max-w-3xl mx-auto">
            <li className="flex lg:items-center  gap-2">
              <span>
                <Image
                  src="/vone-images/arrow_right_icon.svg"
                  alt="arrow-right-icon"
                  className="w-5 min-w-5 h-5 mt-1 lg:mt-0"
                  width={20}
                  height={20}
                />
              </span>
              The conversion value is 10000 Points = $1.
            </li>
            <li className="flex lg:items-center gap-2">
              <span>
                <Image
                  src="/vone-images/arrow_right_icon.svg"
                  alt="arrow-right-icon"
                  className="w-5 min-w-5 h-5 mt-1 lg:mt-0"
                  width={20}
                  height={20}
                />
              </span>
              The last 30 days&apos; commission is calculated based on this
              formula:
            </li>
            <li className="font-bold pl-8">
              Hosts&apos; earnings * commission rate + (agent&apos;s commission
              rate - sub agent&apos;s commission rate) * subagent&apos;s
              earnings.
            </li>
            <li className="flex lg:items-center gap-2">
              <span>
                <Image
                  src="/vone-images/arrow_right_icon.svg"
                  alt="arrow-right-icon"
                  className="w-5 min-w-5 h-5 mt-1 lg:mt-0"
                  width={20}
                  height={20}
                />
              </span>
              The monthly commission rate varies between 4% to 20%.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-[90%] max-w-5xl mx-auto pt-12 lg:pt-20 pb-16 lg:pb-32">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 leading-[1.20] lg:leading-[1.1]">
            {" "}
            Invite Host and Agents <br /> Under Your Agency
          </h2>
          <div className="flex flex-col gap-6 lg:gap-12 mt-8 lg:mt-12">
            <div className="max-w-5xl mx-auto bg-[#FBF3FF] rounded-3xl p-4 lg:p-8 border border-gray-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-left">
                1. Follow the below steps to invite a Vone host
              </h3>
              <ul className="list-disc px-6 text-[1rem] leading-tight md:text-lg space-y-1 py-4">
                <li>
                  Open the agency account, Click on the <strong>Profile</strong>{" "}
                  section &gt;&gt; <strong>Agent</strong>.
                </li>
                <li>
                  The agency will click <strong>“Add Host”</strong> in the
                  profile section.
                </li>
                <li>
                  Enter the User ID and Host Code and click{" "}
                  <strong>“Send Invitation”</strong>.
                </li>
                <li>
                  The host will receive the invitation message in-app messages.
                </li>
              </ul>
              <Image
                src="/vone-images/under-agency-1.png"
                alt="Invite Host"
                className="w-full mx-auto my-4 lg:my-8"
                width={800}
                height={500}
              />
            </div>
            <div className="max-w-5xl mx-auto bg-[#FBF3FF] rounded-3xl p-4 lg:p-8 border border-gray-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-left">
                2. Follow the below steps to invite Vone agents
              </h3>
              <ul className="list-disc px-6 text-[1rem] leading-tight md:text-lg space-y-1 py-4">
                <li>
                  Open the agency’s account, Go to{" "}
                  <strong>My Profile&gt;&gt; Agent&gt;&gt;Manage&gt;&gt;Invite Agent.</strong>
                </li>
                <li>
                  Click <strong>“Copy”</strong> on the provided invitation link
                  and share it with the agent.
                </li>
                <li>
                  The agent will open the shared link, enter the Vone ID, and
                  click <strong>“Get”</strong> for the verification code.
                </li>
                <li>
                  Copy the verification code from the Vone app message and{" "}
                  <strong>“Submit”</strong>.
                </li>
              </ul>
              <Image
                src="/vone-images/under-agency-2.webp"
                alt="Invite Agents"
                className="w-full mx-auto my-4 lg:my-8"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="coin-trading-gradient">
        <div className="w-[90%] max-w-7xl mx-auto pt-12 lg:pt-20 pb-16 lg:pb-32 text-white">
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
              Vone Live Coin Trading
            </h2>
            <p className="text-center text-base lg:text-xl">
              Coin Trading allows agents to increase their revenue. An agency
              purchases coins directly through the platform and sells them to
              users at a marginal profit.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-4 lg:mt-16">
            <div className="mt-4 lg:mt-0">
              <Image
                src="/vone-images/coin-trading.webp"
                alt="Coin Trading"
                className="w-full aspect-auto object-contain"
                width={800}
                height={600}
              />
            </div>
            <div className="my-auto">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">
                Requirements for Vone Coin Seller
              </h3>
              <p className="text-base lg:text-lg">
                Every Vone Agency can start coin selling in the Vone App. The
                agency needs to follow the below requirements to become a Vone
                Coin Seller
              </p>
              <ul className="list-disc px-6 text-[1rem] leading-tight md:text-lg space-y-1 py-4">
                <li>
                  A minimum of 5 active hosts with maintaining 6 hours of weekly
                  live-streaming.
                </li>
                <li>
                  Recharge or exchange coins of $2000 in one transaction and
                  store them in the account.
                </li>
                <div className="flex justify-center items-center">
                  <hr className="gradient-hr w-32" />
                  <span className="px-4 font-semibold">OR</span>
                  <hr className="reverse-gradient-hr w-32" />
                </div>
                <li>
                  Recharge or exchange coins of $6000 in one transaction and
                  store them in the account.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-base lg:text-2xl mt-4 lg:mt-16 font-semibold underline">
            <a href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=vone">
              Register as Vone Agency to become a Voin Coin Seller
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-[90%] max-w-5xl mx-auto pt-12 lg:pt-20 pb-16 lg:pb-32">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 leading-[1.20] lg:leading-[1.1]">
            {" "}
            Vone App <br /> Withdrawal Process
          </h2>
          <div className="flex flex-col gap-6 lg:gap-12 mt-8 lg:mt-12">
            <div className="max-w-5xl mx-auto bg-[#FBF3FF] rounded-3xl p-4 lg:p-8 border border-gray-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-left">
                How to withdraw money
              </h3>
              <ul className="list-disc px-6 text-[1rem] leading-tight md:text-lg space-y-1 py-4">
                <li>
                  Open the agency account and Click on{" "}
                  <strong>“Points”</strong>.
                </li>
                <li>
                  Click on <strong>“Withdraw Now”</strong> and select your
                  preferred method and country.
                </li>
                <li>
                  Enter your Security password to withdraw the money.
                </li>
              </ul>
              <Image
                src="/vone-images/withdrawal.webp"
                alt="Withdrawal Process"
                className="w-full mx-auto my-4 lg:my-8"
                width={800}
                height={500}
              />
            </div>
            <div className="max-w-5xl mx-auto bg-[#FBF3FF] rounded-3xl p-4 lg:p-8 border border-gray-300">
              <h3 className="text-2xl lg:text-3xl font-semibold text-left">
                Rules to Remember
              </h3>
              <ul className="list-disc px-6 text-[1rem] leading-tight md:text-lg space-y-1 py-4">
                <li>
                  <strong>10,000 Points = $1</strong>
                </li>
                <li>
                  The minimum amount for the withdrawal is $10 or in the
                  multiple of 10.
                </li>
                <li>
                  The balance amount will be stored and can be withdrawn later.
                </li>
                <li>
                  Every payment method will have a service charge, choose as per
                  your preference.
                </li>
                <li>
                  The most used methods are E-pay, Paypal, Payoneer, bank
                  transfer, etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white pt-12 lg:pt-24 pb-16 benefits">
        <div className="flex flex-col lg:flex-row justify-center items-center w-[90%] lg:max-w-screen-2xl mx-auto lg:gap-12">
          <div className="lg:w-2/5 square right">
            <h2 className="text-3xl lg:text-6xl font-extrabold mb-4 lg:py-12 text-center lg:text-left">
              Benefits of Vone Live Agency
            </h2>
          </div>
          <Image
            src="/vone-images/Benefits-Line.svg"
            alt="Line"
            className="h-80 hidden w-full lg:flex lg:w-8"
            width={1000}
            height={500}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mt-4 lg:mt-0">
            <div className="grid-item">
              <div className="text">
                <h3 className="text-xl sm:text-3xl font-bold">Get Commission</h3>
                <p className="text-[1rem] sm:text-[1.25rem] lg:pr-8">
                  Earn income based on the total earnings of the streamers and
                  agents and get a commission b/w 4% to 20%.
                </p>
              </div>
            </div>

            <div className="grid-item">
              <div className="text">
                <h3 className="text-xl sm:text-3xl font-bold">Hire Globally</h3>
                <p className="text-[1rem] sm:text-[1.25rem] lg:pr-8">
                  {" "}
                  Onboard the talented streamers and agents to join the Vone App
                  globally.
                </p>
              </div>
            </div>

            <div className="grid-item">
              <div className="text">
                <h3 className="text-xl sm:text-3xl font-bold">Self Withdrawal</h3>
                <p className="text-[1rem] sm:text-[1.25rem] lg:pr-8">
                  An easy two-step self-withdrawal process for all agents and
                  hosts.
                </p>
              </div>
            </div>

            <div className="grid-item">
              <div className="text">
                <h3 className="text-xl sm:text-3xl font-bold">24*7 Support </h3>
                <p className="text-[1rem] sm:text-[1.25rem] lg:pr-8">
                  Have any queries? Feel free to contact our team at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white">
          <div className="w-[90%] mx-auto max-w-7xl pt-8 lg:pt-20 pb-4 lg:pb-32">
            <div className="flex flex-col md:flex-row items-center my-auto">
              <div className="flex-1 m-3 md:mb-0">
                <Image
                  src="/vone-images/rules.webp"
                  alt="Vone Rules & Regulations"
                  loading="lazy"
                  className="w-80 lg:w-4/5 mx-auto aspect-square object-contain"
                  width={800}
                  height={500}
                />
              </div>
              <div className="flex-1 text-left text-black">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-6xl font-extrabold mb-4 max-w-md">
                  Vone Rules &amp; Regulations
                  <div className="hidden md:block w-[75px] h-[5px] bg-blue-700 mt-8 rounded-full" />
                </h2>
                <ul className="text-left list-disc pl-2 text-[1rem] leading-tight md:text-xl space-y-1">
                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-1 lg:mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                        />
                    </span>
                    <span>Third-party promotion is not allowed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-1 lg:mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      A host can join only one agency at a time, any new ID
                      created will be banned.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-1 lg:mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      Agents are not advisable to hire hosts who are already
                      working with other Vone agents. If found, the account will
                      be permanently banned.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-1 lg:mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      The agency must keep a professional relationship with its
                      team members.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span>
                      <Image
                        src="/vone-images/tic.svg"
                        className="max-h-5 max-w-5 mt-1 lg:mt-2"
                        alt="tic-image"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>
                      Violation of rules will lead to salary deduction or
                      account ban.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Transparency &amp; Platform Independence
          </h3>
          <p className="text-sm text-gray-600">
            Connect with apps is an independent talent management company and is
            not owned by or affiliated with the Vone App platform. Vone App is
            operated by its own provider. We offer coaching, recruitment
            guidance, and compliance support only; we do not guarantee
            approvals, earnings, rankings, or payouts—these are controlled
            solely by the platform and depend on performance and policy
            compliance.<br /><br />
            Address: Omaxe Green Meadow City Bhiwadi, Rajasthan 301019
            <br />          </p>
            Contact: <a href="https://api.whatsapp.com/send/?phone=8448877709&text&type=phone_number&app_absent=0">+91 8448877709</a>
            <br />
            Email: <a href="mailto:support@connectwithapps.com">support@connectwithapps.com</a>

        </div>
      </section>
      {/* <Footer /> */}

      <footer className="bg-white text-black w-full">
        <div className="w-[90%] mx-auto max-w-7xl pt-4 lg:pt-6 pb-4 lg:pb-6">
          <div className="flex flex-col md:flex-row items-center my-auto justify-between">
            <div className="">
              <Image src="/logo.png" alt="Connect With Apps" className="w-42 lg:w-52" width={200} height={200} />
            </div>
            <div className="text-left text-black flex flex-col md:flex-row gap-3">
              <Link href="/privacy-policy" className="text-sm text-gray-600">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-sm text-gray-600">Terms of Service</Link>
              <Link href="/contact-us" className="text-sm text-gray-600">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ConnectWithVone;


