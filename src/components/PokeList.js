import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokeList extends Component {
  render() {
    return (
      <div>
        <h1>Mi lista de pokemon</h1>
        <ul>
          {this.props.pokemons.map((pokemon, i) => {
            return (
              <li key={i}>
                <img src={pokemon.url} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
                <Pokemon pokemon={pokemon} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PokeList;
