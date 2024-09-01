import HomepageNavbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <HomepageNavbar />
      {children}
    </>
  );
}
