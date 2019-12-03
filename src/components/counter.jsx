import React, { Component } from 'react';

  class Counter extends Component {
   componentDidUpdate(prevProps,preState){
    
     console.log('preProps',prevProps);
     console.log('preState',preState);
    //  if(prevProps.counter.value != this.props.counter.value){
    //     //we can make Ajax request to get new data from server. Optimazation technique
    //  }
   }

   componentWillUnmount(){
     console.log('Counter - Unmonted');
   }
    render() {
      console.log('Counter - rendered');
      //console.log("props",this.props); 
      return ( 
      <div> 
       
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
         
          onClick =  {() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">Increment
        </button>
        <button 
          onClick = {() => this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2">Delete
          </button>
      </div>
      );
    }

    getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }

    formatCount(){
      const {value} = this.props.counter;
      return value === 0 ? 'Zero' : value;

    }
    
  }
  
  export default Counter;