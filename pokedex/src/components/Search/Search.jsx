import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Search(pokemons) {
  const [searchedPoke, setSearchedPoke] = useState([]);
  const [searchedLoading, setSearchedLoading] = useState(null);

  const showSearchResult = (searchString) => {
    setSearchedLoading(true);
  };
  return (
    <div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}
