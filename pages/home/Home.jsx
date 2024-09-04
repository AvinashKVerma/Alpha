import React from "react";
import { Image, Link } from "@nextui-org/react";

export default function Home() {
  const products = [
    {
      img: "Rectangle20.png",
      name: "Flat Bottom Pouch",
      price: "₹ 0.473 - ₹ 0.930",
    },
    {
      img: "Rectangle21.png",
      name: "Stand-up pouch",
      price: "₹ 0.473 - ₹ 0.930",
    },
    {
      img: "Rectangle22.png",
      name: "Three Side Seal Pouch",
      price: "₹ 0.473 - ₹ 0.930",
    },
    {
      img: "Rectangle23.png",
      name: "Center Seal",
      price: "₹ 0.473 - ₹ 0.930",
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-[1,291px] max-mobile:px-[30px] mobile:gap-[60px] gap-4 mb-4">
      <div className="flex flex-col w-full mobile:justify-start">
        <div className="text-[10px] text-[#081F3866] mobile:hidden">
          All Products
        </div>
        <h1 className="mobile:text-5xl mobile:font-bold text-xs font-medium mobile:my-5">
          Packaging type
        </h1>
      </div>
      <div className="grid grid-cols-4 max-mobile:grid-cols-2 gap-5 mobile:gap-8">
        {products.map((ele) => {
          return (
            <Link
              href={`${ele.name
                .toLocaleLowerCase()
                .replace(" ", "-")}/packaging-type`}
              key={ele.name}
              className="flex flex-col mobile:gap-5 gap-3"
            >
              <Image src={ele.img} alt="ele" />
              <div className="w-full flex flex-col max-mobile:gap-3 text-left">
                <div className="font-medium max-mobile:text-sm max-mobile:font-medium">
                  {ele.name}
                </div>
                <div className="font-semibold px-1 flex items-center justify-center bg-gray-200 text-xs mobile:text-base text-[#143761] mobile:w-[140px] h-[22px] rounded-lg gap-0 ">
                  {ele.price}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
