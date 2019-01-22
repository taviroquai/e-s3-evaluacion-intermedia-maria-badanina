import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import "./Pokemon.scss";

class Pokemon extends Component {
  render() {
    const { imageUrl, pokemonName } = this.props;
    return (
      <Fragment>
        <img src={imageUrl} alt={pokemonName} />
        <h2 className="name">{pokemonName}</h2>
        <ul className="type">
          {this.props.pokemon.types.map((type, id) => {
            return (
              <li key={id} className="types">
                {type}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

Pokemon.propTypes = {
  pokemon: propTypes.object.isRequired,
  imageUrl: propTypes.string.isRequired,
  pokemonName: propTypes.string.isRequired
};

export default Pokemon;
