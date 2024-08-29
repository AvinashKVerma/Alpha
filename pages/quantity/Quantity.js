"use client";
import React, { useState } from "react";
import { CheckboxGroup } from "@nextui-org/react";
import Image from "next/image";
import { LuCheck } from "react-icons/lu";
import { CustomCheckbox } from "./CustomCheckbox";

export default function Quantity() {
  const [groupSelected, setGroupSelected] = useState([]);
  const sizeList = [
    {
      size: "1000",
      price: "$5000",
      number: "1",
    },
    {
      size: "2000",
      price: "$5000",
      number: "4",
    },
    {
      size: "3000",
      price: "$5000",
      number: "6",
    },
    {
      size: "5000",
      price: "$5000",
      number: "10",
    },
    {
      size: "10000",
      price: "$5000",
      number: "20",
    },
    {
      size: "15000",
      price: "$5000",
      number: "30",
    },
    {
      size: "20000",
      price: "$5000",
      number: "40",
    },
  ];
  return (
    <div className="flex gap-5">
      <div className="w-4/5 flex gap-4">
        <div className="w-1/2 h-[715px] border-2 rounded-xl">
          <div className="h-[43px] bg-[#F9F9F9] rounded-t-xl border-b-2 flex justify-around px-2 items-center text-[#808b98]">
            <span className="text-xs font-normal">Size</span>
            <span className="text-xs font-normal">Price</span>
            <span className="text-xs font-normal">No of design</span>
          </div>
          <div className="flex flex-col w-full h-full rounded-b-xl gap-0">
            <CheckboxGroup
              value={groupSelected}
              onChange={setGroupSelected}
              classNames={{
                base: "w-full w-max-full",
                wrapper: "gap-0",
              }}
            >
              {sizeList.map((ele, i) => {
                return (
                  <div key={i} className="overflow-hidden last:rounded-b-xl">
                    <CustomCheckbox size={ele} statusColor="secondary" />
                  </div>
                );
              })}
            </CheckboxGroup>
          </div>
        </div>
        <div className="w-1/2 h-[488px] border-2 flex justify-center items-center rounded-xl">
          <Image src={"/size.png"} alt="size" width={386} height={386} />
        </div>
      </div>
      <div className="w-1/5 flex flex-col gap-5">
        <div className="flex flex-col gap-3 p-4 h-[121px] text-sm border-2 rounded-xl">
          <div className="">Your packaging</div>
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
      </div>
    </div>
  );
}
