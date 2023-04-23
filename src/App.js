import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Layout from "./components/Layout";
import Pokedex from "./components/Pokedex";

function App() {

  return (
    <Router>
       <Layout>
        <Routes>
          <Route exact path="/" element={<Pokedex/>} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
        </Layout>
    </Router>
  );
}

export default App;
