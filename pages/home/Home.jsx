import React from "react";
import { Image } from "@nextui-org/react";

export default function Home() {
  const products = [
    {
      img: "Rectangle20.png",
      name: "Flat Bottom Pouch",
      price: "$ 0.473 - $ 0.930 ",
    },
    {
      img: "Rectangle21.png",
      name: "Stand-up pouch",
      price: "$ 0.473 - $ 0.930 ",
    },
    {
      img: "Rectangle22.png",
      name: "Three Side Seal Pouch",
      price: "$ 0.473 - $ 0.930 ",
    },
    {
      img: "Rectangle23.png",
      name: "Center Seal",
      price: "$ 0.473 - $ 0.930 ",
    },
  ];
  return (
    <div className="flex flex-col items-center max-w-[1,291px] gap-[60px]">
      <h1 className="text-5xl font-bold my-5">Packaging type</h1>
      <div className="grid grid-cols-4 gap-8">
        {products.map((ele) => {
          return (
            <div key={ele.name} className="flex flex-col gap-5">
              <Image src={ele.img} alt="ele" />
              <div>
                <div className="font-medium">{ele.name}</div>
                <div className="font-semibold text-[#2362A7]">{ele.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
