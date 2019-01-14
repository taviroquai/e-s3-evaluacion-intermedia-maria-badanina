import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    return (
      <ul className="type">
        {this.props.pokemon.types.map((type, i) => {
          return <li key={i} className="types">{type}</li>;
        })}
      </ul>
    );
  }
}

export default Pokemon;
