"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { GiCheckMark } from "react-icons/gi";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function NavDetails({ content }) {
  const pathName = usePathname();

  const key = Object.keys(content).find((ele) => pathName.includes(ele));
  return (
    <div className="flex justify-between w-full">
      <div className="leading-none flex flex-col gap-4">
        <div className={`${poppins.className} text-[26px]`}>
          {content[key].heading}
        </div>
        <div className="text-sm flex items-center gap-4">
          <span>{content[key].title}</span>
          <span className="flex gap-4">
            {content[key]?.value?.map((ele, i) => {
              return (
                <span
                  className="flex items-center text-sm font-semibold text-[#2F4693] gap-2"
                  key={i}
                >
                  <GiCheckMark color="#2F4693" />
                  {ele}
                </span>
              );
            })}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 h-fit">
        <span className="text-base font-normal">Total Price : </span>
        <span className="bg-[#fef2e9] font-semibold text-base text-[#F47A1F] px-2 py-1 rounded-full">
          $ 0.473 - $ 0.930 
        </span>
      </div>
    </div>
  );
}
