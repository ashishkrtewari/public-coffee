import React, { Component } from 'react'

export class Operations extends Component {
  coffeeLevel = this.props.levels.coffeeLevel;
  waterLevel = this.props.levels.waterLevel;

  // Add Coffee
  addCoffee() {
    if (this.coffeeLevel >= 100) {
      alert(`Max coffee level reached: ${this.coffeeLevel}`);
    } else {
      this.checkAndUpdateLevels({coffeeLevel: this.coffeeLevel + 5});
    }
  }
  // Add Water
  addWater() {
    if (this.waterLevel >= 200) {
      alert(`Max Water level reached: ${this.waterLevel}`);
    } else {
      this.checkAndUpdateLevels({waterLevel: this.waterLevel + 10});
    }
  }
  // Dispense Coffee
  dispenseCoffee() {
    if (this.coffeeLevel > 5 && this.waterLevel > 10) {
      this.checkAndUpdateLevels({coffeeLevel: this.coffeeLevel - 5, waterLevel: this.waterLevel - 10});
      alert(`You're served, an amazing cup of Coffee ! Enjoy.`);
    } else {
      let coffeeErr;
      let waterErr;
      if (this.coffeeLevel <= 5) {
        coffeeErr = true
      } else {
        coffeeErr = false;
      }
      if (this.waterLevel <= 10) {
        waterErr = true
      } else {
        waterErr = false;
      }
      alert(
        `Low Supplies: Please add ${coffeeErr ? 'Coffee' : ''}${coffeeErr && waterErr ? ' and ' : ''}${waterErr ? 'Water' : ''}, to continue.`
        );
    }
  }
  // Update levels
  checkAndUpdateLevels({coffeeLevel, waterLevel}) {
    const c = coffeeLevel || this.coffeeLevel;
    const w = waterLevel || this.waterLevel;
    this.props.updateLevels({coffeeLevel: c, waterLevel: w});
  }

  btnStyle = {
    minWidth: '60%',
    fontSize: '21px',
    margin: '10px',
    border: '5px',
    borderColor: '#C24225',
    background: '#C24225',
    color: '#FFF',
    padding: '15px 30px',
    cursor: 'pointer',
    display: 'block'
  };

  render() {
    return (
      <div>
        <button type="button" style={this.btnStyle} onClick={this.addCoffee.bind(this)}>Add Coffee</button>
        <button type="button" style={this.btnStyle} onClick={this.addWater.bind(this)}>Add Water</button>
        <button type="button" style={this.btnStyle} onClick={this.dispenseCoffee.bind(this)}>Make Coffee</button>
      </div>
    )
  }
}

export default Operations
