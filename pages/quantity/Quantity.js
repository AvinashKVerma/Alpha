"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button, CheckboxGroup, Link, Checkbox, cn } from "@nextui-org/react";
import Image from "next/image";
import { LuCheck } from "react-icons/lu";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Quantity() {
  const [groupSelected, setGroupSelected] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    getSizes();
  }, []);

  async function getSizes() {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/resources/list-packaging-type-size-quantity/1`
      );
      if (response.data.status === 200) {
        const responseData = response.data.data.map((ele) => {
          return {
            size: ele.quantityId.quantity,
            price: ele.quantityId.price,
            number: ele.quantityId.design_number,
            packaging_type_size_quantity_id:
              ele.packaging_type_size_quantity_id,
            quantity_id: ele.quantityId.quantity_id,
          };
        });
        setQuantities(responseData);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className="flex max-md:max-w-full mb-[72px] gap-5">
      <div className="grid sm:grid-cols-2 w-full h-fit gap-4">
        <div className="border-2 h-fit rounded-xl">
          <div className="flex flex-col w-full h-fit gap-0">
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
              <label
                className="group bg-[#F9F9F9] relative tap-highlight-transparent inline-flex h-[43px] max-w-full w-full rounded-t-xl m-0 hover:bg-content2 items-center justify-start cursor-pointer gap-2 p-2 border-b-2 max-md:first:rounded-t-xl last:rounded-xl"
                aria-label="1000"
              >
                <span
                  style={{
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    clipPath: "inset(50%)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: "1px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <input
                    aria-label="1000"
                    aria-labelledby=":R6pcvf6jt7qcq:"
                    type="checkbox"
                    value="1000"
                  />
                </span>
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
                      stroke="currentColor"
                      strokeDasharray="22"
                      strokeDashoffset="66"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polyline>
                  </svg>
                </span>
                <span
                  id=":R6pcvf6jt7qcq:"
                  className="relative text-foreground select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none w-full last:rounded-b-xl"
                >
                  <div className="w-full flex justify-between text-[#808b98] gap-2">
                    <div className="flex justify-evenly items-center gap-4">
                      <div className="flex flex-col gap-2 justify-center items-center">
                        <span className="text-xs font-normal">Size</span>
                      </div>
                    </div>
                    <span className="text-xs mobile:ml-12 max-mobile:mr-[73px] font-normal">
                      Price
                    </span>
                    <div className="max-mobile:hidden text-xs font-normal">
                      No of Design
                    </div>
                  </div>
                </span>
              </label>
              {quantities.map((ele, i) => {
                return (
                  <Checkbox
                    key={i}
                    aria-label={ele.size}
                    classNames={{
                      base: cn(
                        "flex px-5 max-w-full w-full m-0",
                        "hover:bg-content2 items-baseline justify-start",
                        "cursor-pointer gap-2 p-2 sm:p-5 last:border-none border-b-2 last:rounded-b-xl"
                      ),
                      icon: "rounded-full",
                      label: "w-full last:rounded-b-xl",
                    }}
                    value={ele}
                  >
                    <div className="w-full flex justify-between text-[#03172B] gap-2">
                      <div className="flex flex-col justify-evenly items-center">
                        <div className="flex mobile:flex-col gap-2 justify-start items-start">
                          <span className="text-lg max-mobile:text-sm font-bold">
                            {ele.size}
                          </span>
                          <span className="px-2 bg-[#1CC6181A] max-mobile:text-xs max-mobile:font-semibold text-[#1CC618] rounded-full">
                            50% off
                          </span>
                        </div>
                        <span className="text-xs font-medium mobile:hidden w-full">
                          <span className="text-[#808b98]">No. of Design:</span>{" "}
                          {ele.number}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-medium">
                          {Math.floor(parseFloat(ele.price))}
                        </span>
                        <span className="text-lg text-[#03172B80] font-medium">{`(₹50/piece)`}</span>
                      </div>
                      <div className="flex items-center gap-1 max-mobile:hidden">
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
      <div className="max-ml:hidden w-1/4 flex flex-col gap-5">
        <div className="flex flex-col gap-3 p-4 text-sm border-2 rounded-xl min-w-[250px]">
          <div className="">Your packaging</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 min-w-fit">
              <LuCheck />
              <span> Type :</span>
            </div>
            <span className="font-semibold"> Flat bottom pouch</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 min-w-fit">
              <LuCheck />
              <span> Size :</span>
            </div>
            <span className="font-semibold">L</span>
            <span className="">{`(265 x 190 x 110 mm)`}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4 bg-[#FDD40A1A] min-w-[250px] text-sm border-2 rounded-xl">
          <span>Note</span>
          <span>
            When making your purchase, opting for a higher quantity can
            significantly increase your savings. By buying in bulk, you often
            get a better deal per unit, allowing you to save more in the long
            run.
          </span>
        </div>
        <Link
          isDisabled={groupSelected.length === 0}
          href={`material?quantity_id=${groupSelected[0]?.packaging_type_size_quantity_id}`}
          className="w-full min-w-[250px] flex justify-center items-center rounded-lg text-lg font-bold bg-[#253670] text-white h-14"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
