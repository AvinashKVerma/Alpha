"use client";
import React, { useState } from "react";
import { CustomCheckbox } from "@/pages/size/CustomCheckbox";
import { CheckboxGroup } from "@nextui-org/react";
import Image from "next/image";
import { LuCheck } from "react-icons/lu";

export default function Size() {
  const [groupSelected, setGroupSelected] = useState([]);
  const sizeList = [
    {
      size: "XS",
      dimension: "170 x 110 x 70 mm",
      product: "coffee",
      weight: "250 g",
    },
    {
      size: "S",
      dimension: "210 x 130 x 80 mm",
      product: "coffee",
      weight: "250 g",
    },
    {
      size: "M",
      dimension: "240 x 160 x 90 mm",
      product: "coffee",
      weight: "250 g",
    },
    {
      size: "L",
      dimension: "265 x 190 x 110 mm",
      product: "coffee",
      weight: "250 g",
    },
    {
      size: "XL",
      dimension: "310 x 250 x 110 mm",
      product: "coffee",
      weight: "250 g",
    },
  ];
  return (
    <div className="flex gap-5">
      <div className="w-4/5 flex gap-4">
        <div className="w-1/2 h-[488px] border-2 rounded-xl">
          <div className="h-12 bg-[#F9F9F9] rounded-t-xl border-b-2 flex justify-between px-2 items-center text-[#808b98]">
            <div className="font-normal flex justify-evenly">
              <span className="text-xs font-normal">Size</span>
              <span className="text-xs font-normal">
                Width x Height x Depth
              </span>
            </div>
            <div className=" text-xs font-normal">Filling volume (approx.)</div>
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
                  <div
                    key={i}
                    className="h-1/5 overflow-hidden last:rounded-b-xl"
                  >
                    <CustomCheckbox
                      value="junior"
                      size={ele}
                      statusColor="secondary"
                    />
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
        <div className="flex flex-col gap-3 p-4 h-[107px] text-sm border-2 rounded-xl">
          <div className="">Your packaging</div>
          <div className="flex items-center gap-2">
            <LuCheck />
            <span> Type :</span>
            <span className="font-semibold"> Flat bottom pouch</span>
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
