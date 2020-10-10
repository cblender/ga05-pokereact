/*$$$$$$$           /$$                /$$ /$$$$$$$                                  /$$    
| $$__  $$         | $$               | $/| $$__  $$                                | $$    
| $$  \ $$ /$$$$$$ | $$   /$$  /$$$$$$|_/ | $$  \ $$  /$$$$$$   /$$$$$$   /$$$$$$$ /$$$$$$  
| $$$$$$$//$$__  $$| $$  /$$/ /$$__  $$   | $$$$$$$/ /$$__  $$ |____  $$ /$$_____/|_  $$_/  
| $$____/| $$  \ $$| $$$$$$/ | $$$$$$$$   | $$__  $$| $$$$$$$$  /$$$$$$$| $$        | $$    
| $$     | $$  | $$| $$_  $$ | $$_____/   | $$  \ $$| $$_____/ /$$__  $$| $$        | $$ /$$
| $$     |  $$$$$$/| $$ \  $$|  $$$$$$$   | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$  |  $$$$/
|__/      \______/ |__/  \__/ \_______/   |__/  |__/ \_______/ \_______/ \_______/   \___*/

import React, { Component } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import Navbar from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
      nav: false,
    };
    this.pokeQuantity = 151;
    this.pokeGeneration = 1;
    this.pokeList = [];
  }

  fetchPokeList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((allpokemon) => {
        console.log("========================================");
        console.log(allpokemon);
        console.log("========================================");
        allpokemon.results.forEach((pokemon) => {
          let pokeList = this.state.pokeList;
          pokeList.push(pokemon);
          this.setState({ pokeList });
          // console.log(pokemon)
        });
      });
    // console.log(this.pokeList)
  };

  componentDidMount() {
    this.fetchPokeList();
  }

  handleNav = () => {
    console.log("FIRED! handleNav for App");
    this.setState({ nav: !this.state.nav });
    console.log(this.state.nav);
  };

  render = () => {
    return (
      <div className="appContainerDoNotTouch">
        <div className="headBack"></div>

        <div className="headTitle">
          <h1>PokeReact</h1>
          <h4>a React UI by Chris Blendermann</h4>
        </div>

        <div className="headSpace"></div>

        <div className="centerBox">
          <div className="flexBox">
            <div className="container">
              {this.state.pokeList.map((pokemon, i) => {
                return (
                  <Pokemon key={i} name={pokemon.name} url={pokemon.url} />
                );
              })}
            </div>
          </div>
        </div>

        <div className="headLogo">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c23eacf8-e366-4118-ab5c-5a1255842a75/de44djs-8ffd142e-adc7-4602-9b2c-fd4e3f09e926.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzIzZWFjZjgtZTM2Ni00MTE4LWFiNWMtNWExMjU1ODQyYTc1XC9kZTQ0ZGpzLThmZmQxNDJlLWFkYzctNDYwMi05YjJjLWZkNGUzZjA5ZTkyNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.a9Q1Y1a02P0ibUAjC4DhAHuLQlwZH-Wzxyfs-oBnJHE"
            alt="Pokeball Logo"
            width="200px"
            height="200px"
          ></img>
        </div>

        <div className="buttMenu">
          <Navbar />
        </div>
      </div> // END DIV CLASS "appContainerDoNotTouch".
    );
  };
}

export default App;
