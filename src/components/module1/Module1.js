import React, { useEffect } from "react";
import data from "../../data/data.json";
import ModuleHeader from "../molecules/ModuleHeader";
import ProductDisplay from "../molecules/ProductDisplay";
import { connect } from "react-redux";
import * as moduleActions from "../../redux/actions/moduleActions";
import { bindActionCreators } from "@reduxjs/toolkit";

const Module1 = ({ modules, actions }) => {
  // console.log("What is modules?", modules);
  console.log("modules from the store in Module1 is ", modules);
  const module1 = modules.length > 0 ? modules[0].module1 : null;
  // console.log("What is module1?", module1);
  useEffect(() => {
    actions.loadModuleSuccess(data);
    //loadModules(data);
    // dispatch(moduleActions.loadModuleSuccess(data));
  });

  return (
    <div>
      <ModuleHeader
        label="Module1"
        linkTitle="Learn More"
        linkUrl="#"
        className="mt-3"
      />
      <ProductDisplay className="mt-4" />
      <ProductDisplay className="mt-4" />
      <ProductDisplay className="mt-4" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modules: state.modules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(moduleActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Module1);
