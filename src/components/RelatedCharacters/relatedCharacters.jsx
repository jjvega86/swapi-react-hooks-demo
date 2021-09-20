import React from "react";
import Character from "../Character/character";

const style = {
  width: "18rem",
  margin: "6px 0px 6px 0px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "gray",
  borderRadius: "5px",
  background: "rgba(76, 175, 80, 0.3)",
};

const RelatedCharacters = ({ results, setCharacter }) => {
  let renderedCards = results.map((result) => {
    return (
      <Character
        key={result.name}
        name={result.name}
        birthYear={result.birth_year}
        style={style}
        setCharacter={setCharacter}
      />
    );
  });
  return <div>{renderedCards}</div>;
};

export default RelatedCharacters;
