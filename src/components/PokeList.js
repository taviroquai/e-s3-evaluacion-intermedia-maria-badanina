import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokeList extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Mi lista de pokemon</h1>
        <ul className="list">
          {this.props.pokemons.map((pokemon, i) => {
            return (
              <li key={i} className="card">
                <img src={pokemon.url} alt={pokemon.name} />
                <h2 className="name">{pokemon.name}</h2>
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
