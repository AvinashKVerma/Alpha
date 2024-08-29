import React from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";

export const CustomCheckbox = ({ size, value }) => {
  return (
    <Checkbox
      aria-label={size.size}
      classNames={{
        base: cn(
          "inline-flex px-5 h-[96px] border-b-2 max-w-full w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer gap-2 p-4 border-b-2",
          "data-[selected=true]:border-primary"
        ),
        icon: "rounded-full",
        label: "w-full last:rounded-b-xl",
      }}
      value={value}
    >
      <div className="w-full flex justify-between text-[#03172B] gap-2">
        <div className="flex justify-evenly items-center gap-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            <span className="text-lg font-bold">{size.size}</span>
            <span className="px-2 bg-[#1CC6181A] text-[#1CC618] rounded-full">
              50% off
            </span>
          </div>
          <span>{size.dimension}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-medium">{size.price}</span>
          <span className="text-lg text-[#03172B80] font-medium">{`($50/piece)`}</span>
        </div>
        <div className="flex items-center gap-1">{size.number}</div>
      </div>
    </Checkbox>
  );
};
