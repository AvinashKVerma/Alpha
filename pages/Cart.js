"use client";
import DeleteIcon from "@/components/DeleteIcon";
import {
  Button,
  Divider,
  Image,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function Cart() {
  const [value, setValue] = useState({
    qunatity: "Quantity :500",
    size: "Size : S",
  });
  const handleSelectionChange = (e) => {
    const { name, value } = e.target;
    setValue((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mb-[66px] flex max-lg:flex-col gap-6 mobile:mt-10">
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          <h1 className="font-bold text-xl">Your Cart</h1>
          <div className="flex gap-5 p-3 mobile:p-3 sm:p-5 shadow rounded-lg">
            <div className="flex w-full items-start gap-3">
              <div>
                <Image
                  src={"/cart.png"}
                  alt="Cart Item"
                  className="max-sm:hidden"
                  objectfit="cover"
                  width={161.17}
                  height={143}
                />
                <Image
                  src={"/cart.png"}
                  alt="Cart Item"
                  className="sm:hidden w-[71px]"
                  objectfit="cover"
                  width={71}
                  height={63}
                />
              </div>
              <div className="mobile:flex-grow max-mobile:max-w-[213px] gap-4 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs mobile:text-sm sm:text-lg font-medium">
                      Flat Bottom Pouch
                    </span>
                    <span className="flex mobile:text-sm max-mobile:hidden gap-3 text-[#9FA9B3]">
                      <span>Design file : Boxdesign.pdf |</span>
                      <span>Material : Transparent</span>
                    </span>
                    <span className="flex text-xs mobile:hidden gap-3 text-[#9FA9B3]">
                      Packing : Flat bottom | Size : S | Quantity : 1000 |
                      Design : 2 | Material : Matte look
                    </span>
                    <span className="mobile:hidden flex items-center gap-[6px]">
                      <span className="text-base font-semibold">₹ 30.36</span>
                      <span className="text-xs line-through">₹ 30.36</span>
                    </span>
                  </div>
                  <div className="max-sm:hidden min-w-fit flex flex-col gap-2">
                    <span className="text-lg font-medium">₹ 30.36</span>
                    <span className="flex gap-3 line-through text-[#9FA9B3]">
                      ₹ 30.36
                    </span>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex flex-wrap md:flex-nowrap gap-4">
                      <Select
                        aria-label="Number of orders"
                        name="qunatity"
                        className="min-w-[116px] text-xs w-fit mobile:max-w-xs -xs:h-8 mobile:h-10"
                        classNames={{
                          mainWrapper: "w-fit min-w-[80px]",
                          innerWrapper: "w-fit min-w-[80px]",
                          base: "text-xs",
                          trigger: "min-h-9 rounded-md h-9 gap-1 px-1",
                          selectedIcon: "static",
                          value: "max-mobile:text-xs flex justify-center",
                          selectorIcon: "static p-0",
                          listboxWrapper: "w-fit",
                          listbox: "p-0 w-fit",
                          popoverContent: "text-[8px]",
                        }}
                        selectedKeys={[value.qunatity]}
                        onChange={handleSelectionChange}
                      >
                        <SelectItem className="text-[8px] roun" key="">
                          Select
                        </SelectItem>
                        {[
                          "Quantity :500",
                          "Quantity :1000",
                          "Quantity :1500",
                          "Quantity :2000",
                        ].map((ele) => (
                          <SelectItem
                            classNames={{
                              listboxWrapper: "text-xs max-w-fit",
                              base: "text-xs",
                              title: "text-xs p-0",
                              selectedIcon: "hidden",
                              value: "text-xs p-0",
                            }}
                            key={ele}
                          >
                            {ele}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex w-28 flex-wrap md:flex-nowrap gap-4">
                      <Select
                        aria-label="Sizes"
                        name="size"
                        className="min-w-fit text-xs w-fit mobile:max-w-xs -xs:h-8 mobile:h-10"
                        classNames={{
                          mainWrapper: "w-fit min-w-[40px]",
                          innerWrapper: "w-fit min-w-[40px]",
                          base: "text-xs",
                          trigger: "min-h-9 rounded-md h-9 gap-1 px-1",
                          selectedIcon: "static",
                          value: "max-mobile:text-xs flex justify-center",
                          selectorIcon: "static p-0",
                          listboxWrapper: "w-fit",
                          content: "rounded-md",
                          listbox: "p-0 w-fit",
                          popoverContent: "text-[8px]",
                        }}
                        selectedKeys={[value.size]}
                        onChange={handleSelectionChange}
                      >
                        <SelectItem key={""}>Select</SelectItem>
                        {[
                          "Size : S",
                          "Size : M",
                          "Size : XL",
                          "Size : 2XL",
                        ].map((ele) => (
                          <SelectItem
                            classNames={{
                              content: "rounded-md",
                              listboxWrapper: "text-xs max-w-fit",
                              base: "text-xs",
                              title: "text-xs p-0",
                              selectedIcon: "hidden",
                              value: "text-xs p-0",
                            }}
                            key={ele}
                          >
                            {ele}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="max-sm:hidden flex items-center gap-2">
                    <DeleteIcon /> Delete
                  </div>
                </div>
                <Divider className="sm:hidden" />
                <div className="sm:hidden text-[#9FA9B3] flex justify-end items-center gap-2">
                  <DeleteIcon /> Delete
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <h1 className="text-base font-semibold mobile:font-bold mobile:text-xl">
            Price details
          </h1>
          <div className="flex max-mobile:flex-col gap-5 p-5 shadow rounded-lg">
            <div className="flex flex-col justify-between w-full gap-5">
              <span className="flex justify-between w-full">
                <span className="text-[#03172B96]">Total MRP</span>
                <span>₹ 1098</span>
              </span>
              <span className="flex justify-between w-full">
                <span className="text-[#03172B96]">Price per item</span>
                <span>₹ 23.36</span>
              </span>
              <span className="flex justify-between w-full">
                <span className="text-[#03172B96]">Discount on MRP</span>
                <span className="text-[#1CC618]">- ₹ 549</span>
              </span>
              <span className="flex justify-between w-full">
                <span className="text-[#03172B96]">Delivery fee</span>
                <span>₹ 50</span>
              </span>
              <Divider />
              <span className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹ 1023</span>
              </span>
            </div>
          </div>
          <Link className="w-full max-mobile:hidden" href="/order">
            <Button className="text-lg w-full font-bold bg-[#253670] text-white h-14">
              Confirm
            </Button>
          </Link>
        </div>
      </div>
      <div className="mobile:hidden fixed bg-white left-0 bottom-0 flex items-center justify-between w-full px-[30px] py-[14px]">
        <div>Price</div>
        <Link href="/order">
          <Button className="text-xs w-[88px] font-medium bg-[#143761] rounded-md text-white h-[38px]">
            Confirm
          </Button>
        </Link>
      </div>
    </>
  );
}
