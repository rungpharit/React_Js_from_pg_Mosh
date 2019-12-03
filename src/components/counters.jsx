import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  render() { 
    //key will be no pros because it's a spceial attribute
    //<h4>Counter #{Counter.id}</h4> is between <Counter></Counter> children prop
    console.log('Counters - Rendered');
    const {onReset,counters,onDelete,onIncrement} = this.props
    return (
      <div>
        <button 
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}>
          Reset</button>
      {counters.map(counter =>(
          <Counter key={counter.id} 
          onDelete={onDelete} 
          onIncrement ={onIncrement}
          counter={counter}/> 
        ))} 
      </div> 
    );
  };

  };
  
 
export default Counters;