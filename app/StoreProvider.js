"use client";
import { addToCart } from "@/lib/store/features/CartSlice";
import { makeStore } from "@/lib/store/Store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // storeRef.current.dispatch(
    //   addToCart({ id: 1, name: "Product 1", price: 100 })
    // );
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
