import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqAccordion from "@/components/ui/FAQs";
import AppsAccordion from "@/components/ui/OurApps";
import { Button } from "@/components/ui/Button";


export default function Home() {
  interface TestimonialItem {
    name: string;
    title: string;
    image: string;
    quote: string;
  }

  interface FaqItem {
    question: string;
    answer: string;
  }

  interface ServiceItem {
    title: string;
    description: string;
    image: string;
  }

  const testimonials: TestimonialItem[] = [
    {
      name: "Leo",
      title: "Host",
      image: "/saleja.png",
      quote:
        "I used to think live streaming was just for fun until I connected with Connect Tech. They showed me how to turn my singing skills into a profession. Now, I have the freedom to work from anywhere and the income to support my family. The team is just a message away for any support throughout the journey.",
    },
    {
      name: "Marcus",
      title: "Agent",
      image: "/saleja.png",
      quote:
        "I always wanted to lead a team, but didn't know where to start in the streaming world. Connect Tech helped me with the strategy. Their support team shared details on how to run a live streaming agency, and within months, I was managing my own successful group of hosts. It’s been almost 6 months now with Connect Tech.",
    },
    {
      name: "Amara",
      title: "Host",
      image: "/samridhi.png",
      quote:
        "I used to spend hours on my phone for free, never realising that I could turn that time into a career. Connect Tech didn't just help me with the registration, they gave me the confidence to go live. Now, I’m earning more than I did at my old part-time job, and I’ve met people from all over the world. The agency provides great support and expert guidance that helps me to succeed.",
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: "How do I start on live streaming platforms?",
      answer:
        'To start your journey on live streaming platforms, simply register through Connect Tech. We guide you with the best suitable live streaming apps, help you pass your registration and verification, and provide you with the initial support to get you live.',
    },
    {
      question: "Who can join live streaming apps?",
      answer:
        'Anyone with a passion for entertaining, whether it&apos;s singing, dancing, or chatting, can join these applications. Most video calling apps invite creators worldwide who want to build a social presence and start earning online.',
    },
    {
      question: "Which app is best for live streaming?",
      answer:
        'The &quot;best&quot; app depends on your style. Poppo Live is great for interactive tasks, while Chamet is famous among video calling apps for global reach. We help you choose the platform that fits your goals best.',
    },
    {
      question: "How can I earn money from live streaming platforms?",
      answer:
        'You can earn on live streaming platforms either by becoming a host or an agent. As a host, you earn through virtual gifts received from the audience, winning the PK battles and daily streaming tasks. As an agent, you receive commission based on the performance of your team. The commission range between 4% to 20% depending on the total agency&apos;s income.',
    },
    {
      question: "How do live streaming agents earn money?",
      answer:
        "Agents earn commissions by recruiting and managing a team of hosts on various live streaming and video streaming platforms. We provide the full support and guidance needed to build a successful streaming career.",
    },
    {
      question: "Is there any investment required to join the live streaming apps?",
      answer:
        "No investment is needed to join the applications. Our live streaming services are designed to help you start earning immediately. You only need a smartphone and a stable internet connection.",
    },
    {
      question: "What are the top live streaming apps for streamers?",
      answer:
        'The highest-earning live streaming apps currently include Poppo Live, Chamet, Niki Live, and Joyo Live. These platforms are perfect for creators who want to connect with global audiences.',
    },
    {
      question: "Does Connect Tech provide support after joining?",
      answer:
        'Yes! Connect Tech provides comprehensive live streaming services, including technical support, performance guidance, and expert strategies to ensure your long-term success.',
    },
  ];

  const services: ServiceItem[] = [
    {
      title: "Talent Recruitment",
      description:
        "We find and grow talented creators for top live streaming and video calling apps. Whether it’s singing, dancing, or chatting, we provide the platform to help you become a social star.",
      image: "/service-1.png",
    },
    {
      title: "Agent Training",
      description:
        "Great streamers need great managers. We recruit and train agents to lead their own teams. We provide tools, guidance and support needed to mentor talent and build a successful business.",
      image: "/service-2.png",
    },
    {
      title: "Career Management",
      description:
        "We don't just recruit, we build your future. We offer personalized live streaming services and expert strategies to turn your passion into a profitable, long-term career.",
      image: "/service-3.png",
    },
  ];

  return (
    <>
      <div>
        <Header />

        {/* Hero Section */}
        <section className="bg-[url('/banner-lg.svg')] 2xl:bg-[url('/banner-xl.svg')] bg-no-repeat bg-cover bg-center pt-10 lg:pt-0 flex items-end justify-center lg:min-h-[95vh] 2xl:min-h-[90vh]">
         <div className="w-[90%] xl:w-full mx-auto flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center justify-center lg:mt-24 2xl:mt-0">
         <div className="w-full lg:w-auto max-w-2xl text-white mt-28 lg:mt-0 pb-12 lg:pb-0">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left">
            Connect Agency Where Talent Meets Opportunity

            </h1>
            <p className="text-lg lg:text-xl pt-8 pb-1 text-center lg:text-left">
            Welcome to Connect Tech. We act as a bridge between digital creators and the world&apos;s top live streaming platforms. With a global network of 4,000+ agents and 2,500+ successful hosts, we provide the expertise to turn your talent into a career.
            </p>
            <p className="text-lg lg:text-xl pt-2 pb-4 text-center lg:text-left">
            Whether you&apos;re looking to host or manage, we help you in your journey by connecting you directly to live streaming apps like <span className="font-bold">Poppo Live, Chamet, Niki Live, and Joyo Live.</span>
            </p>
            <Button
              link="/our-apps"
              className="mx-auto lg:mx-0"
              isArrow={true}
              text="Explore Our Services"
            />
          </div>
          <div className="w-full lg:w-auto max-w-2xl">
            <Image src="/hero-img.webp" alt="Home" width={500} height={500} className="w-60 mx-auto lg:mx-0 lg:min-w-96 lg:w-120 lg:h-full object-contain hidden lg:block" />
          </div>
         </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#F8ECEE] py-10 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
          <div className="w-full lg:w-auto flex flex-col items-center justify-center mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold">Our live streaming services</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-28 lg:gap-4 max-w-6xl lg:mb-12 mb-8 mt-28 lg:mt-36 px-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col items-center justify-start text-center bg-white rounded-[24px] overflow-hidden"
                > 
                <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-full"
                  />
                  <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-[17px] text-[#626262] lg:leading-snug">
                    {service.description}
                  </p>
                  </div>
                 
                </div>
              ))}
            </div>

            <Button
              link="/our-apps"
              isArrow={true}
              text="Explore Our Services"
            />
          </div>
        </section>

        {/* Our Apps Section */}
        <section className="bg-[#ffffff] py-10 lg:py-20 px-4 lg:px-0">
          <div className="w-full lg:w-auto flex flex-col items-center justify-center mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold">Our Apps</h2>
            <p className="text-base lg:text-[17px] text-[#626262] lg:leading-snug max-w-3xl mx-auto mt-4">
            Explore our top partnerships with leading live-streaming platforms.
            </p>
            <AppsAccordion />
          </div>
        </section>

        {/* Banner Section */}
        <section className="bg-[url('/bg.webp')] bg-cover bg-center py-10 lg:py-20 px-4 lg:px-0">
          <div className="w-full max-w-3xl flex flex-col items-center justify-center mx-auto text-center">
            <h2 className="text-3xl lg:text-6xl font-bold text-white lg:leading-[1.2]">
            Connect Your Talent to the World
            </h2>
            <p className="text-base lg:text-[18px] text-[#ffffff] lg:leading-snug max-w-3xl mx-auto mt-4">
            Join 2,500+ hosts earning daily on the world&apos;s top streaming platforms.
            </p>
            <Button
              link="/our-apps"
              isArrow={true}
              text="Connect Now"
            />
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-[#ffffff] py-10 lg:py-20 px-4 lg:px-0">
          <div className="w-full lg:w-auto flex flex-col items-center justify-center mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold">FAQs</h2>
            <p className="text-base lg:text-[17px] text-[#626262] lg:leading-snug max-w-3xl mx-auto mt-4">
              Find answers to common questions about your live-streaming
              journey. Explore the FAQs and get ready to start with us! We’re
              here to help you every step of the way.
            </p>
          </div>
          <FaqAccordion faqs={faqs as unknown as FaqItem[]} />
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#F8ECEE] py-10 lg:py-20 px-4 lg:px-0">
          <div className="w-full lg:w-auto flex flex-col items-center justify-center mx-auto text-center">
            <h2 className="text-xl lg:text-3xl font-semibold uppercase">
              Testimonials
            </h2>
            <h2 className="text-4xl lg:text-6xl font-bold">
              What Our Clients Say
            </h2>
            <p className="text-base lg:text-[17px] text-[#626262] lg:leading-snug max-w-3xl mx-auto mt-4">
              Hear from our users about their experience with our services.
              We’re here to help you every step of the way.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-16 max-w-6xl mx-auto mt-20 lg:mt-20">
              {testimonials.map((testimonial: TestimonialItem) => (
                <div
                  key={testimonial.name}
                  className="text-left border border-[#a1a1a1] rounded-3xl px-4 lg:px-6 pb-4 lg:pb-6 pt-18 relative h-fit"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="absolute top-[-50px] left-[30] border border-[#353d766f] rounded-full lg:w-28 lg:h-28"
                  />

                  <Image
                    src="/quotes.svg"
                    alt="Quote"
                    width={40}
                    height={40}
                    className="absolute top-[18px] right-[20]"
                  />

                  <p className="text-lg lg:text-2xl font-semibold mb-1 text-black/90">
                    {testimonial.name}, {testimonial.title}
                  </p>
                  <p className="text-base lg:text-[17px] text-[#626262] lg:leading-snug">
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
