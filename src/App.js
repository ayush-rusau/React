import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age:20},
      {name: 'MAnu', age:21},
      {name: 'stephanie', age: 23}
    ]
  }
  render() {
    return (
      <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working</p>
         <button>Switch Name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My Hobbies:Racing</Person>
         <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
      </div>
    );
    //the above code is a JSX code
    //which gets compiled to the below code
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;

//Change in state will lead to reload of while DOM
