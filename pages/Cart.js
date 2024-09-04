"use client";
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
    qunatity: "Quantity : 500",
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
    <div className="flex gap-6 mt-10">
      <div className="w-3/5 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Your Cart</h1>
        <div className="flex gap-5 p-5 shadow rounded-lg">
          <Image
            src={"/cart.png"}
            alt="Cart Item"
            objectfit="cover"
            width={161.17}
            height={143}
          />
          <div className="flex-grow flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium">Flat Bottom Pouch</span>
              <span className="flex gap-3 text-[#9FA9B3]">
                <span>Design file : Boxdesign.pdf |</span>
                <span>Material : Transparent</span>
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex w-40 flex-wrap md:flex-nowrap gap-4">
                <Select
                  aria-label="Number of orders"
                  name="qunatity"
                  className="max-w-xs h-10"
                  classNames={{ trigger: "min-h-9 h-9" }}
                  selectedKeys={[value.qunatity]}
                  onChange={handleSelectionChange}
                >
                  {[
                    "Quantity : 500",
                    "Quantity : 1000",
                    "Quantity :1500",
                    "Quantity :2000",
                  ].map((ele) => (
                    <SelectItem key={ele}>{ele}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex w-28 flex-wrap md:flex-nowrap gap-4">
                <Select
                  aria-label="Sizes"
                  name="size"
                  className="max-w-xs h-10"
                  classNames={{ trigger: "min-h-9 h-9" }}
                  selectedKeys={[value.size]}
                  onChange={handleSelectionChange}
                >
                  {["Size : S", "Size : M", "Size : XL", "Size : 2XL"].map(
                    (ele) => (
                      <SelectItem key={ele}>{ele}</SelectItem>
                    )
                  )}
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium">₹ 30.36</span>
              <span className="flex gap-3 text-[#9FA9B3]">₹ 30.36</span>
            </div>
            <div className="flex gap-4">Delete</div>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Price details</h1>
        <div className="flex gap-5 p-5 shadow rounded-lg">
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
              <span>- ₹ 549</span>
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
        <Link className="w-full" href="/order">
          <Button className="text-lg w-full font-bold bg-[#253670] text-white h-14">
            Confirm
          </Button>
        </Link>
      </div>
    </div>
  );
}
