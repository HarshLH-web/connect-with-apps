import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
          {/* Google Analytics */}
          <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VX06MFX8TB"
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VX06MFX8TB');
        `}
      </Script>

      {/* Google Ads Conversion */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17726157177"
        strategy="afterInteractive"
      />
      <Script id="ads-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17726157177');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PZ26KTWS');
        `}
      </Script>

      <Script
      strategy="afterInteractive"
      type="text/javascript"
      src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
      id="aisensy-wa-widget"
      widget-id="aaay3m"
      >
      </Script>
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
    </>
    
  );
}
