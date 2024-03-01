import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./lib/modal";
import { ModalProvider } from "./lib/contexts/ModalContext";
import "./lib/global.css";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <ModalProvider>
      <div className="App">
        <button onClick={openModal}>Create</button>
        <Modal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          children={"Hello World!"}
        />
      </div>
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
