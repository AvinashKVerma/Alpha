"use client";
import { Button, Image, Link } from "@nextui-org/react";
import { Poppins } from "next/font/google";
import React from "react";
import { LuCheck } from "react-icons/lu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function Material() {
  const materialList = [
    {
      img: "/Material.png",
      name: "Matte Look",
      type: "Smooth, non-reflective, sleek finish",
      price: "₹ 0.473 - ₹ 0.930",
    },
    {
      img: "/Material.png",
      name: "Glossy Look",
      type: "Shiny, reflective finish",
      price: "₹ 0.473 - $ 0.930",
    },
  ];
  return (
    <div
      className={`${poppins.className} flex max-mobile:flex-col h-full justify-between max-mobile:max-w-screen-mobile gap-5 mb-[72px]`}
    >
      <div className="grid grid-cols-1 mobile:grid-cols-3 w-full mobile:w-4/5 gap-5 flex-col">
        {materialList.map((ele, i) => {
          return (
            <div className="flex gap-4" key={i}>
              <Image
                src={ele.img}
                alt={ele.name}
                objectfit="cover"
                width={61}
                height={61}
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm mobile:text-lg font-semibold leading-none">
                  {ele.name}
                </span>
                <span className="text-xs mobile:text-sm">{ele.type}</span>
                <span className="text-xs mobile:text-base p-1 text-center w-fit rounded-full px-2 align-middle bg-[#2F46931A] font-semibold">
                  {ele.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-mobile:hidden w-1/5 flex flex-col gap-5">
        <div className="flex flex-col gap-3 p-4 h-[158px] text-sm border-2 rounded-xl">
          <div>Your packaging</div>
          <div className="flex items-center gap-2">
            <LuCheck />
            <span> Type :</span>
            <span className="font-semibold"> Flat bottom pouch</span>
          </div>
          <div className="flex items-center gap-2">
            <LuCheck />
            <span> Size :</span>
            <span className="font-semibold">L</span>
            <span className="">{`(265 x 190 x 110 mm)`}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuCheck />
            <span> Quantity :</span>
            <span className="font-semibold">2000</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4 bg-[#FDD40A1A] text-sm border-2 rounded-xl">
          <span>Note</span>
          <span>
            When making your purchase, opting for a higher quantity can
            significantly increase your savings. By buying in bulk, you often
            get a better deal per unit, allowing you to save more in the long
            run.
          </span>
        </div>
        <Link href="/cart" className="w-full">
          <Button className="text-lg w-full font-bold bg-[#253670] text-white h-14">
            Confirm
          </Button>
        </Link>
      </div>
    </div>
  );
}
