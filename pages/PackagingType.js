"use client";
import React from "react";
import { Pouch } from "@/components/Pouch";
import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
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
      price: "0.930",
      quantity: 500,
    },
    {
      icon: <Pouch color="#4293B7" fill="#ebedf5" />,
      description:
        "Our flat bottom pouches are particularly durable and resistant. Because of the integrated aroma valve,  these pouches are the best fit for coffee products.",
      name: "Stand-up Pouch | Doypack",
      time: "4-7 weeks",
      price: "0.930",
      quantity: "500",
    },
    {
      icon: <Pouch color="#4293B7" fill="#ebedf5" />,
      description:
        "Our flat bottom pouches are particularly durable and resistant. Because of the integrated aroma valve,  these pouches are the best fit for coffee products.",
      name: "Three Side Seal Pouch",
      time: "4-7 weeks",
      price: "0.930",
      quantity: 500,
    },
    {
      icon: <Pouch color="#4293B7" fill="#ebedf5" />,
      description:
        "Our flat bottom pouches are particularly durable and resistant. Because of the integrated aroma valve,  these pouches are the best fit for coffee products.",
      name: "Center Seal",
      time: "4-7 weeks",
      price: "0.930",
      quantity: 500,
    },
  ];
  return (
    <div className={`grid grid-cols-4 gap-4 ${poppins.className}`}>
      {productList.map((item, index) => {
        return (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="broder-[#E45971] p-4"
          >
            <CardBody className="overflow-visible p-0 flex gap-5 justify-center items-center flex-col">
              <div className="mt-2">{item.icon}</div>
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <span className="text-center text-sm">{item.description}</span>
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
        );
      })}
    </div>
  );
}
