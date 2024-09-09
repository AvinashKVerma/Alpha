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

  return (
    <div className="flex max-md:w-full mb-[100px] gap-5">
      <div className="ml:w-4/5 max-ml:w-full flex max-md:flex-col  gap-4">
        <div className="xs:hidden md:w-auto h-[161px] border-2 flex justify-center items-center rounded-xl overflow-hidden">
          <Image
            src="/size.png"
            width={241}
            height={161}
            objectFit="cover"
            alt="size"
            style={{ width: "auto", height: "100%" }} // Optional inline styles if needed
          />
        </div>
        <div className="grid xs:grid-cols-2 w-full h-fit gap-4">
          <div className="xs:border-2 border-b-0 h-fit rounded-xl">
            <div className="flex flex-col w-full rounded-b-xl rounded-t-xl gap-0">
              <CheckboxGroup
                value={groupSelected}
                onChange={(e) => {
                  const lastSelected = e[e.length - 1];
                  setGroupSelected([lastSelected]);
                }}
                classNames={{
                  base: "w-full w-max-full",
                  wrapper: "xs:gap-0 gap-3 rounded-t-xl rounded-b-xl",
                }}
              >
                <label
                  className="max-xs:hidden inline-flex rounded-t-xl max-w-full w-full bg-[#F9F9F9] items-center justify-start gap-2 p-2 border-b-2 max-md:first:rounded-t-xl last:rounded-xl"
                  aria-label="XS"
                >
                  <span
                    aria-hidden="true"
                    className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-transparent after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-primary after:text-primary-foreground text-primary-foreground w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset] rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)] after:rounded-[calc(theme(borderRadius.medium)*0.6)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none"
                  >
                    <svg
                      aria-hidden="true"
                      role="presentation"
                      viewBox="0 0 17 18"
                      className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-4 h-3 transition-opacity motion-reduce:transition-none rounded-full"
                    >
                      <polyline
                        fill="none"
                        points="1 9 7 14 15 4"
                        stroke="white"
                        strokeDasharray="22"
                        strokeDashoffset="66"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></polyline>
                    </svg>
                  </span>
                  <span
                    id=":Rr6cvf6jt7qcq:"
                    className="relative text-foreground select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none w-full"
                  >
                    <div className="w-full flex justify-between text-[#808b98] gap-2">
                      <div className="flex md:justify-start w-full justify-between items-center gap-4">
                        <div className="items-center relative max-w-fit min-w-min box-border whitespace-nowrap rounded-full w-12 flex justify-center items-center`">
                          <span className="flex-1 text-inherit font-normal px-2">
                            <span className="text-xs font-normal">Size</span>
                          </span>
                        </div>
                        <span className="text-xs font-normal">
                          Width x Height x Depth
                        </span>
                      </div>
                      <div className="max-md:hidden flex items-center">
                        <span className="text-xs font-normal">
                          Filling volume (approx.)
                        </span>
                      </div>
                    </div>
                  </span>
                </label>
                {sizeList.map((ele, i) => {
                  return (
                    <Checkbox
                      key={i}
                      aria-label={ele.size}
                      classNames={{
                        base: cn(
                          "inline-flex h-[80px] max-w-full w-full bg-content1 m-0",
                          "hover:bg-content2 items-center justify-start",
                          "cursor-pointer gap-2 p-2 max-xs:rounded-xl max-xs:border-2 last:border-none border-b-2 max-md:first:rounded-t-xl last:rounded-xl"
                        ),
                        icon: "rounded-full",
                        label: "max-xs:rounded-xl w-full",
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
                          <span className="max-md:hidden">{ele.dimension}</span>
                        </div>
                        <div className="flex flex-col max-md:items-end">
                          <span className="md:hidden max-md: text-sm">
                            {ele.dimension}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="md:text-base text-xs text-[#03172B80] font-normal">
                              {ele.weight}
                            </span>
                            <span className="md:text-base text-xs text-[#03172B80] font-normal">
                              {`(${ele.product})`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            </div>
          </div>
          <div className="max-xs:hidden h-auto border-2 flex justify-center items-center rounded-xl">
            <Image src={"/size.png"} alt="size" width={350} height={350} />
          </div>
        </div>
      </div>
      <div className="max-ml:hidden w-1/4 flex flex-col gap-5">
        <div className="flex flex-col min-w-[250px] gap-3 p-4 sm:p-3 md:p-4 pr-1 h-auto text-xs sm:text-sm md:text-base border-2 rounded-xl">
          <div className="text-sm sm:text-base">Your packaging</div>
          <div className="flex flex-wrap min-w-fit items-center gap-2 text-xs sm:text-sm md:text-base">
            <LuCheck className="text-sm" />
            <span>Type :</span>
            <span className="font-semibold">Flat bottom pouch</span>
          </div>
        </div>

        <div className="flex flex-col min-w-[250px] gap-3 p-4 bg-[#FDD40A1A] text-sm border-2 rounded-xl">
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
