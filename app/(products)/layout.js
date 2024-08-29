import React from "react";
import TabBar from "@/components/TabBar";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import NavDetails from "@/components/NavDetails";

export default function layout({ children }) {
  const content = {
    "packaging-type": {
      title: "Common features",
      value: ["Zipper", "V notch"],
    },
    size: {
      title: "Get a discount by choosing bigger sizes and save more",
    },
  };
  return (
    <div>
      <div className="my-8">
        <TabBar />
      </div>
      <div>
        <div className="flex gap-3 mb-8">
          <IoArrowBackCircleOutline size={24} color="#081F38" />
          <NavDetails content={content} heading={"Packaging type"} />
        </div>
        {children}
      </div>
    </div>
  );
}
