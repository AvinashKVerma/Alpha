"use client";
import { Button, Image, Link } from "@nextui-org/react";
import axios from "axios";
import { Poppins } from "next/font/google";
import React, { useEffect, useState } from "react";
import { LuCheck } from "react-icons/lu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Material() {
  const [selectedMaterial, setSelectedMaterial] = useState(null); // State to track selected material
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getSizes();
  }, []);

  async function getSizes() {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/resources/material`);
      if (response.data.status === 200) {
        const responseData = response.data.data.map((ele) => {
          return {
            createdAt: ele.createdAt,
            delete_flag: ele.delete_flag,
            img: "/Material.png",
            // img: ele.material_image_url,
            name: ele.name,
            type: ele.description,
            price: "₹" + ele.price,
            material_id: 1,
            updatedAt: "2024-09-10T09:39:19.000Z",
          };
        });
        setMaterials(responseData);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  }

  const materialList = [
    {
      img: "/Material.png",
      name: "Matte Look",
      type: "Smooth, non-reflective, sleek finish",
      price: "₹ 0.473 - ₹ 0.930",
    },
    {
      img: "/Material.png",
      name: "Glossy Look",
      type: "Shiny, reflective finish",
      price: "₹ 0.473 - ₹ 0.930",
    },
  ];

  const handleSelect = (index) => {
    setSelectedMaterial(index); // Update the selected material
  };

  return (
    <div
      className={`${poppins.className} flex max-mobile:flex-col h-full justify-between max-mobile:max-w-screen-mobile gap-5 mb-[72px]`}
    >
      <div className="grid max-mobile:grid-cols-1 mobile:grid-cols-2 w-full ml:w-4/5 gap-5 flex-col">
        {materials.map((ele, i) => {
          return (
            <div
              className={`text-black h-fit p-3 cursor-pointer transition-all duration-300 hover:bg-slate-100 ${
                selectedMaterial === ele.material_id
                  ? "bg-[#ebeeef] shadow-lg border-2"
                  : "bg-white"
              }`}
              key={i}
            >
              <div
                className="flex gap-4"
                onClick={() => handleSelect(ele.material_id)} // On click, select this material
              >
                <Image
                  src={ele.img}
                  alt={ele.name}
                  objectfit="cover"
                  width={61}
                  height={61}
                />
                <div className="flex flex-col gap-2">
                  <span className="text-sm mobile:text-lg font-semibold leading-none">
                    {ele.name}
                  </span>
                  <span className="text-xs sm:text-sm">{ele.type}</span>
                  <span className="text-xs sm:text-base p-1 text-center w-fit rounded-full px-2 align-middle bg-[#2F46931A] font-semibold">
                    {ele.price}
                  </span>
                  <span className="text-xs sm:text-base p-1 align-middle">
                    View detail
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-ml:hidden w-1/4 flex flex-col gap-5">
        <div className="flex flex-col gap-3 p-4 pr-1 min-w-[250px] text-sm border-2 rounded-xl">
          <div>Your packaging</div>
          <div className="flex items-center gap-2">
            <LuCheck />
            <span> Type :</span>
            <span className="font-semibold"> Flat bottom pouch</span>
          </div>
          <div className="flex items-center gap-2">
            <LuCheck />
            <span> Size :</span>
            <span className="font-semibold">L</span>
            <span className="">{`(265 x 190 x 110 mm)`}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuCheck />
            <span> Quantity :</span>
            <span className="font-semibold">2000</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 min-w-[250px] p-4 bg-[#FDD40A1A] text-sm border-2 rounded-xl">
          <span>Note</span>
          <span>
            When making your purchase, opting for a higher quantity can
            significantly increase your savings. By buying in bulk, you often
            get a better deal per unit, allowing you to save more in the long
            run.
          </span>
        </div>
        <Link
          isDisabled={!selectedMaterial}
          href={`/cart?material_id=${selectedMaterial}`}
          className="w-full min-w-[250px] flex justify-center items-center rounded-lg text-lg font-bold bg-[#253670] text-white h-14"
        >
          <Button className="text-lg w-full font-bold bg-[#253670] text-white h-14">
            Confirm
          </Button>
        </Link>
      </div>
    </div>
  );
}
