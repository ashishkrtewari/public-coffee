import React, { Component } from 'react';
import Machine from './machine.png';
import Operations from './Operations';
import Levels from './Levels'

export class CoffeeTable extends Component {
  colWidth = {width: '33.11vw'};
  render() {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center', padding: '50px 5px'}}>
      <div style={this.colWidth}>
          <Levels levels={this.props.levels} />
        </div>
        <div style={this.colWidth}>
          <img src={Machine} style={{width: '100%'}} alt="Coffee Machines" />
        </div>
        <div style={this.colWidth}>
          <Operations levels={this.props.levels} updateLevels={this.props.updateLevels}/>
        </div>
      </div>
    )
  }
}

export default CoffeeTable
