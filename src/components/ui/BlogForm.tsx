import { useEffect, useState, useRef } from "react";

interface Field {
  id: number;
  type: string;
  placeholder: string;
  value: string;
  required: boolean;
}
interface FormValues {
  countryCode: string;
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  message?: string;
  [key: string]: string | undefined;
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
interface CountryCodes {
  label: string;
  value: string;
}
function BlogForm({
  fields,
  className,
}: {
  fields: Field[];
  className: string;
}) {
  const [formValues, setFormValues] = useState<FormValues>({
    countryCode: "+91",
  });
  const [currentUrl, setCurrentUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCodes, setCountryCodes] = useState<CountryCodes[]>([]);
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

  const fetchCountryCode = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,idd"
    );
    const data: CountryData[] = await response.json();
    const formatted: CountryCodes[] = data
      .filter(
        (c): c is CountryData & { idd: { root: string; suffixes: string[] } } =>
          Boolean(c.idd?.root && c.idd?.suffixes?.length)
      )
      .map((c) => ({
        label: c.name.common,
        value: `${c.idd.root}${c.idd.suffixes[0]}`,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
    // console.log(formatted);
    setCountryCodes(formatted);
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  // Initialize formValues based on the fields prop
  useEffect(() => {
    const initialValues: FormValues = {
      countryCode: "+91",
    };
    fields.forEach((field) => {
      // Set default country code for phone field
      if (field.value === "phone") {
        initialValues.countryCode = "+91"; // Set default country code
      }
      initialValues[field.value as keyof FormValues] = ""; // Initialize with empty strings
    });
    setFormValues(initialValues);

    // Set current URL (only runs on client-side)
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [fields]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data with combined phone number
      const { countryCode, ...submitDataWithoutCode } = formValues;
      const submitData: Omit<FormValues, "countryCode"> & { phone?: string } = {
        ...submitDataWithoutCode,
      };

      // Validate and combine phone number with country code
      if (formValues.phone) {
        // Ensure country code is set (use default +91 if not selected)
        const code = countryCode || "+91";

        // Combine country code with phone number
        submitData.phone = `${code}${formValues.phone}`;
      }

      const response = await fetch("/api/formData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...submitData,
          page_url: currentUrl,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form successfully submitted:", result);
        alert("Form submitted successfully");
        setFormValues({ countryCode: "+91" }); // Reset form after submission
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle field value change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div
      className={`w-full mx-auto lg:w-[80%] max-w-sm bg-linear-to-b from-[#FEFEFC] to-[#F9F6E3] border border-[#DFDFDF] rounded-3xl ${className}`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full mx-auto"
      >
        {fields.map((field) => (
          <div key={field.id} className="relative">
            {field.type === "textarea" ? (
              // 🟢 Case 1: Textarea
              <div className="relative">
                <textarea
                  id={field.value}
                  name={field.value}
                  value={formValues[field.value as keyof FormValues] || ""}
                  placeholder=" "
                  onChange={handleInputChange}
                  required={field.required}
                  className="peer block w-full min-h-40 py-2 px-4 rounded-3xl border border-[#DFDFDF] bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent"
                />
                <label
                  htmlFor={field.value}
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                >
                  {field.placeholder}
                </label>
              </div>
            ) : field.value === "phone" ? (
              // 🟢 Case 2: Custom dropdown + phone input
              <div className="flex items-center relative">
                {/* Custom Dropdown */}
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
                          const el = document.getElementById(
                            `country-option-${idx}`
                          );
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
                    className="w-full py-2 px-2 rounded-r-full border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    {field.placeholder}
                  </label>
                </div>
              </div>
            ) : (
              // 🟢 Case 3: Normal inputs
              <div className="relative">
                <input
                  id={field.value}
                  type={field.type}
                  name={field.value}
                  value={(formValues[field.value] as string) || ""}
                  placeholder=" "
                  onChange={handleInputChange}
                  required={field.required}
                  className="peer block w-full py-2 px-4 rounded-3xl border border-[#DFDFDF] bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent"
                />
                <label
                  htmlFor={field.value}
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                >
                  {field.placeholder}
                </label>
              </div>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            marginTop: "0.5rem",
            backgroundColor: isSubmitting ? "#ccc" : "#DE0402",
            color: "white",
            borderRadius: "2rem",
            transition: "all 0.3s",
            border: "2px solid #DE0402",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isSubmitting) {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = "transparent";
              target.style.color = "#DE0402";
            }
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isSubmitting) {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = "#DE0402";
              target.style.color = "white";
            }
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
