import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'mary',
        count: 50,
      }, {
        name: 'bob',
        count: 30,
      }, {
        name: 'alice',
        count: 60,
      }, {
        name: 'alice',
        count: 60,
      }
    ],
    otherState: 'anything',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    //this.state.persons[0].name = "mrt"
    this.setState({
        persons: [
      {
        name: newName,
        count: 50,
      }, {
        name: 'bob',
        count: 300,
      }, {
        name: 'alice',
        count: 60,
      }
    ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
        persons: [
      {
        name: event.target.value,
        count: 50,
      }, {
        name: 'bob',
        count: 300,
      }, {
        name: 'alice',
        count: 60,
      }
    ],
    })
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person key={index} name={person.name} count={person.count} />
            })
          }

           {// <div>
            //       <Person
            //         changed = {this.nameChangedHandler}
            //         myClick = {this.switchNameHandler.bind(this, '456')}
            //         name={this.state.persons[0].name} count={this.state.persons[0].count} />
            //       <Person name={this.state.persons[1].name} count={this.state.persons[1].count} />
            //       <Person name={this.state.persons[2].name} count={this.state.persons[2].count}>123</Person>
            //   </div>
          }
          </div>
        )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler.bind(this)} >changed</button>
        {persons}
      </div>
    );
  }
}

export default App;
