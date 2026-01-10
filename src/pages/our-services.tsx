import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import TopBanner from "@/components/ui/TopBanner";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  details: string[];
  image: string;
}

interface WhyChooseUs {
  title: string;
  description: string;
}

interface FormValues {
  countryCode: string;
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  message?: string;
}

interface CountryCode {
  label: string;
  value: string;
}

interface CountryData {
  name: {
    common: string;
  };
  idd?: {
    root?: string;
    suffixes?: string[];
  };
}
export default function OurServices() {
  const [activeService, setActiveService] = useState<string>("Hiring Talent");
  const [formValues, setFormValues] = useState<FormValues>({
    countryCode: "+91", // Initialize with default country code
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ensure country code is set (use default +91 if not selected)
    const countryCode = formValues.countryCode || "+91";

    // Get IP address
    const ipAddress = await fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => data.ip);

    const fullNumber = countryCode + formValues.phone;

    // Prepare the form data
    const dataToSend = {
      name: formValues.name || "",
      email: formValues.email || "",
      phone: fullNumber || "",
      country: formValues.country || "",
      message: formValues.message || "",
      ip_address: ipAddress,
      page_url: window.location.href,
    };

    try {
      const response = await fetch(
        "https://webpanel.store/api/connect-formData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form successfully submitted:", result);
        alert("Form submitted successfully");
        setFormValues({ countryCode: "+91" }); // Reset form after successful submission
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const fetchCountryCode = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,idd"
    );
    const data = await response.json();
    const formatted = data
      .filter(
        (c: CountryData & { idd: { root: string; suffixes: string[] } }) =>
          c.idd?.root && c.idd?.suffixes?.length
      )
      .map(
        (c: CountryData & { idd: { root: string; suffixes: string[] } }) => ({
          label: c.name.common,
          value: `${c.idd.root}${c.idd.suffixes[0]}`,
        })
      )
      .sort((a: CountryCode, b: CountryCode) => a.label.localeCompare(b.label));
    console.log(formatted);
    setCountryCodes(formatted as CountryCode[]);
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  const services: Service[] = [
    {
      title: "Hiring Talent",
      details: [
        "Recruit Skilled Streamers",
        "Hire Globally",
        "Unlimited Income",
        "Flexible Work Timings",
      ],
      image: "/services-1.svg",
    },
    {
      title: "Recruit Agents",
      details: [
        "Invite Passionate Agents",
        "Team Management",
        "Provide Guidance",
        "Earn Commission",
      ],
      image: "/services-2.svg",
    },
    {
      title: "Manage Talent",
      details: [
        "One-on-one Guidance",
        "Customer Support Team",
        "Performance Feedback",
        "Increase Earning Potential",
      ],
      image: "/services-3.svg",
    },
  ];

  const whyChooseUs: WhyChooseUs[] = [
    {
      title: "Top Platform Access",
      description: "We provide direct entry to the world’s top live streaming platforms like Poppo, Chamet, and Niki Live.",
    },
    {
      title: "Zero Investment:",
      description: "No cost needed. We provide the live streaming services and guidance you need to start earning without any fees.",
    },
    {
      title: "Daily Payout",
      description: "Our experts teach you the methods to boost your engagement and maximize your daily income on various video calling apps.",
    },
    {
      title: "Global Networking",
      description: "Join a network of 6500+ partners. Whether you are a host or an agent, you’ll be part of our community and grow.",
    },
    {
      title: "Priority Support",
      description: "From registration to performance tips, our team is always available to help you succeed.",
    },
  ];
  return (
    <>
      <Header />
      <TopBanner title="Our Services" bgImage="bg-[url('/our-services.png')]" />
      <section className="bg-[#F8ECEE] pt-12 pb-12 lg:pt-20 lg:pb-20">
        <div className="w-[90%] max-w-6xl mx-auto bg-[#F8ECEE]">
          <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase mb-4 lg:mb-12">
            Creator Management Services
          </h2>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-8">
            <div className="w-full lg:w-auto min-h-full flex flex-col justify-between gap-2">
              {services.map((service, index) => (
                <h3
                  className={`text-xl lg:text-xl 2xl:text-2xl text-center py-2 lg:py-4 px-4 lg:px-8 2xl:px-20 rounded-full relative ${
                    service.title === activeService
                      ? "border border-[#9a9a9a] lg:border-0"
                      : "border border-[#9a9a9a]"
                  }`}
                  key={index}
                  onClick={() => setActiveService(service.title)}
                >
                  {service.title === activeService && (
                    <div className="hidden lg:block">
                      <span
                        className={`absolute top-0 left-0 w-120 rounded-full h-full ${
                          service.title === "Hiring Talent"
                            ? "bg-linear-to-b from-[#6372DC] to-[#5865c4]"
                            : service.title === "Recruit Agents"
                            ? "bg-linear-to-b from-[#515EB5] to-[#45509A]"
                            : "bg-linear-to-b from-[#40498D] to-[#363E78]"
                        }`}
                      ></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10 lg:z-10 transition-transform duration-300 ease-out group-hover:scale-x-125 origin-left absolute top-1/2 -right-6 -translate-y-1/2 text-white"
                      >
                        <path
                          d="M4 12H20M20 12L16 8M20 12L16 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  <span
                    className={`relative z-10 ${
                      service.title === activeService
                        ? "text-[#000000] lg:text-white font-semibold"
                        : "text-[#000000] font-medium"
                    }`}
                  >
                    {service.title}
                  </span>
                </h3>
              ))}
            </div>

            <div className="w-full lg:w-auto min-h-full flex items-start justify-start bg-linear-to-b from-[#6372DC] to-[#353D76] rounded-3xl py-4 lg:py-8 px-8 lg:px-16 lg:relative lg:z-40">
              {services.map(
                (service, index) =>
                  service.title === activeService && (
                    <div
                      key={index}
                      className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8 w-full"
                    >
                      <Image
                        src="services-1.svg"
                        alt={service.title}
                        width={500}
                        height={500}
                        className="w-44 lg:w-40 mx-auto lg:mx-0"
                      />
                      <div className="flex flex-col items-start text-white text-base lg:text-lg lg:min-w-[350px]">
                        {service.details.map((detail, index) => (
                          <p
                            key={index}
                            className="flex items-center gap-2 border-b border-white py-2 w-full last:border-b-0"
                          >
                            <span>
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
                            </span>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/app-promotion-bg.webp')] bg-cover bg-center pt-12 pb-12 lg:pt-20 lg:pb-20 text-white">
        <div className="w-[90%] max-w-240 mx-auto flex flex-col md:flex-row items-start justify-center gap-4 lg:gap-8">
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-left uppercase lg:min-w-[420px]">
            Live Streaming <br /> App Promotions
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-4">
            <div className="bg-[#d9d9d925] rounded-[0px_24px_24px_24px] py-2 px-4 lg:py-2.5 lg:px-6 w-fit">
              Brand Awareness
            </div>
            <div className="bg-[#d9d9d925] rounded-[0px_24px_24px_24px] py-2 px-4 lg:py-2.5 lg:px-6 w-fit">
              Promotional Campaigns
            </div>
            <div className="bg-[#d9d9d925] rounded-[0px_24px_24px_24px] py-2 px-4 lg:py-2.5 lg:px-6 w-fit">
              Increase Userbase
            </div>
            <div className="bg-[#d9d9d925] rounded-[0px_24px_24px_24px] py-2 px-4 lg:py-2.5 lg:px-6 w-fit">
              Gain more Agents{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] pt-12 pb-12 lg:pt-20 lg:pb-20">
        <div className="w-[90%] max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-center uppercase lg:min-w-[420px]">
            Why Choose Us?
          </h2>

          <div className="pt-8 pb-6">
            {whyChooseUs.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg lg:text-2xl font-semibold text-left uppercase">{item.title}</h3>
                <p className="text-base lg:text-lg text-left text-[#363636]">{item.description}</p>

                {index !== 4 && <hr className="w-full border-t border-[#DFDFDF] my-4" />}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#F8ECEE] pt-12 pb-12 lg:py-20">
        <p className="text-center text-2xl lg:text-4xl font-semibold max-w-4xl mx-auto px-4">
          One registration, unlimited access to the world&apos;s top streaming
          apps
        </p>

        <Button
          text="Apply Now"
          link="/contact-us"
          className="mx-auto mt-4 lg:mt-6"
          isArrow={true}
        />
      </section>

      <div className="my-12 lg:my-20 bg-linear-to-t from-[#F8ECEE] to-[#FEFEFC] border border-[#DFDFDF] rounded-3xl w-[90%] max-w-3xl mx-auto py-6">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Get In Touch With Us
        </h2>
        <p className="text-center text-base text-[#363636] my-2 max-w-xl mx-auto px-2">
          You can simply connect us through filling this form or drop your
          queries to the given mail. We will assist you shortly.
        </p>
        <div className="max-w-2xl mx-auto py-4">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
              <div className="flex flex-col gap-2 lg:gap-3 w-[90%] lg:w-1/2 mx-auto">
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formValues.name || ""}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="w-full py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#353D76] focus:border-transparent peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#353D76] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    Enter your name
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formValues.email || ""}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="w-full py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#353D76] focus:border-transparent peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#353D76] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    Enter your email
                  </label>
                </div>

                <div className="flex items-center relative">
                  {/* Custom Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <div
                      tabIndex={0}
                      onClick={() => setOpen(!open)}
                      onKeyDown={(e) => {
                        if (/^[a-zA-Z]$/.test(e.key) && open) {
                          const idx = countryCodes.findIndex((c) =>
                            c.label
                              .toLowerCase()
                              .startsWith(e.key.toLowerCase())
                          );
                          if (idx !== -1) {
                            const el = document.getElementById(
                              `country-option-${idx}`
                            );
                            el?.scrollIntoView({ block: "nearest" });
                          }
                        }
                      }}
                      className="w-20 py-2 px-3 border border-gray-300 bg-white rounded-l-full cursor-pointer flex items-center justify-between focus:ring-1 focus:ring-[#353D76]"
                    >
                      <span>{formValues.countryCode || "+91"}</span>
                      <svg
                        className="w-4 h-4 text-gray-500 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Dropdown List */}
                    {open && (
                      <div className="absolute left-0 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-40 max-h-80 overflow-y-auto">
                        {countryCodes.map((country, index) => (
                          <div
                            id={`country-option-${index}`}
                            key={index}
                            onClick={() => {
                              setFormValues({
                                ...formValues,
                                countryCode: country.value,
                              });
                              setOpen(false);
                            }}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {country.label} {country.value}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="relative flex-1">
                    <input
                      id="phone"
                      type="number"
                      name="phone"
                      value={formValues.phone || ""}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                      className="w-full py-2 px-2 rounded-r-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#353D76] focus:border-transparent peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#353D76] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Enter your number
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    id="country"
                    type="text"
                    name="country"
                    value={formValues.country || ""}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="w-full py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#353D76] focus:border-transparent peer"
                  />
                  <label
                    htmlFor="country"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#353D76] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    Enter your country
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 w-[90%] lg:w-1/2 mx-auto">
                <div className="relative grow">
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message || ""}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full min-h-40 lg:min-h-full border p-2 rounded-2xl border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#353D76] focus:border-transparent peer"
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#353D76] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    Your message
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn-hover text-white px-4 py-[0.42rem] transition-all duration-300 rounded-full focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <hr className="w-[95%] max-w-screen-2xl mx-auto border-t border-[#DFDFDF] lg:my-6" />

      <Footer />
    </>
  );
}
