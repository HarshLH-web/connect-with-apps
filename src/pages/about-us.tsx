import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/ui/TopBanner";

export default function AboutUs() {
  return (
    <>
      <Header />
      <TopBanner title="About Us" bgImage="bg-[url('/about-bg.png')]" />


      <section className="bg-[#F8ECEE] pt-12 pb-12 lg:pt-20 lg:pb-20">
      <div className="w-[90%] max-w-7xl mx-auto bg-[#F8ECEE]">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center uppercase">
          We are talent agency
        </h2>
        <p className="text-lg lg:text-xl text-center text-[#626262] pt-4 lg:pt-6">
          LH Talent Agency bridges the gap between talented streamers and
          influencers with the leading live-streaming applications worldwide. We
          are passionate about empowering streamers and providing adequate
          support to help them thrive in the broadcasting industry. We reach a
          network of over 30,000 agents and 17,000 hosts and work with
          individuals from regions including India, Pakistan, the Philippines,
          the USA, Africa, and Europe. We specialize in recruiting talented
          streamers and guiding them to achieve their dreams of becoming social
          stars or influencers. We welcome talent who brings energy,
          originality, and authenticity to their broadcasts.
        </p>
        <p className="text-lg lg:text-xl text-center text-[#626262] pt-4 pb-4">
          We collaborate with various live-streaming and video-calling
          applications like Poppo Live, Mimi, Chamet, Niki, HoneyCam, etc. We
          are proud to offer personalized support to each streamer and agent and
          contribute to their profitable live-streaming journey. We don&apos;t
          just see ourselves as a talent agency we&apos;re a community of
          creators who support one another in achieving our goals.
        </p>
        <p className="text-lg lg:text-xl text-center font-semibold text-[#000000]">
          At LH Talent Agency, the possibilities are endless. Whether you are an
          aspiring streamer or an experienced influencer, we invite you to be a
          part of an exciting journey.
        </p>
      </div>
      </section>

      {/* Section 2 */}

      <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-linear-to-b from-[#0B8F98] to-[#3A175F]">
        <div className="w-full lg:w-[50%] text-white text-center py-12 lg:py-20">
          <div className="w-[90%] lg:w-[80%] 2xl:px-20 mx-auto lg:ml-auto lg:pr-12 lg:mx-0">
            <h2 className="text-3xl lg:text-6xl font-bold uppercase mb-2 lg:mb-4">
              Mission
            </h2>
            <p className="text-base lg:text-lg leading-normal">
              Our mission is to create a supportive community where every talent
              shines. We are dedicated to discovering and nurturing talents and
              ensuring every streamer has been given personalized support and
              opportunities to thrive in the live-streaming world.{" "}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[55%] bg-[url('/vission-bg.png')] lg:bg-[url('/vission-bg-xl.png')] h-full bg-cover bg-right lg:bg-left text-white text-center py-12 lg:py-20">
          <div className="w-[90%] lg:w-[85%] 2xl:px-20 mx-auto lg:mr-auto lg:pl-12 lg:mx-0">
            <h2 className="text-3xl lg:text-6xl font-bold uppercase mb-2 lg:mb-4 lg:pl-20">
              Vision
            </h2>
            <p className="text-base lg:text-lg leading-normal lg:pl-20">
              We picture a world where different talents come together and
              live-streaming becomes a colorful, vibrant community of creativity
              and connections. We aim to make live streaming a great space to
              share stories and passions, making each broadcast a celebration.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <section className="bg-[#F8ECEE] pt-12 pb-12 lg:pt-20 lg:pb-20">
        <div className="w-[90%] max-w-7xl mx-auto bg-[#F8ECEE]">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center uppercase mb-4 lg:mb-12"> Our Team</h2>

        <div className="flex flex-col items-center justify-center border border-black/50 rounded-3xl px-12 py-8 max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-center text-[#1a1a1a]">He drives the company&apos;s strategy and leads marketing initiatives with a strong focus on digital growth. Backed by 6 years of affiliate marketing experience, he brings valuable expertise to the digital landscape.</p>
            <div className="h-1 w-24 bg-black rounded-full my-4"></div>
            <h3 className="text-lg lg:text-xl font-semibold text-center uppercase">Mr. Apoorv Verma</h3>
            <p className="text-base lg:text-lg text-center text-[#1a1a1a]">CTO & CMO</p>
        </div>
      </div>
      </section>
      
      <Footer />
    </>
  );
}
