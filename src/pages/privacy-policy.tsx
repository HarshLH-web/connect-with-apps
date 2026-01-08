import Header from "@/components/layout/Header";
import TopBanner from "@/components/ui/TopBanner";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Header />
    <TopBanner title="Privacy Policy" bgImage="bg-[url('/privacy-policy-bg.webp')]" />
    <section className="bg-[#F8ECEE] pt-12 pb-12 lg:pt-20 lg:pb-20">
      <div className="w-[90%] max-w-7xl mx-auto bg-[#F8ECEE]">
      <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 font-bold">Last Updated: January 07, 2026</p>

<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">At Connect Tech, connectwithapps.com, your privacy is important to us. This Privacy Policy shares the types of information we collect and how we use and protect it. We make sure of a secure experience for our hosts and agents.</p>

<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 font-bold">To provide our live streaming services, we may collect the following data:</p>

<ul className="text-lg lg:text-xl text-left text-[#383838] pt-2 lg:pt-3 list-disc pl-6">
  <li><span className="font-semibold">Personal Information:</span> Name, email address, phone number, and social media.</li>

<li><span className="font-semibold">Professional Details:</span> Payment information and identity verification for platform registration.</li>

<li><span className="font-semibold">Other Data:</span> IP address, browser type, device information, and browsing patterns on our site via cookies.</li></ul>


<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 font-bold">We use the above information to:</p>

<ul className="text-lg lg:text-xl text-left text-[#383838] pt-2 lg:pt-3 list-disc pl-6">
  <li>Manage your registration for live streaming apps.</li>

<li>Provide you with support and guidance.</li>

<li>Helps in payment processing.</li>

<li>Share important updates regarding your account.</li>

<li>Improve our website’s performance and user experience.</li>

</ul>
<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 font-bold">We do not sell or rent your personal data. We only share information:</p> 
<ul className="text-lg lg:text-xl text-left text-[#383838] pt-2 lg:pt-3 list-disc pl-6">

<li>With your consent to register you on third-party live streaming apps.</li>

<li>With trusted service providers who assist in our business operations.</li>

<li>When required by law or to protect the safety and rights of our community.</li>

</ul>


<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">We take industry-standard security measures to secure your data. While we take maximum protection, please note that no method of digital transmission is 100% secure.</p>

<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">You have the right to access, update, or request the deletion of your personal information. You may opt out of promotional communications at any time by contacting us.</p>


<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">Our services are strictly intended for individuals aged 18 and above. We do not knowingly collect data from minors.</p>

<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">We may update this policy periodically. Any changes will be posted here with a revised &quot;Last Updated&quot; date.</p>


<p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6">Contact Us For any questions regarding your privacy, please contact: Connectwithapps.com Email: support@connectwithapps.com</p>
      </div>
    </section>
      <Footer />
    </>
  );
}