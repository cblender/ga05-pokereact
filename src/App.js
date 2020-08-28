/*$$$$$$$           /$$                /$$ /$$$$$$$                                  /$$    
| $$__  $$         | $$               | $/| $$__  $$                                | $$    
| $$  \ $$ /$$$$$$ | $$   /$$  /$$$$$$|_/ | $$  \ $$  /$$$$$$   /$$$$$$   /$$$$$$$ /$$$$$$  
| $$$$$$$//$$__  $$| $$  /$$/ /$$__  $$   | $$$$$$$/ /$$__  $$ |____  $$ /$$_____/|_  $$_/  
| $$____/| $$  \ $$| $$$$$$/ | $$$$$$$$   | $$__  $$| $$$$$$$$  /$$$$$$$| $$        | $$    
| $$     | $$  | $$| $$_  $$ | $$_____/   | $$  \ $$| $$_____/ /$$__  $$| $$        | $$ /$$
| $$     |  $$$$$$/| $$ \  $$|  $$$$$$$   | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$  |  $$$$/
|__/      \______/ |__/  \__/ \_______/   |__/  |__/ \_______/ \_______/ \_______/   \___*/
                                                                                            
import React, { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokeList: []
    }
    this.pokeQuantity = 151
    this.pokeGeneration = 1
    this.pokeList = []
  }

  

  fetchPokeList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then((allpokemon) => {
      
      console.log("========================================")
      console.log(allpokemon)
      console.log("========================================")
      allpokemon.results.forEach((pokemon) => {
        let pokeList = this.state.pokeList
        pokeList.push(pokemon)
        this.setState({pokeList})
        // console.log(pokemon)
      })
    })
    // console.log(this.pokeList)
  }

  componentDidMount () {
    this.fetchPokeList();
  }

  render () {

    return (
      <div className="appContainerDoNotTouch">
        <div>
          <h1>PokeReact</h1>
        </div>
        <div className="spacer">
          <p>a React UI by Chris Blendermann</p>
        </div>
        <div className="container">
          {this.state.pokeList.map(
            (pokemon, i) => {
              return (<Pokemon key={i} name={pokemon.name} url={pokemon.url} />)
            }
          )}  
        </div>
      </div> // END DIV CLASS "appContainerDoNotTouch".
    )
  }
}

export default App;
