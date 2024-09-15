import { DM_Sans } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import StoreProvider from "./StoreProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Packiq Ecommerce - Home",
  description: "A Ecommerce Website for Packaging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} scrollbar-hide w-full flex justify-center mobile:px-5 xs:px-8 xl:px-16 h-screen`}
      >
        <div className="flex flex-col h-screen scrollbar-hide w-full items-center">
          <div className="mobile:hidden max-w-screen-mobile w-full">
            <MobileNav />
          </div>
          <div className="max-w-[1344px] scrollbar-hide flex justify-center flex-grow w-full">
            <StoreProvider>{children}</StoreProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
