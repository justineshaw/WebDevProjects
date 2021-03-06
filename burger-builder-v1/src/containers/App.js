import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name:"Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  changeNameHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    // update persons array with new persons array
    var persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    let current = this.state.showPersons;
    this.setState({
      showPersons: !current
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    // ultimately we need to pass JS. The JSX below is tranpiled to JS.
    if (this.state.showPersons) {
      //js
      persons = ( // persons variable is jsx
        <div>
          <Persons
            persons={this.state.persons}
            toggle={this.deletePersonHandler}
            change={this.changeNameHandler}
          />
        </div>
      );

      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
