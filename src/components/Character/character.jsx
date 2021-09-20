import React from "react";

const Character = ({ name, birthYear, style, setCharacter }) => {
  return (
    <div className="card" style={style} onClick={() => setCharacter(name)}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{birthYear}</p>
      </div>
    </div>
  );
};

export default Character;
