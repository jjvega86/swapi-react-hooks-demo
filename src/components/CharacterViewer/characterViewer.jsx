import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const style = {
  margin: "6px 0px 6px 0px",
  padding: "100px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "gray",
  borderRadius: "5px",
  background: "rgba(76, 175, 80, 0.3)",
};

//TODO: Add modal to view Character's birth year on a button click
//TODO: Refactor for a single use Modal component that can be used anywhere
const CharacterViewer = ({ name, birthYear }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);
  return (
    <div style={style}>
      <h1>{name}</h1>
      <button onClick={showModal} className="btn btn-success">
        Click to view birth year!
      </button>
      <Modal show={isOpen}>
        <Modal.Header>More Info for {name}</Modal.Header>
        <Modal.Body>Their birth year is {birthYear}</Modal.Body>
        <button
          style={{ width: "100px", justifyContent: "center" }}
          onClick={hideModal}
          className="btn btn-success"
        >
          Close
        </button>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default CharacterViewer;
