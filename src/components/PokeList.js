import React, { Component } from "react";
import propTypes from "prop-types";
import Pokemon from "./Pokemon";
import "./PokeList.scss";

class PokeList extends Component {
  constructor() {
    super();
    this.state = {
      pokemonName: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e) {
    const filteredPokemon = e.currentTarget.value;
    this.setState({
      pokemonName: filteredPokemon
    });
    console.log(filteredPokemon);
  }

  render() {
    return (
      <div>
        <h1 className="title">Mi lista de pokemon</h1>
        <input className="filter" type="text" onChange={this.handleFilter} />
        <ul className="list">
          {this.props.pokemons
            .filter(pokemon => {
              return pokemon.name
                .toLowerCase()
                .includes(this.state.pokemonName.toLowerCase());
            })
            .map((pokemon, id) => {
              return (
                <li key={id} className="card">
                  <Pokemon
                    pokemon={pokemon}
                    imageUrl={pokemon.url}
                    pokemonName={pokemon.name}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

PokeList.propTypes = {
  pokemons: propTypes.arrayOf(propTypes.object.isRequired).isRequired
};

export default PokeList;
