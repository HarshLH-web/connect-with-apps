import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
function Support() {
  const [formValues, setFormValues] = useState({
    countryCode: "+91" // Initialize with default country code
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Ensure country code is set (use default +91 if not selected)
    const countryCode = formValues.countryCode || "+91";
    
    // Get IP address
    const ipAddress = await fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => data.ip);

    const fullNumber = countryCode + formValues.phone;

    // Prepare the form data
    const dataToSend = {
      name: formValues.name || '',
      email: formValues.email || '',
      phone: fullNumber || '',
      country: formValues.country || '',
      message: formValues.message || '',
      ip_address: ipAddress,
      page_url: window.location.href,
    };

    try {
      const response = await fetch('https://webpanel.store/api/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form successfully submitted:", result);
        alert("Form submitted successfully");
        setFormValues({}); // Reset form after successful submission
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const fetchCountryCode = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd');
    const data = await response.json();
    const formatted = data
          .filter((c) => c.idd?.root && c.idd?.suffixes?.length)
          .map((c) => ({
            label: c.name.common,
            value: `${c.idd.root}${c.idd.suffixes[0]}`,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
    console.log(formatted);
    setCountryCodes(formatted);
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  return (
    <>
    <Head>
      <title>Customer Support | LH Talent Agency: We are here to Help</title>
      <meta name="description" content="Need assistance? Contact LH Talent Agency's customer support for all your live streaming and hosting inquiries. Fill out this form and reach us anytime." />
      <meta name="keywords" content="LH Talent - Customer Support, LH Talent Agency - Contact Number" />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://lhtalentagency.com/customer-support" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Customer Support | LH Talent Agency: We are here to Help" />
      <meta property="og:site_name" content="LH Talent Agency" />
      <meta property="og:description" content="Need assistance? Contact LH Talent Agency's customer support for all your live streaming and hosting inquiries. Fill out this form and reach us anytime." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lhtalentagency.com" />
      <meta property="twitter:url" content="https://lhtalentagency.com/customer-support" />
      <meta name="twitter:title" content="Customer Support | LH Talent Agency: We are here to Help" />
      <meta name="twitter:description" content="Need assistance? Contact LH Talent Agency's customer support for all your live streaming and hosting inquiries. Fill out this form and reach us anytime." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://lhtalentagency.com/customer-support" />
    </Head>
    <Header />
    <div className='contact-bg'>
      <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase text-center px-8'>Customer Support</h1>

    </div>
      <div className="mt-8 lg:mt-24 bg-linear-to-b from-[#FEFEFC] to-[#F9F6E3] border border-[#DFDFDF] rounded-3xl w-[90%] max-w-3xl mx-auto py-6">

        <h2 className="text-2xl lg:text-4xl font-semibold text-center">Get In Touch With Us</h2>
        <p className="text-center text-base text-[#363636] my-2 max-w-xl mx-auto px-2">You can simply connect us through filling this form or drop your queries to the given mail. We will assist you shortly.</p>
        {/* <div className="max-w-2xl mx-auto py-4">

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
              <div className="flex flex-col gap-2 lg:gap-3 w-[90%] lg:w-1/2 mx-auto">
                <div className="relative">
                  <input 
                    id="name"
                    type="text" 
                    name="name" 
                    value={formValues.name || ''} 
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="w-full py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent peer" 
                  />
                  <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Enter your name</label>
                </div>

                <div className="relative">
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    value={formValues.email || ''} 
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="w-full py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent peer" 
                  />
                  <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Enter your email</label>
                </div>

                <div className="flex items-center relative">
                  Custom Dropdown
                  <div className="relative" ref={dropdownRef}>
                    <div
                      tabIndex={0}
                      onClick={() => setOpen(!open)}
                      onKeyDown={(e) => {
                        if (/^[a-zA-Z]$/.test(e.key) && open) {
                          const idx = countryCodes.findIndex((c) =>
                            c.label.toLowerCase().startsWith(e.key.toLowerCase())
                          );
                          if (idx !== -1) {
                            const el = document.getElementById(`country-option-${idx}`);
                            el?.scrollIntoView({ block: "nearest" });
                          }
                        }
                      }}
                      className="w-20 py-2 px-3 border border-gray-300 bg-white rounded-l-full cursor-pointer flex items-center justify-between focus:ring-1 focus:ring-[#DE0402]"
                    >
                      <span>{formValues.countryCode || "+91"}</span>
                      <svg
                        className="w-4 h-4 text-gray-500 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    Dropdown List
                    {open && (
                      <div className="absolute left-0 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                        {countryCodes.map((country, index) => (
                          <div
                            id={`country-option-${index}`}
                            key={index}
                            onClick={() => {
                              setFormValues({ ...formValues, countryCode: country.value });
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

                  Phone Input
                  <div className="relative flex-1">
                    <input
                      id="phone"
                      type="number"
                      name="phone"
                      value={formValues.phone || ""}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                      className="w-full py-2 px-2 rounded-r-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
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
                    value={formValues.country || ''} 
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="w-full py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent peer" 
                  />
                  <label htmlFor="country" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Enter your country</label>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 w-[90%] lg:w-1/2 mx-auto">
                <div className="relative grow">
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message || ''} 
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full min-h-40 lg:min-h-full border p-2 rounded-2xl border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent peer"
                  />
                  <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Your message</label>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#DE0402] border-2 border-[#DE0402] hover:bg-transparent hover:text-[#DE0402] text-white px-4 py-[0.42rem] transition-all duration-300 rounded-full focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div> */}
      </div>

      <div className='w-full mx-auto max-w-3xl flex flex-col items-center justify-center mt-10 pb-12'>
        <Image src="/clock.svg" alt="Get quick response" className='w-32' width={100} height={100} />
        <h3 className='text-2xl lg:text-4xl font-bold text-center'>Available: Monday To Saturday </h3>

        <h3 className='text-2xl lg:text-4xl text-[#DE0402] font-bold text-center'>9:30AM - 5:30PM IST</h3>

        <a href='https://api.whatsapp.com/send/?phone=7065384660&text&type=phone_number&app_absent=0' className='text-base bg-[#FFF5F4] my-2 w-[90%] max-w-sm border border-[#DE0402] rounded-full whitespace-nowrap py-3 text-center mt-6'><span className='font-bold'>WhatsApp:</span> +917065384660</a>

        <a href='mailto:support@lhtalentagency.com' className='text-base bg-[#FFF5F4] my-2 w-[90%] max-w-sm border border-[#DE0402] rounded-full whitespace-nowrap py-3 text-center'><span className='font-bold'>Email:</span> support@lhtalentagency.com</a>
      </div>
      <Footer />
    </>

  );
}

export default Support