import React from "react";
import { Link } from "react-router-dom";
import "./PokemonList.css";

export default function PokemonList({pokemon}) {
  
  return (
    <div className="PokeList">
      {pokemon.map(p => (
        <div key={p}>
          <Link to={`/pokemon/${p}`}>{p}</Link>
         </div>
      ))}
    </div>
  );
}
