import React, {Component} from 'react'
import Cardlist from './components/card-list/Cardlist'
import './App.css';
import SearchBox from './components/searchbox/SearchBox.component';
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchfield : ''
    }
  }

  onInputChange = (e) =>{
    this.setState({searchfield: e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({monsters: data}))
    .catch(err => console.log('Failed to fetch monsters'))
  }

  render(){

   const {monsters, searchfield} = this.state;

  const filteredMonsters = monsters.filter(monster => (
    monster.name.toLowerCase().includes(searchfield.toLowerCase())))


    return !(monsters.length) ?
    <h1 style = {{textAlign: 'center', color: '#fff'}}>Loading...</h1>
    :
      <div className="App">
        <h1 className='title'>MONSTERS ROLODEX</h1>
        <SearchBox 
        searchfield = {this.onInputChange}
        placeholder = 'Search Monsters'
        />
        <Cardlist monsters = {filteredMonsters}/>  
      </div>
      
    
  }
  
}




export default App;

// STATE VS PROPS

// It is passed down as an attribute  s
// state can be passed down as props  to a component

//  State most times lives in the App component
// State changes because of user interaction.

// If you want console.log() the value of your state without it being async, do this:
//  this.setState({searchfield: e.target.value}, () => console.log(this.state))
// It gets called right after the setState function has ran.

// setState is an Asynchronous function call
