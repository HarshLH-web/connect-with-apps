import Header from "@/components/layout/Header";
import TopBanner from "@/components/ui/TopBanner";
import Footer from "@/components/layout/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <TopBanner
        title="Terms And Conditions"
        bgImage="bg-[url('/terms-and-conditions-bg.webp')]"
      />
      <section className="bg-[#F8ECEE] pt-12 pb-12 lg:pt-20 lg:pb-20">
        <div className="w-[90%] max-w-7xl mx-auto bg-[#F8ECEE]">
          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 font-bold">
            Last Updated: January 08, 2026
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            Welcome to Connectwithapps.com.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            By using our website and services, you agree to the following Terms
            and Conditions.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            By using this site, you confirm that you have read, understood, and
            agreed to these Terms and our Privacy Policy. If you do not agree,
            please discontinue use of our services immediately.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            You must be at least 18 years old to register as a host or agent
            through Connect Tech. By applying, you agree that all information
            you share is truthful and accurate.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            You agree to use our platform, connectwithapps.com and the connected
            apps for lawful purposes only. These activities are prohibited:
          </p>

          <ul className="text-lg lg:text-xl text-left text-[#383838] pt-2 lg:pt-3 list-disc pl-6">
            <li>Sharing offensive, harmful, or illegal content.</li>
            <li>
              Harassing other users or disrupting the technical integrity of our
              site.
            </li>
            <li>Misrepresenting identity or creating duplicate accounts.</li>
          </ul>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            All content on Connectwithapps.com, including logos, text, graphics,
            and software, is the property of Connect Tech or its partners. You
            may not reproduce, distribute, or use our intellectual property
            without prior written consent.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            If you create an account or register for an agency, you are
            responsible for maintaining the confidentiality of your login
            details. We are not liable for any loss resulting from unauthorised
            access to your account.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            Our services on connectwithapps.com are provided on an &quot;as
            is&quot; and &quot;as available&quot; basis. While we connect you
            with top live streaming platforms, Connect Tech does not guarantee
            specific earnings or uninterrupted access to third-party
            applications.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            Connect Tech shall not be held responsible for any direct, indirect,
            incidental, or consequential damages arising from your use of our
            website, connectwithapps.com. We are also not liable for your
            activities on the streaming platforms we support.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">
            We reserve the right to modify these Terms at any time. Continued
            use of the website after changes are posted constitutes your
            acceptance of the new Terms.
          </p>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 font-bold">
            Contact Us
          </p>
          <p className="text-lg lg:text-xl text-left text-[#383838] pt-2 lg:pt-3">
            For inquiries regarding these Terms, please reach out to:
            Connectwithapps.com
            <br />
            Email:{" "}
            <a href="mailto:support@connectwithapps.com" className="underline">
              support@connectwithapps.com
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
