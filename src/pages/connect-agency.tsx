import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ConnectAgency() {
  return (
    <>
      <Head>
        <title>Poppo Live Agency Registration | Connect Agency</title>
        <meta
          name="description"
          content="Become a Poppo Live Agency Partner. Register your agency and unlock your potential in the live streaming entertainment industry. Start earning competitive commissions today."
        />
        <meta
          name="keywords"
          content="Poppo Live Agency, Agency Registration, Live Streaming Agency, Poppo Agency Partner"
        />
        <meta property="og:url" content="https://connectwithapps.com/connectagency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Poppo Live Agency Registration | Connect Agency"
        />
        <meta property="og:site_name" content="Connect Agency" />
        <meta
          property="og:description"
          content="Become a Poppo Live Agency Partner. Register your agency and unlock your potential in the live streaming entertainment industry."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://connectwithapps.com/connectagency" />
      </Head>

      <Header />

      <main>
        <div
          className="mx-auto min-h-[90vh] flex items-center justify-center bg-cover bg-center pt-24 lg:pt-32"
          style={{
            backgroundImage: "url('/connect-agency/new-img/benefits-bg.webp')",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-center h-auto md:px-8 lg:px-8 gap-4 lg:gap-0 w-full lg:w-[85%] max-w-6xl mx-auto pt-16 pb-16 px-4 md:pt-20">
            <Image
              src="/connect-agency/logo-white.svg"
              alt="Connect Agency Logo"
              width={224}
              height={224}
              className="w-40 md:w-44 lg:w-48 2xl:w-56 lg:pt-0 md:pb-8 mx-auto lg:ml-0 block lg:hidden"
            />

            {/* Image Section */}
            <div className="mb-0 xl:px-16 xl:mt-0 mx-auto lg:w-2/5 pl-8 lg:pl-0">
              <Image
                src="/connect-agency/banner-main.webp"
                alt="Connect Agency Banner"
                width={320}
                height={320}
                className="w-full h-full max-w-48 lg:max-w-80 2xl:max-w-80"
              />
            </div>

            {/* Text Section */}
            <div className="lg:text-left text-center text-white flex flex-col items-start justify-center lg:w-3/5">
              <Image
                src="/connect-agency/logo-white.svg"
                alt="Connect Agency Logo"
                width={224}
                height={224}
                className="w-36 md:w-44 lg:w-48 2xl:w-56 lg:pt-0 md:pb-8 mx-auto lg:ml-0 hidden lg:block"
              />
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-[40px] font-bold mb-4 lg:leading-[1.2]"
                style={{ minHeight: "2rem" }}
              >
                Become a Poppo Live Agency Partner: Unlock Your Potential
              </h1>

              <p
                className="mb-2 md:mb-4 text-[1rem] leading-[1.4] md:text-md lg:text-[18px] 2xl:text-[20px]"
                style={{ minHeight: "1.5rem" }}
              >
                Welcome to the official Poppo Live Agency Registration Portal.
                We invite driven individuals and businesses to partner with us
                and become a part of the vibrant world of live streaming
                entertainment.
              </p>

              <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 mx-auto lg:mx-0">
                <a
                  href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=poppo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-linear-to-r from-[#E514F0] to-[#000899] hover:bg-white text-white mt-4 lg:mt-2 border-2 border-white px-6 py-2 rounded-full text-base lg:text-lg font-semibold mx-auto lg:mx-0 transition-all duration-300"
                >
                  Agency Link
                </a>
                <a
                  href="https://static.vshowapi.com/inviteNew/share?c=poppo&link_id=8096839&user_id=63534458&temp_type=1&sys_temp_id=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-linear-to-r from-[#E514F0] to-[#000899] hover:bg-white text-white mt-4 lg:mt-2 border-2 border-white px-6 py-2 rounded-full text-base lg:text-lg font-semibold mx-auto lg:mx-0 transition-all duration-300"
                >
                  Download Poppo
                </a>
              </div>
            </div>
          </div>
        </div>

        <section
          className="pt-8 pb-10 md:py-12 scroll-mt-12"
          style={{
            background:
              "linear-gradient(180deg, #9105f3 0%, #d648ce 60%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-4 px-4">
              For Indian Users Vone App is Available For Android & iOS
            </h2>

            <div className="flex flex-row gap-2 items-center w-fit mx-auto mt-4 md:mt-0">
              <button className="mx-auto flex text-white font-medium rounded-full bg-transparent border items-center justify-center transition-all duration-300 hover:bg-white hover:text-black">
                <a
                  href="https://h5.liaoke520.com/inviteNew/share/?c=vone&link_id=1955242&user_id=63534458&temp_type=1&sys_temp_id=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-6 min-w-6 md:h-6 md:min-w-6 pl-[2px]"
                  >
                    <path
                      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </button>
              <button className="mx-auto flex text-white font-medium rounded-full bg-transparent border items-center justify-center transition-all duration-300 hover:bg-white hover:text-black">
                <a
                  href="https://h5.liaoke520.com/inviteNew/share/?c=vone&link_id=1955242&user_id=63534458&temp_type=1&sys_temp_id=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center ml-[2px] p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-6 min-w-6 md:h-6"
                  >
                    <path
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </button>
              <button className="mx-auto flex text-white font-medium rounded-full bg-transparent border items-center justify-center transition-all duration-300 hover:bg-white hover:text-black">
                <a
                  href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=poppo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center py-2 px-4 sm:px-6"
                >
                  <p className="text-[1rem] md:text-[1.25rem] leading-tight">
                    Agency Link
                  </p>
                </a>
              </button>
            </div>
          </div>
        </section>

        <section id="registration" className="scroll-mt-16 pt-12 pb-12 px-4">
          <div className="h-fit bg-white">
            <div className="mx-auto max-w-[1250px]">
              <div className="flex flex-col md:flex-row items-center justify-center my-auto">
                <div className="sm:px-8 md:py-[5%] flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center mb-4 lg:mb-6 max-w-4xl gap-2 lg:gap-4">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-black">
                      Poppo Live Agency Registration Process
                    </h2>
                    <p className="text-base lg:text-xl font-normal text-center text-[#2f2f2f]">
                      Start your Poppo Agency journey by submitting an easy
                      registration form. We ensure a quick agency application
                      process and avail maximum benefits. Register your agency
                      today.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Image
                      src="/connect-agency/agency-reg2.webp"
                      alt="Download the App and Submit your application to become an Agency"
                      width={2000}
                      height={800}
                      className="w-full my-4 lg:my-8"
                    />

                    <ol className="text-left list-decimal px-6 space-y-1">
                      <li className="text-[1rem] leading-tight md:text-lg text-left">
                        <a
                          href="https://static.vshowapi.com/inviteNew/share?c=poppo&link_id=8096839&user_id=63534458&temp_type=1&sys_temp_id=2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-700"
                        >
                          Download the Poppo Live App
                        </a>{" "}
                        and Create an Account.
                      </li>
                      <li className="text-[1rem] leading-tight md:text-lg text-left">
                        Copy Your Numeric <span className="font-semibold">Poppo ID</span> from
                        the App Profile Page.
                      </li>
                      <li className="text-[1rem] leading-tight md:text-lg text-left">
                        Open the{" "}
                        <a
                          href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=poppo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-700"
                        >
                          Agency Registration Link
                        </a>{" "}
                        in a Browser
                      </li>
                      <li className="text-[1rem] leading-tight md:text-lg text-left">
                        Enter/Paste <span className="font-semibold">Poppo ID</span> and Click
                        the <span className="font-semibold">&apos;Get&apos;</span> Button
                      </li>
                      <li className="text-[1rem] leading-tight md:text-lg text-left">
                        Enter the <span className="font-semibold">Verification Code</span>{" "}
                        Received in Your <span className="font-semibold">Poppo App Messages.</span>
                      </li>
                      <li className="text-[1rem] leading-tight md:text-lg text-left">
                        Click the <span className="font-semibold">Submit button</span> to
                        complete the Poppo Agency Registration Application
                      </li>
                      <li className="text-[1rem] leading-tight md:text-lg text-left">
                        Inform <span className="font-semibold">Connect Agency for Priority Process.</span> WhatsApp us your{" "}
                        <span className="font-semibold">Poppo ID</span> for immediate approval
                        on{" "}
                        <a
                          className="text-blue-700 underline font-semibold"
                          href="https://api.whatsapp.com/send/?phone=917065384660&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +917065384660.
                        </a>{" "}
                        You can refer to the images above for a better
                        understanding of the registration process.
                      </li>
                    </ol>
                    <a
                      href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=poppo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit md:mt-4 bg-linear-to-r from-[#E514F0] to-[#000899] text-white px-4 lg:px-8 py-2 rounded-full text-base lg:text-lg font-semibold text-center transition-all duration-300"
                    >
                      Register Your Poppo Live Agency Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-linear-to-r from-[#DDCCFF] to-[#FFEDF9] py-14 px-4">
          <h2 className="text-2xl lg:text-5xl text-center font-bold text-black mb-2 lg:mb-4">
            Why Partner with Poppo Live?
          </h2>
          <div className="container mx-auto py-8 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Financial Growth & Lucrative Commissions",
                  description:
                    "Earn competitive commissions based on the performance of your recruited hosts. As your agency grows and your hosts thrive, so does your income potential",
                },
                {
                  title: "Access to a Global Platform",
                  description:
                    "Poppo Live connects talented individuals with millions of users worldwide, providing immense reach for your hosts.",
                },
                {
                  title: "Comprehensive Support & Resources",
                  description:
                    "Gain access to agency-specific tools, training materials, and dedicated support from the Poppo Live team to help you manage your hosts effectively",
                },
                {
                  title: "Empower Talent",
                  description:
                    "Make a real impact by discovering and mentoring aspiring live streamers, helping them develop their skills and achieve their broadcasting goals.",
                },
                {
                  title: "Flexible & Scalable Business Model",
                  description:
                    "Operate your agency with flexibility, allowing you to scale your operations as you grow your network of hosts.",
                },
                {
                  title: "Community & Networking",
                  description:
                    "Become part of a supportive community of agencies, sharing best practices and insights within the live streaming industry.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="border-2 rounded-3xl pt-6 pb-4 px-4 lg:pt-8 lg:pb-4 lg:px-4 bg-white relative"
                  style={{ borderColor: "#E514F0" }}
                >
                  <div
                    className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-10 h-10 bg-linear-to-r from-[#E514F0] to-[#000899] rounded-full text-white text-center leading-10 text-lg font-bold"
                  >
                    {index + 1}
                  </div>
                  <div className="text-black text-center">
                    <h3 className="text-lg sm:text-xl leading-tight font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[1rem] sm:text-[1.15rem] text-black/50 leading-tight">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-black text-base font-semibold lg:text-xl leading-tight mt-4 lg:mt-8 mb-4">
            Want to know more about{" "}
            <Link href="/host-registration" className="text-blue-600 underline">
              Poppo Host
            </Link>{" "}
            or{" "}
            <Link
              href="/become-poppo-coin-seller"
              className="text-blue-600 underline"
            >
              Poppo Coin Seller
            </Link>{" "}
            ?
          </p>
        </section>

        <section className="bg-linear-to-l from-[#1e29f69f] to-[#FF007B] py-12 px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 lg:mb-8 text-center">
            Your Poppo Live Agency Commission Structure
          </h2>
          <div className="flex flex-col md:flex-row gap-4 lg:gap-16 items-center justify-center">
            <Image
              src="/connect-agency/10/21/41.svg"
              alt="Agency Commission Structure"
              width={600}
              height={400}
              className="w-full h-full max-w-lg"
            />
            <ul className="list-disc pl-5 space-y-1 text-white">
              <li style={{color: "#ffffff"}}>
                <strong>Level D:</strong> 4% for revenue under 2 Million Points
              </li>
              <li style={{color: "#ffffff"}}>
                <strong>Level C:</strong> 8% for 2M–10M Points
              </li>
              <li style={{color: "#ffffff"}}>
                <strong>Level B:</strong> 12% for 10M–50M Points
              </li>
              <li style={{color: "#ffffff"}}>
                <strong>Level A:</strong> 16% for 50M–150M Points
              </li>
              <li style={{color: "#ffffff"}}>
                <strong>Level S:</strong> 20% for over 150M Points
              </li>
            </ul>
          </div>
          <p className="lg:mt-6 text-white text-center text-base lg:text-lg leading-tight mt-4 mb-4">
            Additional bonuses, sub-agent commissions, and performance incentives
            apply.
          </p>
        </section>

        <section className="bg-white py-10 lg:py-20 flex flex-col lg:flex-row gap-4 lg:gap-16 items-center justify-center px-4">
          <Image
            src="/connect-agency/rules.png"
            alt="Agency Rules & Guidelines"
            width={384}
            height={384}
            className="w-full h-full lg:max-w-96 max-w-72"
          />
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-black lg:mb-4 mb-2">
              Agency Rules & Guidelines
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-black/90">
              <li className="text-base lg:text-lg leading-[1.35]">
                Hosts must be 18+ and follow platform rules.
              </li>
              <li className="text-base lg:text-lg leading-[1.35]">
                Content must not include nudity, hate speech, illegal acts, or
                misleading info.
              </li>
              <li className="text-base lg:text-lg leading-[1.35]">
                Agencies must monitor and ensure compliance of their hosts.
              </li>
              <li className="text-base lg:text-lg leading-[1.35]">
                Maintain a minimum number of active hosts (e.g., 10 active
                streamers).
              </li>
              <li className="text-base lg:text-lg leading-[1.35]">
                No poaching of hosts from other agencies or promoting
                competitors.
              </li>
              <li className="text-base lg:text-lg leading-[1.35]">
                Secure your agency account credentials.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-linear-to-l from-[#ffedf957] to-[#DDCCFF] rounded-3xl lg:rounded-full mt-8 mb-16 pt-6 pb-16 lg:px-12 lg:pt-8 lg:pb-14 w-[90%] lg:w-full max-w-5xl mx-auto px-4 border-2 border-[#010899] relative">
          <h2
            className="text-2xl lg:text-4xl font-bold text-black max-w-2xl mx-auto mb-8 lg:mb-8 text-center bg-white rounded-full px-4 py-2"
            style={{ boxShadow: "0 4px 0px #880FCD" }}
          >
            How to Invite Hosts to Your Agency
          </h2>
          <p className="text-center text-black text-base lg:text-xl">
            Share your Agency Code:{" "}
            <span className="font-bold text-black text-lg">263506</span>
          </p>
          <p className="text-center text-black text-base lg:text-xl border-y border-black my-2 py-2 lg:w-max mx-auto">
            Ask hosts to register and enter your Agent ID or contact via
            WhatsApp: +917065384660
          </p>
          <p className="text-center text-black text-base lg:text-xl">
            Ensure proper onboarding and compliance support for your hosts.
          </p>
          <Link
            href="/host-registration"
            className="absolute bottom-[-30px] lg:bottom-[-20px] left-1/2 -translate-x-1/2 lg:w-fit w-[90%] mx-auto bg-linear-to-r from-[#E514F0] to-[#000899] text-white px-6 py-2 rounded-full text-base lg:text-lg font-semibold text-center transition-all duration-300"
          >
            Want to become a Host on Poppo Live
          </Link>
        </section>

        <section className="bg-white mt-24 lg:mt-24 max-w-4xl w-[90%] mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-6 lg:mb-8 text-center">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-1 divide-y divide-gray-200">
            <details className="py-2">
              <summary className="cursor-pointer font-semibold text-black text-lg">
                Is there a registration fee?
              </summary>
              <p className="mt-2 text-gray-700">
                No, registration is free and earnings are commission-based.
              </p>
            </details>
            <details className="py-2">
              <summary className="cursor-pointer font-semibold text-black text-lg">
                What support is provided?
              </summary>
              <p className="mt-2 text-gray-700">
                Analytics, training, and dedicated agency support are available.
              </p>
            </details>
            <details className="py-2">
              <summary className="cursor-pointer font-semibold text-black text-lg">
                How often are commissions paid?
              </summary>
              <p className="mt-2 text-gray-700">
                Typically weekly or bi-weekly, depending on your agreement.
              </p>
            </details>
            <details className="py-2">
              <summary className="cursor-pointer font-semibold text-black text-lg">
                What are the requirements for hosts?
              </summary>
              <p className="mt-2 text-gray-700">
                They must be 18+, engaging, and follow Poppo Live&apos;s rules.
              </p>
            </details>
            <details className="py-2">
              <summary className="cursor-pointer font-semibold text-black text-lg">
                Can I recruit globally?
              </summary>
              <p className="mt-2 text-gray-700">
                Yes, with some regional restrictions outlined in your agreement.
              </p>
            </details>
            <details className="py-2">
              <summary className="cursor-pointer font-semibold text-black text-lg">
                What happens if a host violates rules?
              </summary>
              <p className="mt-2 text-gray-700">
                The agency is responsible and may face penalties.
              </p>
            </details>
          </div>
        </section>

        <section className="text-center pt-4 lg:pt-8 px-4">
          <a
            href="https://static.vshowapi.com/guild/agency_invite/register/?inviter_id=63534458&c=poppo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-linear-to-r from-[#E514F0] to-[#000899] hover:bg-white text-white px-6 py-2 rounded-full text-base lg:text-lg font-semibold transition-all duration-300"
          >
            Register Your Poppo Live Agency Now
          </a>
        </section>

        <section className="bg-white w-[90%] max-w-5xl mx-auto mt-6 rounded-2xl border border-gray-200 px-4 py-5 lg:px-6 lg:py-6 shadow-sm mb-6">
          <h3 className="text-lg lg:text-xl font-semibold text-black mb-2 text-center">
            About Connect Agency
          </h3>
          <p className="text-sm lg:text-base text-gray-800 text-center">
            <span className="font-semibold">Connect Agency</span> is an
            independent talent management company (not owned by or affiliated
            with Poppo Live). Poppo Live is operated by its own platform
            provider. We only offer recruitment guidance, onboarding assistance,
            and compliance support for prospective Poppo Live agents and hosts.
            We do not guarantee approvals, earnings, or placements—results
            depend on the platform&apos;s policies and individual performance.
          </p>
        </section>

        <footer className="w-[95%] mx-auto lg:px-16 py-6 border-t border-[#0000002d]">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-center justify-between">
            <Image
              src="/connect-agency/logo.svg"
              alt="Connect Agency Logo"
              width={192}
              height={192}
              className="w-48"
            />
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 items-center justify-between">
              <Link
                href="/contact-us"
                className="text-black hover:text-gray-600 transition-all duration-300 underline"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="text-black hover:text-gray-600 transition-all duration-300 underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-black hover:text-gray-600 transition-all duration-300 underline"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm leading-tight mt-4">
              © 2026 Connect Agency. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>

      {/* <Footer /> */}
    </>
  );
}
