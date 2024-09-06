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
    <div className="flex flex-col items-center max-w-[1,291px] max-mobile:px-[30px] lg:gap-[60px] md:gap-8 gap-4 mb-4">
      <div className="flex flex-col w-full mobile:items-center mobile:justify-start">
        <div className="text-[10px] text-[#081F3866] mobile:hidden">
          All Products
        </div>
        <h1 className="lg:text-5xl sm:text-3xl text-xl mobile:font-bold max-mobile:text-xs font-medium">
          Packaging type
        </h1>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-3 max-xs:grid-cols-2 gap-5 mobile:gap-8">
        {products.map((ele) => {
          return (
            <Link
              href={`${ele.name
                .toLocaleLowerCase()
                .replace(" ", "-")}/packaging-type`}
              key={ele.name}
              className="flex flex-col ml:gap-5 gap-2"
            >
              <Image src={ele.img} alt="ele" />
              <div className="w-full flex flex-col gap-1 max-mobile:gap-3 text-left">
                <div className="font-medium max-lg:text-sm max-mobile:font-medium">
                  {ele.name}
                </div>
                <div className="font-semibold flex items-center justify-center bg-gray-200 max-mobile:text-xs max-ml:w-[130px] max-ml:px-[5px] max-ml:py-[2px] max-lg:text-sm text-[#143761] lg:w-[170px] px-[10px] py-[5px] rounded-lg gap-0 ">
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
