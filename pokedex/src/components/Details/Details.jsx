import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  let [pokemon, setPokemon] = useState(1);
  const matchParams = useParams();
  const fetchPokemon = async (id) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );

    const data = await response.data;
    console.log(data);
    setPokemon(data);
    console.log(pokemon.abilities[0].ability.name);
  };

  const isCaught = () => {
    const myCollection = JSON.parse(localStorage.getItem("myList"));
    console.log(myCollection);
  };

  useEffect(() => {
    fetchPokemon(matchParams.pokemonId);
    isCaught();
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <Row>
          {pokemon && (
            <Col className="details">
              <h1>{pokemon.name} </h1>
              {/* {pokemon.spirites.front_default === null ? (
                <img src="" alt={pokemon.name} />
              ) : (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              )} */}
              <p>
                order: {pokemon.order}
                <br />
                height: {pokemon.height}
                <br />
                weight: {pokemon.weight}
                <br />
                location area encounters:{" "}
                <a href={pokemon.location_area_encounters}>link</a>
                <br />
                ability #1: {pokemon.abilities[0].ability.name} <br />
                ability #2: {pokemon.abilities[1].ability.name}
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
