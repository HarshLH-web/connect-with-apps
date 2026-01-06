import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqAccordion from "@/components/ui/FAQs";
import AppsAccordion from "@/components/ui/OurApps";
import { Button } from "@/components/ui/Button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Home() {
  interface TestimonialItem {
    name: string;
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
      name: "Samriddhi",
      image: "/saleja.png",
      quote:
        "Joining LH Talent Agency was the turning point in my streaming journey. Their supportive team will resolve all your concerns.",
    },
    {
      name: "Saleja",
      image: "/samridhi.png",
      quote:
        "Joining LH Talent Agency was the turning point in my streaming journey. Their supportive team will resolve all your concerns.Joining LH Talent Agency was the turning point in my streaming journey. Their supportive team will resolve all your concerns.",
    },
    {
      name: "Eva",
      image: "/saleja.png",
      quote:
        "Joining LH Talent Agency was the turning point in my streaming journey. Their supportive team will resolve all your concerns.Joining LH Talent Agency was the turning point in my streaming journey. Their supportive team will resolve all your concerns.Joining LH Talent Agency was the turning point in my streaming journey. Their supportive team will resolve all your concerns.",
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: "Who are streamers?",
      answer:
        'Streamers are the individuals who perform live streaming in front of a live audience. They can share any information or their skills through broadcast. The skills can be related to music, dance, games or simply chatting with their fans. With LH Talent Agency, these streamers can easily earn money by following their passion for streaming. We connect them with popular live-streaming platforms and provide the guidance they need to succeed in the industry. <br /> <a href="/become-live-streamer" style="color: #DE0402;">Start your journey today!</a>',
    },
    {
      question: "How can I earn money through live streaming?",
      answer:
        'You can earn money by becoming an official streamer on a live-streaming platform. We are working with some popular streaming applications like <a href="/blogs/become-poppo-live-host-and-earn-money" style="color: #DE0402;">Poppo Live</a>, Niki Live, Chamet, etc. which provide amazing opportunities for live streamers to earn while sitting at home. The streamer shows their skills to the live audience and they send virtual gifts as an appreciation to their favorite streamer. These gifts can be easily converted into real money through easy withdrawal access. Apart from virtual gifts, the streamer can also earn additional rewards through daily tasks, occasional events, participating in Passion PK, etc.',
    },
    {
      question: "How can I become an official streamer?",
      answer:
        'To become an official streamer, you need to sign up with a talent agency or directly with a streaming platform. Agencies like LH Talent Agency can guide you through the process, provide training, and help you start earning. Check out the host registration process <a href="/blogs/become-poppo-live-host-and-earn-money" style="color: #DE0402;">here</a>.',
    },
    {
      question: "Do we need a huge follower list to start streaming?",
      answer:
        'No, you don’t need a huge follower base to start streaming. Anyone can begin their streaming journey with consistent and engaging content. The only thing you need is a fixed schedule for your daily streaming. You can start with one hour a day of live streaming with zero followers, and over time, you will build an audience. Be patient and consistent! <br /> <a href="/live-streaming-tips" style="color: #DE0402;">Level Up Your Streaming</a>',
    },
    {
      question: "What are the skills needed to become a host?",
      answer:
        "To become a successful host, you need good communication skills, confidence, and the ability to engage your audience. Being a live streamer or host lets you interact with your audience in real-time. The conversation has to be authentic to feel that connection with your viewers. Being entertaining, friendly, and consistent in streaming also helps you attract more viewers.",
    },
    {
      question: "How much can I earn as a host?",
      answer:
        "As a host, your earnings can vary depending on your effort, engagement, and the platform’s incentives. Your income will be different daily. The interaction with your viewers will result in your earnings of the day. Some hosts earn a part-time income, while others make a full-time living through streaming. <br /> LH Talent Agency can help you maximize your potential by providing you with the needed support and guidance.",
    },
    {
      question: "How can I become an official agency?",
      answer:
        'To become an official agency, you need to partner with a live-streaming platform and recruit talented streamers. <br /> LH Talent Agency works with top live streaming applications globally and can help you with guidance and support related to how to set up and grow as an agency. Check out the agency registration process <a href="/blogs/how-to-create-poppo-live-account" style="color: #DE0402;">here</a>.',
    },
    {
      question: "How much can I earn as an agency?",
      answer:
        'As an agency, your earnings depend on the number of streamers you recruit and their performance. The agency also invites sub-agents to expand the network of the applications. Your commission will be calculated on the overall income of your agency, which includes the hired streamers and sub-agents. The more active and successful your hosts and sub-agents are, the higher your commissions. <br /> <a href="/blogs/how-poppo-app-agency-earn-money" style="color: #DE0402;">Want to know more about Poppo Agent Commission?</a>',
    },
    {
      question:
        "Can I become an agent and still be able to do the live-streaming?",
      answer:
        "Yes, you can be both an agent and a streamer at the same time. Many agents also stream to earn extra income and understand the platform better. ",
    },
    {
      question: "Is there a specific time requirement for streaming?",
      answer:
        "There’s no fixed time for streaming, but consistency helps you grow. A regular schedule makes it easier for your audience to connect with you and know when to tune in. Some platforms require a minimum number of streaming hours to earn rewards. The best part of streaming is the flexibility to work according to your schedule. LH Talent Agency can support you in setting up your schedule based on your audience reach.",
    },
  ];

  const services: ServiceItem[] = [
    {
      title: "Service 1",
      description:
        "We discover and nurture extraordinary individuals with a passion for entertainment. Whether it’s singing, dancing, comedy, or simply connecting with audiences, we give every talent a platform to shine and follow their dreams of becoming social stars.",
      image: "/service-1.webp",
    },
    {
      title: "Service 2",
      description:
        "We discover and nurture extraordinary individuals with a passion for entertainment. Whether it’s singing, dancing, comedy, or simply connecting with audiences, we give every talent a platform to shine and follow their dreams of becoming social stars.",
      image: "/service-2.webp",
    },
    {
      title: "Service 3",
      description:
        "We discover and nurture extraordinary individuals with a passion for entertainment. Whether it’s singing, dancing, comedy, or simply connecting with audiences, we give every talent a platform to shine and follow their dreams of becoming social stars.",
      image: "/service-3.webp",
    },
  ];

  return (
    <>
      <div className={`${poppins.className}`}>
        <Header />

        {/* Hero Section */}
        <section className="bg-[url('/banner-lg.svg')] 2xl:bg-[url('/banner-xl.svg')] bg-no-repeat bg-cover bg-center pt-10 lg:pt-0 flex items-end justify-center min-h-[90vh]">
         <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center justify-center">
         <div className="w-full lg:w-auto max-w-3xl text-white mt-28 lg:mt-0 px-4 lg:px-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-left">
            Connect Agency Where Talent Meets Opportunity

            </h1>
            <p className="text-lg lg:text-xl pt-8 pb-4 text-center lg:text-left">
            With a network of over 30,000+ agents and 17,000+ hosts worldwide—from India to the USA, Africa, and beyond. We specialize in connecting top talent to live-streaming and video-calling apps. With our personalized guidance and expertise, make your live-streaming a winning journey.

            </p>
            <Button
              link="/our-apps"
              className="bg-[#353D76] flex items-center gap-2 text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-[#353D76] hover:border-[#353D76] transition-all duration-300 mt-4 w-fit mx-auto lg:mx-0"
              isArrow={true}
              text="Explore Our Services"
            />
          </div>
          <div className="w-full lg:w-auto max-w-2xl">
            <Image src="/hero-img.webp" alt="Home" width={500} height={500} className="w-60 mx-auto lg:mx-0 lg:w-[30rem] lg:h-full object-contain" />
          </div>
         </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#F8ECEE] py-10 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
          <div className="w-full lg:w-auto flex flex-col items-center justify-center mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold">Our Services</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-28 lg:gap-4 max-w-6xl lg:mb-12 mb-8 mt-28 lg:mt-36 px-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col items-center justify-center text-center bg-white px-4 lg:px-6 rounded-[10px_6rem_0_0] relative pt-36 pb-6 lg:pb-8"
                >
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-[17px] text-[#626262] lg:leading-snug">
                    {service.description}
                  </p>
                  <Image
                    src="/service.png"
                    alt={service.title}
                    width={500}
                    height={500}
                    className="absolute top-[-75px] max-w-72 right-1/2 translate-x-1/2"
                  />
                </div>
              ))}
            </div>

            <Button
              link="/our-apps"
              className="bg-[#353D76] flex items-center gap-2 text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-[#353D76] hover:border-[#353D76] transition-all duration-300 mt-4"
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
              Explore the apps that we offer and get ready to start with us!
              We’re here to help you every step of the way.
            </p>
            <AppsAccordion />
          </div>
        </section>

        {/* Banner Section */}
        <section className="bg-[url('/bg.webp')] bg-cover bg-center py-10 lg:py-20 px-4 lg:px-0">
          <div className="w-full max-w-3xl flex flex-col items-center justify-center mx-auto text-center">
            <h2 className="text-3xl lg:text-6xl font-bold text-white lg:leading-[1.2]">
              Powering Creativity Through Collaboration
            </h2>
            <p className="text-base lg:text-[18px] text-[#ffffff] lg:leading-snug max-w-3xl mx-auto mt-4">
              Explore the apps that we offer and get ready to start with us!
              We’re here to help you every step of the way.
            </p>
            <Button
              link="/our-apps"
              className="bg-[#353D76] flex items-center gap-2 text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-[#353D76] hover:border-[#353D76] transition-all duration-300 mt-4"
              isArrow={true}
              text="Explore Our Services"
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

                  <p className="text-lg lg:text-2xl font-bold mb-1">
                    {testimonial.name}
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
