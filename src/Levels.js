import React, { Component } from "react";

export class Levels extends Component {
  render() {
    const levelStyle = {
      minWidth: "40%",
      fontSize: "21px",
      margin: "10px",
      color: "#C24225"
    };
    const containerStyle = {
      border: "1px solid",
      borderRadius: "5px",
      borderColor: "#C24225",
      width: '85%'
    };
    return (
      <div style={containerStyle}>
        <p style={levelStyle}>Coffee level: {this.props.levels.coffeeLevel}</p>
        <p style={levelStyle}>Water level: {this.props.levels.waterLevel}</p>
      </div>
    );
  }
}

export default Levels;
