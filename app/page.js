import HomepageNavbar from "@/components/Navbar";
import HomePage from "@/pages/home/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-w-[1291px] min-h-screen flex-col items-center justify-between">
      <div className="max-mobile:hidden">
        <HomepageNavbar />
      </div>
      <HomePage />
    </main>
  );
}
