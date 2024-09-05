import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import HomepageNavbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Packiq Ecommerce - Home",
  description: "A Ecommerce Website for Packaging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} scrollbar-hide w-full flex justify-center mobile:px-16 h-screen`}
      >
        <Providers>
          <div className="flex flex-col h-screen scrollbar-hide">
            <div className="mobile:hidden max-w-screen-mobile">
              <MobileNav />
            </div>
            <div className="max-w-[1344px] scrollbar-hide flex-grow">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
