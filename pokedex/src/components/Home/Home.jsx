import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sphere from "../../assets/poke.png";

export default function Home() {
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`
  );
  const [amount, setAmount] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [myPokemons, setMyPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
    setAmount(data.count);
    const fetchedPokemons = data.results;
    if (url.includes("limit=1118")) {
      const sortedPokemons = fetchedPokemons.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      });
      setPokemons(sortedPokemons);
    } else {
      setPokemons(fetchedPokemons);
    }
  };

  const addToMyList = (obj) => {
    let list = [...myPokemons];
    list.push(obj);
    setMyPokemons(list);
    localStorage.setItem("myList", JSON.stringify(list));
    console.log(myPokemons);
  };

  const isCaught = (id) =>
    myPokemons.length > 0
      ? myPokemons.filter((p) => p.url.slice(34, -1) === id).length > 0
        ? true
        : false
      : false;

  /* const fetchMyList = () =>
    {
        
        } */

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                setUrl(
                  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"
                );
                fetchPokemons();
              }}
            >
              Show All A-Z
            </Button>
          </Col>
          {/* <Col>
            <Button variant="secondary" onClick={() => fetchMyList()}>
              My List
            </Button>
          </Col>
          <Col>
            <Button variant="info" onClick={() => fetchMissedOnes(url)}>
              Missed Ones
            </Button>
          </Col> */}
        </Row>
        <Row className="my-5">
          <h4>{amount} pokemons found!</h4>
        </Row>
        <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 my-5">
          <Col>
            {pokemons &&
              pokemons
                .map((poke) => (
                  <p className="pokelist" key={poke.url.slice(34, -1)}>
                    <img src={Sphere} style={{ width: "30px" }} alt="poke_sp" />
                    {"  "}
                    <Link to={{ pathname: `/${poke.url.slice(34, -1)}` }}>
                      {poke.name}
                    </Link>
                    {"  "}
                    <Button
                      variant={
                        isCaught(poke.url.slice(34, -1)) ? "success" : "danger"
                      }
                      value={poke.url.slice(34, -1)}
                      disabled={isCaught(poke.url.slice(34, -1)) ? true : false}
                      onClick={() => addToMyList(poke)}
                    >
                      {isCaught(poke.url.slice(34, -1))
                        ? "You got me!"
                        : "Catch me!"}
                    </Button>
                  </p>
                ))
                .slice(0, 200)}
          </Col>
          <Col>
            {pokemons &&
              pokemons
                .map((poke) => (
                  <p className="pokelist" key={poke.url.slice(34, -1)}>
                    <Link to={{ pathname: `/${poke.url.slice(34, -1)}` }}>
                      {poke.name}
                      {"  "}
                    </Link>
                    <Button
                      variant={
                        isCaught(poke.url.slice(34, -1)) ? "success" : "danger"
                      }
                      value={poke.url.slice(34, -1)}
                      disabled={isCaught(poke.url.slice(34, -1)) ? true : false}
                      onClick={() => addToMyList(poke)}
                    >
                      {isCaught(poke.url.slice(34, -1))
                        ? "You got me!"
                        : "Catch me!"}
                    </Button>
                  </p>
                ))
                .slice(200, 400)}
          </Col>
          <Col>
            {pokemons &&
              pokemons
                .map((poke) => (
                  <p className="pokelist" key={poke.url.slice(34, -1)}>
                    <Link to={{ pathname: `/${poke.url.slice(34, -1)}` }}>
                      {poke.name}
                      {"  "}
                    </Link>
                    <Button
                      variant={
                        isCaught(poke.url.slice(34, -1)) ? "success" : "danger"
                      }
                      value={poke.url.slice(34, -1)}
                      disabled={isCaught(poke.url.slice(34, -1)) ? true : false}
                      onClick={() => addToMyList(poke)}
                    >
                      {isCaught(poke.url.slice(34, -1))
                        ? "You got me!"
                        : "Catch me!"}
                    </Button>
                  </p>
                ))
                .slice(400, 600)}
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 my-5">
          <Col>
            {pokemons &&
              pokemons
                .map((poke) => (
                  <p className="pokelist" key={poke.url.slice(34, -1)}>
                    <Link to={{ pathname: `/${poke.url.slice(34, -1)}` }}>
                      {poke.name}
                      {"  "}
                    </Link>
                    <Button
                      variant={
                        isCaught(poke.url.slice(34, -1)) ? "success" : "danger"
                      }
                      value={poke.url.slice(34, -1)}
                      disabled={isCaught(poke.url.slice(34, -1)) ? true : false}
                      onClick={() => addToMyList(poke)}
                    >
                      {isCaught(poke.url.slice(34, -1))
                        ? "You got me!"
                        : "Catch me!"}
                    </Button>
                  </p>
                ))
                .slice(600, 800)}
          </Col>
          <Col>
            {pokemons &&
              pokemons
                .map((poke) => (
                  <p className="pokelist" key={poke.url.slice(34, -1)}>
                    <Link to={{ pathname: `/${poke.url.slice(34, -1)}` }}>
                      {poke.name}
                    </Link>
                    <Button
                      variant={
                        isCaught(poke.url.slice(34, -1)) ? "success" : "danger"
                      }
                      value={poke.url.slice(34, -1)}
                      disabled={isCaught(poke.url.slice(34, -1)) ? true : false}
                      onClick={() => addToMyList(poke)}
                    >
                      {isCaught(poke.url.slice(34, -1))
                        ? "You got me!"
                        : "Catch me!"}
                    </Button>
                  </p>
                ))
                .slice(800, 1000)}
          </Col>
          <Col>
            {pokemons &&
              pokemons
                .map((poke) => (
                  <p className="pokelist" key={poke.url.slice(34, -1)}>
                    <Link to={{ pathname: `/${poke.url.slice(34, -1)}` }}>
                      {poke.name}
                      {"  "}
                    </Link>
                    <Button
                      variant={
                        isCaught(poke.url.slice(34, -1)) ? "success" : "danger"
                      }
                      value={poke.url.slice(34, -1)}
                      disabled={isCaught(poke.url.slice(34, -1)) ? true : false}
                      onClick={() => addToMyList(poke)}
                    >
                      {isCaught(poke.url.slice(34, -1))
                        ? "You got me!"
                        : "Catch me!"}
                    </Button>
                  </p>
                ))
                .slice(1000, 1200)}
          </Col>
        </Row>
      </Container>
    </>
  );
}
