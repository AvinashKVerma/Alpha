import React from "react";
import Productnav from "@/components/ProductNav";

export default function layout({ children }) {
  return (
    <>
      <Productnav />
      {children}
    </>
  );
}
