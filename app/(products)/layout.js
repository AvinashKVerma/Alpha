"use client";
import React from "react";
import Productnav from "@/components/ProductNav";
import StoreProvider from "./StoreProvider";

export default function Layout({ children }) {
  return (
    <div className="max-mobile:px-5 h-full w-full">
      <div className="max-mobile:hidden">
        <Productnav />
      </div>
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
