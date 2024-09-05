import React from "react";
import Productnav from "@/components/ProductNav";

export default function layout({ children }) {
  return (
    <div className="max-mobile:px-5 h-full">
      <div className="max-mobile:hidden">
        <Productnav />
      </div>
      {children}
    </div>
  );
}
