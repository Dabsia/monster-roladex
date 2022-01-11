import React, {Component} from 'react'
import Cardlist from './components/card-list/Cardlist'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({monsters: data}))
  }

  render(){
   const {monsters} = this.state
    return(
      <div className="App">
        <Cardlist monsters = {monsters}/>  
      </div>
      
    )
  }
  
}

export default App;
