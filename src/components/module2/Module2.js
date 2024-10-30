import React from "react";
import data from "../../data/data.json";
import ModuleHeader from "../molecules/ModuleHeader";
import ProductDisplay from "../molecules/ProductDisplay";

const Module2 = () => {
  const module1 = data[1];
  return (
    <div>
      <ModuleHeader
        label="Module2"
        linkTitle="Learn More"
        linkUrl="#"
        className="mt-3"
      />
      <ProductDisplay className="mt-4" />
    </div>
  );
};

export default Module2;
