import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    return (
      <ul className="type">
        {this.props.pokemon.types.map((type, i) => {
          return <li key={i}>{type}</li>;
        })}
      </ul>
    );
  }
}

export default Pokemon;
