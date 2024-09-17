import HomepageNavbar from "@/components/Navbar";
import HomePage from "@/wind/home/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-w-[1291px] min-h-screen flex-col lg:gap-12 items-center max-mobile:justify-between">
      <div className="max-mobile:hidden w-full">
        <HomepageNavbar />
      </div>
      <HomePage />
    </main>
  );
}
