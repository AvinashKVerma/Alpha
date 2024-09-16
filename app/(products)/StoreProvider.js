"use client";
import { makeStore } from "@/lib/Store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist"; // Import persistStore

export default function StoreProvider({ children }) {
  const storeRef = useRef(makeStore()); // Create store once
  const persistorRef = useRef(persistStore(storeRef.current)); // Create persistor linked to the store

  return (
    <Provider store={storeRef.current}>
      <PersistGate
        loading={null}
        persistor={persistorRef.current} // Use the correct persistor
        onBeforeLift={() => {
          console.log("Redux Persist has loaded the state");
        }}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
