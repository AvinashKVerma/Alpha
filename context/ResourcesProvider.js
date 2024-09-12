import React, { createContext, Suspense, useState } from "react";

const ResourcesContext = createContext({
  resources: {},
  setResources: () => {},
});

export default ResourcesContext;

export function ResourcesProvider({ children }) {
  const [resources, setResources] = useState({
    packaging_id: "",
    packaging_type_size_id: "",
    quantity_id: "",
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResourcesContext.Provider value={{ resources, setResources }}>
        {children}
      </ResourcesContext.Provider>
    </Suspense>
  );
}
