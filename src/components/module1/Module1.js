import React, { useEffect } from "react";
import ModuleHeader from "../molecules/ModuleHeader";
import { connect } from "react-redux";
import * as moduleActions from "../../redux/actions/moduleActions";
import { bindActionCreators } from "@reduxjs/toolkit";
import Spinner from "../atoms/Spinner";
import ProductList from "../organisms/ProductList";

const Module1 = ({ modules, actions }) => {
  const module1 = modules?.length > 0 ? modules[0].module1 : null;
  useEffect(() => {
    actions.loadModules().catch((error) => {
      alert("loading modules failed" + error);
    });
  }, []);
  if (!module1) {
    return <Spinner />;
  }
  return (
    <div>
      <ModuleHeader
        label="Product List"
        linkTitle={module1.linkTitle}
        linkUrl={module1.linkUrl}
        className="mt-3"
      />
      <ProductList
        cols={["Title", "Image", "Description"]}
        displayContent={module1.subContent}
      />
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
