"use client";
import React from "react";
import { Pouch } from "@/components/Pouch";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function ProductsDetails() {
  const productList = [
    {
      icon: <Pouch color="#4293B7" fill="#ebedf5" />,
      description:
        "Our flat bottom pouches are particularly durable and resistant. Because of the integrated aroma valve,  these pouches are the best fit for coffee products.",
      name: "Flat Bottom Pouch",
      time: "4-7 weeks",
      price: "₹ 0.930",
      quantity: 500,
    },
    {
      icon: <Pouch color="#4293B7" fill="#ebedf5" />,
      description:
        "Our flat bottom pouches are particularly durable and resistant. Because of the integrated aroma valve,  these pouches are the best fit for coffee products.",
      name: "Stand-up Pouch | Doypack",
      time: "4-7 weeks",
      price: "₹ 0.930",
      quantity: "500",
    },
    {
      icon: <Pouch color="#4293B7" fill="#ebedf5" />,
      description:
        "Our flat bottom pouches are particularly durable and resistant. Because of the integrated aroma valve,  these pouches are the best fit for coffee products.",
      name: "Three Side Seal Pouch",
      time: "4-7 weeks",
      price: "₹ 0.930",
      quantity: 500,
    },
    {
      icon: <Pouch color="#4293B7" fill="#ebedf5" />,
      description:
        "Our flat bottom pouches are particularly durable and resistant. Because of the integrated aroma valve,  these pouches are the best fit for coffee products.",
      name: "Center Seal",
      time: "4-7 weeks",
      price: "₹ 0.930",
      quantity: 500,
    },
  ];
  return (
    <div
      className={`grid grid-cols-1 mobile:grid-cols-4 gap-4 ${poppins.className}`}
    >
      {productList.map((item, index) => {
        return (
          <Link
            key={index}
            className="max-h-[394px]"
            href={`/${item.name.toLocaleLowerCase().replace(" ", "-")}/size`}
          >
            <Card
              shadow="sm"
              className="broder-[#E45971] p-4 max-h-[394px] overflow-y-scroll"
            >
              <CardBody className="p-0">
                <div className="flex gap-5 items-start mobile:justify-center mobile:items-center mobile:flex-col overflow-y-scroll scrollbar-hide">
                  <div className="mobile:pt-5 w-fit">{item.icon}</div>
                  <div className="flex flex-col gap-5 max-mobile:gap-[6px]">
                    <div className="mobile:text-xl text-base font-semibold text-center">
                      {item.name}
                    </div>
                    <span className="mobile:text-center text-xs mobile:text-sm line-clamp-3">
                      {item.description}
                    </span>
                    <span className="text-xs font-semibold line-clamp-3">
                      See More
                    </span>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="text-small p-0 flex-col justify-between border rounded-lg mt-5">
                <div className="flex justify-between w-full p-3">
                  <span className="text-sm font-normal">Minimum Quantity:</span>
                  <span className="font-medium">{item.quantity}</span>
                </div>
                <Divider />
                <div className="flex justify-between w-full p-3">
                  <span className="text-sm font-normal">Price:</span>
                  <span className="font-medium">{item.price}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
