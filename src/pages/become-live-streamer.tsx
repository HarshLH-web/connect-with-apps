import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TopBanner from "@/components/ui/TopBanner";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Step {
  title: string;
  description: string;
  image: string;
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
export default function BecomeLiveStreamer() {

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
    
      useEffect(() => {
        const fetchCountryCode = async () => {
          const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,idd"
          );
          const data: CountryData[] = await response.json();
          const formatted: CountryCode[] = data
            .filter(
              (
                c
              ): c is CountryData & { idd: { root: string; suffixes: string[] } } =>
                Boolean(c.idd?.root && c.idd?.suffixes?.length)
            )
            .map((c) => ({
              label: c.name.common,
              value: `${c.idd.root}${c.idd.suffixes[0]}`,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
          console.log(formatted);
          setCountryCodes(formatted);
        };
    
        fetchCountryCode();
      }, []);
  const steps: Step[] = [
    {
      title: "Quick Registration",
      description:
        "Fill out our <span class='font-semibold'>30-second registration form</span>. Get started with the top live streaming platforms.",
      image: "/step-1.svg",
    },
    {
      title: "Expert Consultation",
      description:
        "Once you submit, our team will reach out to you via WhatsApp. <span class='font-semibold'>We will help you further.</span>",
      image: "/step-2.svg",
    },
    {
      title: "Get Paid",
      description:
        "<span class='font-semibold'>GO LIVE</span> and engage with your audience. <span class='font-semibold'>Start earning </span> on top streaming apps with <span class='font-semibold'>Connect Agency.</span>",
      image: "/step-3.svg",
    },
  ];

  return (
    <>
      <Header />
      <TopBanner
        title="Become a Live Streamer"
        bgImage="bg-[url('/become-live-streamer-bg.png')]"
      />

      <section className="pt-10 pb-48 lg:pt-20 lg:pb-60 bg-[#f8ecee]">
        <div className="w-[90%] max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-5xl font-semibold text-center max-w-4xl mx-auto lg:leading-tight">
            Start your live streaming career with 3 EASY STEPS!
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch mt-12">
            {steps.map((step: Step, index: number) => (
             <>
              <div
                key={step.title}
                className="flex flex-col text-center my-auto"
              >
                {/* Image box with fixed height */}
                <div className="h-60 flex items-center justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Content auto fill */}
                <div className="mt-4 lg:mt-6">

                    <p className="text-sm lg:text-[18px] text-[#000B56] font-semibold mt-2">STEP {index + 1}</p>
                <h3 className="text-xl lg:text-3xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-base lg:text-[17px] text-[#393939] lg:leading-snug mt-2">
                  <span dangerouslySetInnerHTML={{ __html: step.description }} />
                </p>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <>
                  <div className="block md:hidden w-full mx-auto h-px bg-gray-300 my-0" />
                  <div className="hidden lg:block w-px h-108 bg-gray-300" />
                </>
              )}
              {/* <div className="hidden lg:block w-px h-108 bg-gray-300" /> */}
             </>
            ))}
          </div>
        </div>
      </section>


      <section className="py-10 lg:pt-20 lg:pb-12 bg-[url('/vission-bg.png')] bg-cover bg-center">

      <div className="-mt-40 lg:-mt-60 bg-linear-to-t from-[#F8ECEE] to-[#FEFEFC] border border-[#DFDFDF] rounded-3xl w-[90%] max-w-3xl mx-auto py-6 lg:py-8">
       
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
                         const idx = countryCodes.findIndex((c: CountryCode) =>
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
                     <div className="absolute left-0 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                       {countryCodes.map((country: CountryCode, index: number) => (
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
        <p className="text-center text-xl lg:text-3xl font-medium text-[#ffffff] my-2 max-w-5xl mx-auto px-2 mt-12">Become a Live Streamer, share your talent and interact with the audience. Join live streaming platforms like Poppo Live, Chamet, Niki Live, etc and start your journey today.</p>

        <p className="text-center text-2xl lg:text-4xl font-semibold text-[#ffffff] my-2 max-w-5xl mx-auto px-2 mt-4 lg:mt-8">Fill out the form to begin!</p>
      </section>


      <section className="py-10 lg:pt-20 lg:pb-12 bg-[#ffffff]">
        <div className="w-[90%] max-w-3xl mx-auto ">
            <h2 className="text-2xl lg:text-5xl font-semibold text-center max-w-4xl mx-auto lg:leading-tight">Why Connect Agency?</h2>
            <div className="mt-4 lg:mt-8">
                <p className="flex items-center gap-2"><Image src="/Apply-nowPage/apply-tick.svg" alt="check-icon" width={20} height={20} /> <span className="text-base lg:text-[18px] text-[#393939] lg:leading-snug">Get quick, verified access to the top live streaming platforms.</span></p>
                <hr className="w-full border-t border-[#DFDFDF] my-3" />
                <p className="flex items-center gap-2"><Image src="/Apply-nowPage/apply-tick.svg" alt="check-icon" width={20} height={20} /> <span className="text-base lg:text-[18px] text-[#393939] lg:leading-snug">Our team is just one message away to support you in your journey.</span></p>
                <hr className="w-full border-t border-[#DFDFDF] my-3" />
                <p className="flex items-center gap-2"><Image src="/Apply-nowPage/apply-tick.svg" alt="check-icon" width={20} height={20} /> <span className="text-base lg:text-[18px] text-[#393939] lg:leading-snug">Start your streaming journey today with $0 fees.</span></p>
                <hr className="w-full border-t border-[#DFDFDF] my-3" />
                <p className="flex items-center gap-2"><Image src="/Apply-nowPage/apply-tick.svg" alt="check-icon" width={20} height={20} /> <span className="text-base lg:text-[18px] text-[#393939] lg:leading-snug">Learn the strategies to maximize your earnings on top video calling apps.</span></p>
            </div>
        </div>
      </section>

      <hr className="w-[95%] max-w-screen-2xl mx-auto border-t border-[#DFDFDF] lg:my-6" />
      <Footer />
    </>
  );
}
