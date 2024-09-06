"use client";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Chip,
  cn,
  Link,
} from "@nextui-org/react";
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

  console.log(groupSelected);

  return (
    <div className="flex max-mobile:max-w-screen-mobile mb-[100px] gap-5">
      <div className="mobile:w-4/5 flex max-mobile:flex-col  gap-4">
        <div className="mobile:hidden mobile:w-auto h-[161px] border-2 flex justify-center items-center rounded-xl overflow-hidden">
          <Image
            src="/size.png"
            width={241}
            height={161}
            objectFit="cover"
            alt="size"
            style={{ width: "auto", height: "100%" }} // Optional inline styles if needed
          />
        </div>
        <div className="mobile:w-1/2 h-[488px] border-2 rounded-xl">
          <div className="h-12 bg-[#F9F9F9] rounded-t-xl border-b-2 flex justify-between px-2 items-center text-[#808b98]">
            <div className="font-normal flex justify-evenly">
              <span className="text-xs font-normal">Size</span>
              <span className="text-xs font-normal">
                Width x Height x Depth
              </span>
            </div>
            <div className="text-xs font-normal">Filling volume (approx.)</div>
          </div>
          <div className="flex flex-col w-full h-full rounded-b-xl gap-0">
            <CheckboxGroup
              value={groupSelected}
              onChange={(e) => {
                const lastSelected = e[e.length - 1];
                setGroupSelected([lastSelected]);
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
                        "inline-flex h-[96px] border-b-2 max-w-full w-full bg-content1 m-0",
                        "hover:bg-content2 items-center justify-start",
                        "cursor-pointer gap-2 p-4 border-b-2"
                      ),
                      icon: "rounded-full",
                      label: "w-full last:rounded-b-xl",
                    }}
                    value={ele.size}
                  >
                    <div className="w-full flex justify-between text-[#03172B] gap-2">
                      <div className="flex justify-evenly items-center gap-4">
                        <Chip
                          size="lg"
                          className="relative max-w-fit min-w-min box-border whitespace-nowrap px-2 h-12 rounded-full bg-default aspect-square w-12 flex justify-center text-xl font-semibold text-[#2F4693] items-center`"
                        >
                          <span className="p-4">{ele.size}</span>
                        </Chip>
                        <span>{ele.dimension}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-normal">
                          {ele.weight}
                        </span>
                        <span className="text-base font-normal">
                          {ele.product}
                        </span>
                      </div>
                    </div>
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          </div>
        </div>
        <div className="max-mobile:hidden mobile:w-1/2 h-[488px] border-2 flex justify-center items-center rounded-xl">
          <Image src={"/size.png"} alt="size" width={350} height={350} />
        </div>
      </div>
      <div className="max-mobile:hidden w-1/5 flex flex-col gap-5">
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
        <Link href="quantity" className="w-full">
          <Button className="w-full text-lg font-bold bg-[#253670] text-white h-14">
            Confirm
          </Button>
        </Link>
      </div>
    </div>
  );
}
