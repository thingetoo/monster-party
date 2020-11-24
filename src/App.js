import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    } 
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // API to get names
    .then(response => (response.json()))
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => { // This function will update the searchField state to the value that is typed 
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; // Destructuring so that we don't need to add the this.state... before our consts
    // const monsters = this.state.monsters; -> similar to the above
    // const searchField= this.state.searchField; -> similar to the above
    const filteredMonsters = monsters.filter(monster =>  // this function will filter through the monster names returning what is included in the searchField
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monster Party</h1>
        <SearchBox
          placeholder='search monsters' // what the input box will display before typing occurs
          handleChange = {this.handleChange} // calls the handleChange function to update the state as the value is typed
        />
        <CardList monsters = {filteredMonsters}/> 
      </div>// the above will return only the monsters that have been filtered
    );
  }
}
export default App;
