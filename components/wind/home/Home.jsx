"use client";
import React, { useEffect, useState } from "react";
import { Image, Link } from "@nextui-org/react";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getPackagingType();
  }, []);

  async function getPackagingType() {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/resources/packaging-type`
      );
      if (response.status === 200) {
        const responseData = response.data.data.map((ele) => {
          return {
            packaging_id: ele.packaging_id,
            icon: ele.packaging_image_icon_url,
            description: ele.description,
            name: ele.name,
            time: "4-7 weeks",
            minimum_qty: ele.minimum_qty,
            price: "₹ 0.930",
            packaging_image_url: ele.packaging_image_url,
            quantity: ele.minimum_qty,
          };
        });
        setProductList(responseData);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  }
  return (
    <div className="flex flex-col items-center max-w-[1,291px] max-mobile:px-[30px] lg:gap-[60px] md:gap-8 gap-4 mb-4">
      <div className="flex flex-col w-full xs:items-center sm:justify-start">
        <div className="text-[10px] mobile:text-xs xs:text-sm text-[#081F3866] xs:hidden">
          All Products
        </div>
        <h1 className="lg:text-5xl text-3xl mobile:font-bold max-mobile:text-xs font-medium">
          Packaging type
        </h1>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-3 max-xs:grid-cols-2 gap-5 mobile:gap-8">
        {productList.map((ele, i) => {
          return (
            <Link
              href={`${ele.name
                .toLocaleLowerCase()
                .replace(" ", "-")}/packaging-type`}
              key={i}
              className="flex flex-col ml:gap-5 gap-2"
            >
              <Image
                className="w-full max-w-full"
                src={ele.packaging_image_url}
                alt={ele.name}
              />
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
