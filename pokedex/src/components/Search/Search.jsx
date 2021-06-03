import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Search({ pokemons }) {
  const [searchString, setSearchString] = useState("");
  const [searchedPoke, setSearchedPoke] = useState([]);
  const [searchedLoading, setSearchedLoading] = useState(null);

  const showSearchResult = (searchString) => {
    setSearchedLoading(true);
    pokemons.filter((poke) => {
      if (poke.name.contains(searchString)) {
        setSearchedPoke(searchedPoke.concat(poke.name));
      }
    });
  };

  const handleEnterKey = () => {
    showSearchResult(searchString);
  };

  const searchStringHandler = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      showSearchResult(searchString);
      console.log(searchString);
      console.log(pokemons);
    } else {
      setSearchString(e.currentTarget.value);
    }
  };

  return (
    <div>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          aria-label="search"
          aria-describedby="basic-addon1"
          onKeyDown={searchStringHandler}
          onChange={searchStringHandler}
          value={searchString}
          className="mr-sm-2"
        />
        <Button variant="outline-success" onClick={handleEnterKey}>
          Search
        </Button>
      </Form>

      <p>{searchedPoke}</p>
    </div>
  );
}
