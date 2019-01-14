import React, { Component } from "react";
import propTypes from "prop-types";
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

Pokemon.propTypes = {
    pokemons: propTypes.arrayOf(propTypes.string)
};

export default PokeList;
