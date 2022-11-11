import React from 'react';
import './App.css';
import CardList from "./components/cardList/card-list.component";
import SearchBox from './components/searchBox/search-box.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searching: ''
    }
  }
  
  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({monsters: users}))
    
    const gettingDataFromAPI = async () =>{
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();
      this.setState({monsters: users});
    }
    gettingDataFromAPI();
  }

  onSearchChange = (event) => {
    this.setState({searching: event.target.value.toLowerCase()});
  }

  render(){
    const {monsters, searching} = this.state;
    const { onSearchChange } = this;

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' className='monster_searchbox' onSearchChange={onSearchChange}/>
        <CardList monsters={monsters} searching={searching}/>
      </div>
    );
  }
}

export default App;
