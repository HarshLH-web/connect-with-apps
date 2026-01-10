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
        <p className="text-lg lg:text-xl text-center text-[#393939] pt-4 lg:pt-6 pb-2 lg:pb-3">
        At <span className="font-semibold">Connect Agency</span>, we believe that <span className="font-semibold">talent has no boundaries</span>. We are a leading talent management agency that is making the live streaming world easy and profitable for everyone.
        </p>
        <p className="text-lg lg:text-xl text-center text-[#393939] py-2 lg:py-3">
        With almost <span className="font-semibold">two years of experience,</span> having <span className="font-semibold">4000+ agents</span> and <span className="font-semibold">2500+ hosts</span>, we expanded our network in <span className="font-semibold">India, Pakistan, the Philippines, the USA and Europe</span>.
        </p>
        <p className="text-lg lg:text-xl text-center text-[#393939] py-2 lg:py-3">
        We act as a bridge between the talented streamers and the <span className="font-semibold">top live streaming platforms</span>. Our top collaborating live streaming and video calling applications are <span className="font-semibold">Poppo Live, Chamet, Niki Live, Joyo Live, Taka Live, etc.</span>
        </p>
        <p className="text-lg lg:text-xl text-center text-[#393939] py-2 lg:py-3">
        Whether you want to go live or are looking to start your own agency, Connect Agency is here for you. We provide the support and guidance to help you grow. We take care of the technical part and registration, so you can focus on the more important things: <span className="font-semibold">entertaining your audience and leading your team</span>.
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
            To help creators turn their passion into a profession. We connect you directly to the top live streaming apps. We offer expert support and performance guidance to build a successful income source. We don&apos;t just &quot;register&quot; you; we partner with you on your journey.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[55%] bg-[url('/vission-bg.png')] lg:bg-[url('/vission-bg-xl.png')] h-full bg-cover bg-right lg:bg-left text-white text-center py-12 lg:py-20">
          <div className="w-[90%] lg:w-[85%] 2xl:px-24 mx-auto lg:mr-auto lg:pl-12 lg:mx-0">
            <h2 className="text-3xl lg:text-6xl font-bold uppercase mb-2 lg:mb-4 lg:pl-20">
              Vision
            </h2>
            <p className="text-base lg:text-lg leading-normal lg:pl-20">
              To be the world&apos;s most trusted talent agency for digital creators. We aim to build a global community where anyone can get rewarded for their talent. At Connect Agency, we see a world where live streaming is open for everyone, and we are here to bridge that gap. We are working toward a future where &quot;where you live&quot; never limits &quot;what you can earn.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <section className="bg-[#F8ECEE] pt-12 pb-12 lg:pt-20 lg:pb-20">
        <div className="w-[90%] max-w-7xl mx-auto bg-[#F8ECEE]">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center uppercase mb-4 lg:mb-12"> Meet the Founder</h2>

        <div className="flex flex-col items-center justify-center border border-black/50 rounded-3xl px-12 py-8 max-w-5xl mx-auto">
            <p className="text-base lg:text-lg text-center text-[#1a1a1a]">Connect Agency is founded and led by Mr Apoorv Verma, who brings over 6 years of experience in affiliate marketing to the agency. His deep industry knowledge drives the growth of the Connect Agency. Under his leadership, the agency has become a trusted bridge to the world’s top live streaming platforms. Mr Verma is dedicated to providing a professional and profitable environment for our 4,000+ agents and 2,500+ hosts. At Connectwithapps.com, his vision ensures every creator has a clear path to professional success.</p>
            <div className="h-1 w-24 bg-black rounded-full my-4"></div>
            <h3 className="text-lg lg:text-xl font-semibold text-center uppercase">Mr. Apoorv Verma</h3>
            <p className="text-base lg:text-lg text-center text-[#1a1a1a]">Founder</p>
        </div>
      </div>
      </section>
      
      <Footer />
    </>
  );
}
