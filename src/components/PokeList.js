import React, { Component } from "react";
import propTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Mi lista de pokemon</h1>
                <input className="filter" type="text"/>
                <ul className="list">
                    {this.props.pokemons
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
