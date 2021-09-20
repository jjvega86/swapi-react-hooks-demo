import React, { useState, useEffect } from "react";
import axios from "axios";

// Component imports
import SearchBar from "./components/Search/searchBar";
import CharacterViewer from "./components/CharacterViewer/characterViewer";
import RelatedCharacters from "./components/RelatedCharacters/relatedCharacters";

//* How can we use console.logs and React DevTools to effectively debug?

const App = () => {
  const [currentCharacter, setCurrentCharacter] = useState({
    name: "LOADING",
  });
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("Component initial render");
    fetchCharacters("", true);
    console.log("Default characters fetched!");
  }, []);

  /*
    Primary fetching function - makes GET request based on value of search term coming in as a parameter
    @params String searchTerm, Boolean changeCurrentCharacter 
    changeCurrentCharacter param is a boolean - allows controlling of currentCharacter state is set based on fetch
   */
  const fetchCharacters = async (searchTerm, changeCurrentCharacter) => {
    console.log(searchTerm);
    try {
      let response = await axios.get(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      changeCurrentCharacter && setCurrentCharacter(response.data.results[0]);
      setCharacters(response.data.results.slice(0, 6));
      console.log("Characters fetched!");
    } catch (error) {
      console.error(error);
    }
  };

  const searchForCharacter = (term) => {
    console.log(
      "Search triggered. Fetching characters and setting new selected character"
    );
    fetchCharacters(term, true);
  };

  const setCharacter = (clickedName) => {
    let foundCharacters = characters.filter((el) => {
      if (el.name === clickedName) {
        return true;
      } else {
        return false;
      }
    });
    console.log(
      "Setting new current character, fetching 'related' characters without setting another current character"
    );
    setCurrentCharacter(foundCharacters[0]);
    // fetching "related" characters based on first character of currentCharacter's name
    fetchCharacters(foundCharacters[0].name.charAt(0), false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <SearchBar searchForCharacter={searchForCharacter} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <CharacterViewer
            name={currentCharacter.name}
            birthYear={currentCharacter.birth_year}
          />
        </div>
        <div className="col-md-4">
          <RelatedCharacters results={characters} setCharacter={setCharacter} />
        </div>
      </div>
    </div>
  );
};

export default App;
