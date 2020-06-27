import './App.css';

import { CardList } from './components/card-list/card-list.component';
import React from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './logo.svg';
import { register } from './serviceWorker';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) || monster.email.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters' 
          handleChange = {e => {
            this.setState({ searchField: e.target.value})}}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
