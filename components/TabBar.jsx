"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { IoCheckmark } from "react-icons/io5";
import Link from "next/link";

export default function TabBar({ content }) {
  const pathName = usePathname();

  const tabList = Object.keys(content).map((ele) =>
    ele.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
  );

  const keyIndex = Object.keys(content).findIndex((ele) =>
    pathName.includes(ele)
  );

  return (
    <div className="flex w-full items-center flex-col w-max-[709px]">
      <Tabs
        aria-label="Options"
        color="default"
        variant="underlined"
        classNames={{
          tabList: "w-full relative rounded-none gap-0 p-0 border-divider",
          cursor: "w-full bg-transparent",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#2CB041]",
        }}
      >
        {tabList.map((item, i) => {
          const isSelectedOrBefore = i <= keyIndex;
          return (
            <Tab
              key={item}
              title={
                <Link
                  href={`/products/${item
                    .toLocaleLowerCase()
                    .replace(/ /g, "-")}`}
                  className="flex gap-2 items-center"
                >
                  <span
                    className={`relative max-w-fit min-w-min box-border whitespace-nowrap border-medium px-1 h-7 text-small rounded-full bg-transparent border-default aspect-square flex justify-center items-center ${
                      isSelectedOrBefore
                        ? "border-[#2CB041] text-[#2CB041]"
                        : ""
                    }`}
                  >
                    {isSelectedOrBefore ? <IoCheckmark /> : i + 1}
                  </span>
                  <span className="flex items-center">
                    <span
                      className={`text-base font-medium ${
                        isSelectedOrBefore ? "text-[#2CB041]" : ""
                      }`}
                    >
                      {item}
                    </span>
                    {i + 1 !== tabList.length && (
                      <span
                        className={`border ${
                          isSelectedOrBefore
                            ? "border-[#2CB041]"
                            : "border-[#240812]"
                        } border-dashed w-16 mx-auto`}
                      ></span>
                    )}
                  </span>
                </Link>
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
}
