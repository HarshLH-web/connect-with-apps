import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

const FaqAccordion = ({ faqs = [] }: { faqs: FaqItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Tracks the active FAQ index

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : (index as number | null));
  };

  // const faqs = [
  //   {
  //     question: 'Who are streamers?',
  //     answer: 'Streamers are the individuals who perform live streaming in front of a live audience. They can share any information or their skills through broadcast. The skills can be related to music, dance, games or simply chatting with their fans. With LH Talent Agency, these streamers can easily earn money by following their passion for streaming. We connect them with popular live-streaming platforms and provide the guidance they need to succeed in the industry. <br /> <a href="/become-live-streamer" style="color: #DE0402;">Start your journey today!</a>',
  //   },
  //   {
  //     question: 'How can I earn money through live streaming?',
  //     answer: 'You can earn money by becoming an official streamer on a live-streaming platform. We are working with some popular streaming applications like <a href="/blogs/become-poppo-live-host-and-earn-money" style="color: #DE0402;">Poppo Live</a>, Niki Live, Chamet, etc. which provide amazing opportunities for live streamers to earn while sitting at home. The streamer shows their skills to the live audience and they send virtual gifts as an appreciation to their favorite streamer. These gifts can be easily converted into real money through easy withdrawal access. Apart from virtual gifts, the streamer can also earn additional rewards through daily tasks, occasional events, participating in Passion PK, etc.',
  //   },
  //   {
  //     question: 'How can I become an official streamer?',
  //     answer: 'To become an official streamer, you need to sign up with a talent agency or directly with a streaming platform. Agencies like LH Talent Agency can guide you through the process, provide training, and help you start earning. Check out the host registration process <a href="/blogs/become-poppo-live-host-and-earn-money" style="color: #DE0402;">here</a>.',
  //   },
  //   {
  //     question: 'Do we need a huge follower list to start streaming?',
  //     answer: 'No, you don’t need a huge follower base to start streaming. Anyone can begin their streaming journey with consistent and engaging content. The only thing you need is a fixed schedule for your daily streaming. You can start with one hour a day of live streaming with zero followers, and over time, you will build an audience. Be patient and consistent! <br /> <a href="/live-streaming-tips" style="color: #DE0402;">Level Up Your Streaming</a>',
  //   },
  //   {
  //     question: 'What are the skills needed to become a host?',
  //     answer: 'To become a successful host, you need good communication skills, confidence, and the ability to engage your audience. Being a live streamer or host lets you interact with your audience in real-time. The conversation has to be authentic to feel that connection with your viewers. Being entertaining, friendly, and consistent in streaming also helps you attract more viewers.',
  //   },
  //   {
  //     question: 'How much can I earn as a host?',
  //     answer: 'As a host, your earnings can vary depending on your effort, engagement, and the platform’s incentives. Your income will be different daily. The interaction with your viewers will result in your earnings of the day. Some hosts earn a part-time income, while others make a full-time living through streaming. <br /> LH Talent Agency can help you maximize your potential by providing you with the needed support and guidance.',
  //   },
  //   {
  //     question: 'How can I become an official agency?',
  //     answer: 'To become an official agency, you need to partner with a live-streaming platform and recruit talented streamers. <br /> LH Talent Agency works with top live streaming applications globally and can help you with guidance and support related to how to set up and grow as an agency. Check out the agency registration process <a href="/blogs/how-to-create-poppo-live-account" style="color: #DE0402;">here</a>.',
  //   },
  //   {
  //     question: 'How much can I earn as an agency?',
  //     answer: 'As an agency, your earnings depend on the number of streamers you recruit and their performance. The agency also invites sub-agents to expand the network of the applications. Your commission will be calculated on the overall income of your agency, which includes the hired streamers and sub-agents. The more active and successful your hosts and sub-agents are, the higher your commissions. <br /> <a href="/blogs/how-poppo-app-agency-earn-money" style="color: #DE0402;">Want to know more about Poppo Agent Commission?</a>',
  //   },
  //   {
  //     question: 'Can I become an agent and still be able to do the live-streaming?',
  //     answer: 'Yes, you can be both an agent and a streamer at the same time. Many agents also stream to earn extra income and understand the platform better. ',
  //   },
  //   {
  //     question: 'Is there a specific time requirement for streaming?',
  //     answer: 'There’s no fixed time for streaming, but consistency helps you grow. A regular schedule makes it easier for your audience to connect with you and know when to tune in. Some platforms require a minimum number of streaming hours to earn rewards. The best part of streaming is the flexibility to work according to your schedule. LH Talent Agency can support you in setting up your schedule based on your audience reach.',
  //   },
  // ];

  return (
    <div className="max-w-4xl mx-auto px-0 pt-8 pb-4">
      <div className="">
        {faqs.map((faq: FaqItem, index: number) => (
          <div
            key={index}
            className="border-b border-gray-300 overflow-hidden last:border-b-0"
          >
            {/* Question Button */}
            <button
              className={`w-full text-left px-4 py-3 hover:bg-gray-200 flex justify-between items-center transition-all duration-300 ${
                activeIndex === index ? "bg-gray-200" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base md:text-lg font-medium">
                {faq.question}
              </span>
              {/* Arrow Icon */}
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 min-w-5 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer Section */}
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-[500px] py-4" : "max-h-0"
              }`}
              style={{ transitionTimingFunction: "ease-in-out" }}
            >
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
