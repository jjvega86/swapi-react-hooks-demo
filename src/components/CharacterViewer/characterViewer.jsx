import React from "react";

const style = {
  margin: "6px 0px 6px 0px",
  padding: "100px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "gray",
  borderRadius: "5px",
  background: "rgba(76, 175, 80, 0.3)",
};

const CharacterViewer = ({ name, birthYear }) => {
  return (
    <div style={style}>
      <h1>{name}</h1>
      <h3>{birthYear}</h3>
    </div>
  );
};

export default CharacterViewer;
