import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pokemon from "../../assets/pokemon_logo.png";

export default function NavigationBar() {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        className="animate__animated animate__fadeInDown"
      >
        <Container className="navContainer">
          <div className="logo">
            <Link to="/">
              <Navbar.Brand>
                <img
                  src={Pokemon}
                  width="120px"
                  height="50px"
                  className="d-inline-block align-top"
                  alt="Bandcamp logo"
                />
              </Navbar.Brand>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
