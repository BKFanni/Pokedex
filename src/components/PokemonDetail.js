import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./PokemonDetail.css";
export default function PokemonDetail(props) {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
      setLoading(false);
      setPokemon(response.data);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, [id]);

  const gotoMenuPage = () => {
    history("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const {abilities} = pokemon;
  const { stats } = pokemon;

  return (
    <div className="PokeCard">
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name}-img`}
      />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>

      <h3>Abilities</h3>
      <ul>{abilities.map((ability) => (
        <li key={ability.ability.name}>{ability.ability.name}</li>
      ))}</ul>
     
      <h3>Stats</h3>
      <ul>
        {stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      
      <button onClick={gotoMenuPage}>Menu</button>
    </div>
  );
};
