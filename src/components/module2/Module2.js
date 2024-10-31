import React, { useEffect } from "react";
import ModuleHeader from "../molecules/ModuleHeader";
import ProductDisplay from "../molecules/ProductDisplay";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import Spinner from "../atoms/Spinner";
import * as moduleActions from "../../redux/actions/moduleActions";

const Module2 = ({ modules, actions }) => {
  const module2 = modules?.length > 0 ? modules[1].module2 : null;
  const displayContent = module2
    ? {
        imageUrl: module2.imageUrl,
        title: module2.title,
        description: module2.subtitle,
      }
    : null;
  useEffect(() => {
    actions.loadModules().catch((error) => {
      alert("loading modules failed" + error);
    });
  }, []);
  if (!module2) {
    return <Spinner />;
  }
  return (
    <div>
      <ModuleHeader
        label={module2.title}
        linkTitle={module2.linkTitle}
        linkUrl={module2.linkUrl}
        className="mt-3"
      />
      <ProductDisplay className="mt-4" displayContent={displayContent} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Module2);
