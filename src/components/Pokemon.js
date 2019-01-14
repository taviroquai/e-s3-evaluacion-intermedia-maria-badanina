import React, { Component } from "react";
import propTypes from "prop-types";

class Pokemon extends Component {
  render() {
    return (
      <ul className="type">
        {this.props.pokemon.types.map((type, i) => {
          return (
            <li key={i} className="types">
              {type}
            </li>
          );
        })}
      </ul>
    );
  }
}

Pokemon.propTypes = {
  types: propTypes.arrayOf(propTypes.string)
};

export default Pokemon;
