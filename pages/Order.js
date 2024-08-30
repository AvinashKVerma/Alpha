import { Image } from "@nextui-org/react";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

export default function Order() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="flex justify-center items-center mb-6">
        <Image
          src="/orderSucceed.png"
          alt="Order Successful"
          width={183.78}
          height={143.18}
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Order successful
      </h2>
      <p className="text-[#00000080] text-base mb-6 text-center">
        Our support team will contact you shortly within 24 hours. Here’s your
        order details
      </p>
      <div className="bg-[#f4f9fb] p-6 rounded-lg flex flex-col gap-3 shadow-md mb-6 w-full max-w-md text-left">
        <span className="text-sm text-[#081F38A6]">Your Order</span>

        <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-3">
          <IoCheckmark className="self-center" />
          <span className="font-semibold text-gray-800">Packaging type</span>
          <span className="text-gray-700">: Flat Bottom Pouch</span>

          <IoCheckmark className="self-center" />
          <span className="font-semibold text-gray-800">Size</span>
          <span className="text-gray-700">: L (265 x 190 x 110 mm)</span>

          <IoCheckmark className="self-center" />
          <span className="font-semibold text-gray-800">Quantity</span>
          <span className="text-gray-700">: 2000</span>

          <IoCheckmark className="self-center" />
          <span className="font-semibold text-gray-800">Design</span>
          <span className="text-gray-700">: Added 3 design</span>

          <IoCheckmark className="self-center" />
          <span className="font-semibold text-gray-800">Material</span>
          <span className="text-gray-700">: Matte look</span>
        </div>
      </div>

      <p className="text-gray-700">
        For order related queries :{" "}
        <a href="tel:+910235602356" className="text-blue-500">
          +91 02356 02356
        </a>
      </p>
    </div>
  );
}
