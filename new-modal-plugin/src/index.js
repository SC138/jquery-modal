import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./lib/modal.jsx";
import "./lib/global.css";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const test = false;
  const message = test ? "Employee Created!" : "test";

  return (
    <div className="App">
      <button onClick={openModal}>Create</button>
      <Modal isOpen={modalIsOpen} closeModal={closeModal} children={message} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
