import React from "react";
import data from "../../data/data.json";
import ModuleHeader from "../molecules/ModuleHeader";

const Module1 = () => {
  console.log("hitting module 1", data);
  return <ModuleHeader label="Module1" linkTitle="LearnMore" linkUrl="#" />;
};

export default Module1;
