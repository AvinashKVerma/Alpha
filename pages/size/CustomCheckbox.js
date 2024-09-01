import React from "react";
import { Checkbox, Chip, cn } from "@nextui-org/react";

export const CustomCheckbox = ({ size, statusColor, value }) => {
  return (
    <Checkbox
      aria-label={size.size}
      value={size.size} // This value will correspond to the size being selected
      classNames={{
        base: cn(
          "inline-flex h-[96px] border-b-2 max-w-full w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer gap-2 p-4 border-b-2",
          ""
        ),
        icon: "rounded-full",
        label: "w-full last:rounded-b-xl",
      }}
    >
      <div className="w-full flex justify-between text-[#03172B] gap-2">
        <div className="flex justify-evenly items-center gap-4">
          <Chip
            size="lg"
            className="relative max-w-fit min-w-min box-border whitespace-nowrap px-2 h-12 rounded-full bg-default aspect-square w-12 flex justify-center text-xl font-semibold text-[#2F4693] items-center"
          >
            <span className="p-4">{size.size}</span>
          </Chip>
          <span>{size.dimension}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-base font-normal">{size.weight}</span>
          <span className="text-base font-normal">{`( ${size.product} )`}</span>
        </div>
      </div>
    </Checkbox>
  );
};
