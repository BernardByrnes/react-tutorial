import React from "react";
import ReactDom from "react-dom";

const PortalComponent = () => {
  return ReactDom.createPortal(
    <h1>This is Portal Component</h1>,
    document.getElementById("root-portal")
  );
};
export default PortalComponent;
