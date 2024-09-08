"use client";
import React, { useState } from "react";
import { Button, CheckboxGroup, Link, Checkbox, cn } from "@nextui-org/react";
import Image from "next/image";
import { LuCheck } from "react-icons/lu";

export default function Quantity() {
  const [groupSelected, setGroupSelected] = useState([]);
  const sizeList = [
    {
      size: "1000",
      price: "₹ 5000",
      number: "1",
    },
    {
      size: "2000",
      price: "₹ 5000",
      number: "4",
    },
    {
      size: "3000",
      price: "₹ 5000",
      number: "6",
    },
    {
      size: "5000",
      price: "₹ 5000",
      number: "10",
    },
    {
      size: "10000",
      price: "₹ 5000",
      number: "20",
    },
    {
      size: "15000",
      price: "₹ 5000",
      number: "30",
    },
    {
      size: "20000",
      price: "₹ 5000",
      number: "40",
    },
  ];
  return (
    <div className="flex max-md:max-w-full mb-[72px] gap-5">
      <div className="grid sm:grid-cols-2 w-full h-fit gap-4">
        <div className="h-[715px] border-2 rounded-xl">
          <div className="h-[43px] bg-[#F9F9F9] rounded-t-xl border-b-2 flex justify-around px-2 items-center text-[#808b98]">
            <span className="text-xs font-normal">Size</span>
            <span className="text-xs font-normal">Price</span>
            <span className="text-xs font-normal">No of design</span>
          </div>
          <div className="flex flex-col w-full h-full rounded-b-xl gap-0">
            <CheckboxGroup
              value={groupSelected}
              onChange={(e) => {
                // Store only the last selected checkbox
                const lastSelected = e[e.length - 1];
                setGroupSelected([lastSelected]); // Update state with the last selected value
              }}
              classNames={{
                base: "w-full w-max-full",
                wrapper: "gap-0",
              }}
            >
              {sizeList.map((ele, i) => {
                return (
                  <Checkbox
                    key={i}
                    aria-label={ele.size}
                    classNames={{
                      base: cn(
                        "inline-flex px-5 h-[96px] border-b-2 max-w-full w-full bg-content1 m-0",
                        "hover:bg-content2 items-center justify-start",
                        "cursor-pointer gap-2 p-2 border-b-2 max-md:first:rounded-t-xl last:rounded-xl"
                      ),
                      icon: "rounded-full",
                      label: "w-full last:rounded-b-xl",
                    }}
                    value={ele.size}
                  >
                    <div className="w-full flex justify-between text-[#03172B] gap-2">
                      <div className="flex justify-evenly items-center gap-4">
                        <div className="flex flex-col gap-2 justify-center items-center">
                          <span className="text-lg font-bold">{ele.size}</span>
                          <span className="px-2 bg-[#1CC6181A] text-[#1CC618] rounded-full">
                            50% off
                          </span>
                        </div>
                        {/* <span>{ele.dimension}</span> */}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-medium">{ele.price}</span>
                        <span className="text-lg text-[#03172B80] font-medium">{`(₹50/piece)`}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {ele.number}
                      </div>
                    </div>
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          </div>
        </div>
        <div className="max-sm:hidden h-auto border-2 flex justify-center items-center rounded-xl">
          <Image src={"/size.png"} alt="size" width={350} height={356} />
        </div>
      </div>
      <div className="max-ml:hidden w-1/5 flex flex-col gap-5">
        <div className="flex flex-col gap-3 p-4 text-sm border-2 rounded-xl">
          <div className="">Your packaging</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <LuCheck />
              <span> Type :</span>
            </div>
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
        <Link href="material" className="w-full">
          <Button className="text-lg w-full font-bold bg-[#253670] text-white h-14">
            Confirm
          </Button>
        </Link>
      </div>
    </div>
  );
}
