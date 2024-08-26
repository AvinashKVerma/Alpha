import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import HomepageNavbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alpha Ecommerce - Home",
  description: "A Ecommerce Website for Packaging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HomepageNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
