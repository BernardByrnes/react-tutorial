import React, { useState } from "react";
import PortalComponent from "./PortalComponent";
import Modal from "./Modal";

const Component2 = () => {
  let [showModal, updateShowModal] = useState(false);
  function displayModal() {
    updateShowModal(true);
  }
  function hideModal() {
    updateShowModal(false);
  }

  return (
    <div style={{ width: "300px", position: "relative" }}>
      <h3>This is Component 2</h3>
      <p>This is a paragraph</p>
      {/* <PortalComponent /> */}
      <button onClick={displayModal}>Show Modal</button>
      <Modal showModal={showModal} hideModal={hideModal} />
    </div>
  );
};
export default Component2;
