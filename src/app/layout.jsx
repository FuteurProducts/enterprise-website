import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "../common/style/globals.css";
import { LenisProvider } from "@/common/component/element/LenisProvider";
import Navbar from "@/common/component/navbar/Navbar";
import Footer from "@/common/component/element/Footer";

const plusj = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Futeurcredx for Enterprise",
  description: "Enterprise Solutions by Futeurcredx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`_linkedin_partner_id = "8785410";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
        <Script id="linkedin-insight-loader" strategy="afterInteractive">
          {`(function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=8785410&fmt=gif" />
        </noscript>
      </head>
      <body className={plusj.className}>
        <LenisProvider>
          <div className="w-full flex justify-center items-center">
            <Navbar />
          </div>
          {children}

          <div className="w-full flex justify-center items-center">
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}

