import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

export default function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Route path="/" exact component={Home} />
        <Route path="/:pokemonId" exact component={Details} />
      </Router>
    </>
  );
}
