"use client";
import React from "react";
import { Tabs, Tab, Chip } from "@nextui-org/react";

export default function TabBar() {
  const tabList = ["Packing type", "Size", "Quantity", "Design", "Material"];
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
        {tabList.map((ele, i) => {
          return (
            <Tab
              key={ele}
              title={
                <div className="flex gap-2 items-center">
                  <span className="relative max-w-fit min-w-min box-border whitespace-nowrap border-medium px-1 h-7 text-small rounded-full bg-transparent border-default text-foreground aspect-square flex justify-center items-center group-data-[selected=true]:border-[#2CB041] group-data-[selected=true]:text-[#2CB041]">
                    {i + 1}
                  </span>
                  <span className="flex items-center">
                    <span className="text-base font-medium">{ele}</span>
                    {i + 1 !== tabList.length && (
                      <span className="border border-[#240812] border-dashed w-16 mx-auto"></span>
                    )}
                  </span>
                </div>
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
}
