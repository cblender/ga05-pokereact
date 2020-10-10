import React, { Component } from "react";
import "./Pokemon.css";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.state = {
      name: this.props.name,
      url: this.props.url,
      pokeInfo: "",
      showPokedex: false,
    };

    // console.log(this.state)
  }

  componentDidMount = () => {
    // console.log("FIRED! componentDidMount for "+this.state.name)

    let url = this.state.url;

    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        let pokeInfo = this.state.pokeInfo;
        pokeInfo = pokeData;
        this.setState({ pokeInfo });

        let imgsrc = this.state.pokeInfo.sprites.other.dream_world
          .front_default;
        this.setState({ img: imgsrc });
      });
  };

  handlePokedex = () => {
    console.log("FIRED! handlePokedex for " + this.state.pokeInfo.name);
    console.log(this.state.pokeInfo, this.state.showPokedex);
    // console.log(this.state.pokeInfo.sprites.other.official-artwork.front_default)

    // THE GREAT POKEMON INFORMATION TRAWLER

    let pokeNAME = this.state.pokeInfo.name;
    let statNUM = this.state.pokeInfo.id;
    let statXP = this.state.pokeInfo.base_experience;
    let statHP = this.state.pokeInfo.stats[0].base_stat;
    let statATK = this.state.pokeInfo.stats[1].base_stat;
    let statDEF = this.state.pokeInfo.stats[2].base_stat;
    let statSPD = this.state.pokeInfo.stats[5].base_stat;
    let statWeight = this.state.pokeInfo.weight;
    let statABL = this.state.pokeInfo.abilities;

    let type1 = this.state.pokeInfo.types[0].type.name;
    let typeArray = this.state.pokeInfo.types;
    let length = typeArray.length;
    let types = "";

    if (length > 1) {
      let type2 = this.state.pokeInfo.types[1].type.name;
      types += "Types: ";
      types += type1;
      types += ", ";
      types += type2;
    } else {
      types += "Type: ";
      types += type1;
    }
    console.log(types);

    let abilities = "Abilities: ";
    let i = 0;
    for (i = 0; i < statABL.length; i++) {
      let ability = statABL[i].ability.name;
      ability = ability.charAt(0).toUpperCase() + ability.slice(1);
      abilities = abilities + ability;
      if (i < statABL.length - 1) {
        abilities = abilities + ", ";
      }
    }
    console.log(abilities);

    this.setState({ NAME: pokeNAME });

    this.setState({ types: types });
    this.setState({ NUM: statNUM });
    this.setState({ XP: statXP });
    this.setState({ HP: statHP });
    this.setState({ ATK: statATK });
    this.setState({ DEF: statDEF });
    this.setState({ SPD: statSPD });
    this.setState({ WEI: statWeight });
    this.setState({ ABL: abilities });

    if (!this.state.showPokedex) {
      let bool = true;
      this.setState({ showPokedex: bool });
    } else {
      let bool = false;
      this.setState({ showPokedex: bool });
    }
  };

  render = () => {
    let pokedex;
    let show = this.state.showPokedex;
    let backgroundStyle = {
      backgroundImage: "url(" + this.state.img + ")",
      backgroundSize: "contain",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    };

    if (show) {
      pokedex = (
        <div className="pokedex" style={{ zIndex: "100" }}>
          <h1 className="pokeName" style={{ textTransform: "capitalize" }}>
            {this.state.NAME}
          </h1>
          <div className="pokeBox">
            <h1 height="69px"></h1>
            <img src={this.state.img} className="pokeImg"></img>
            <h2 style={{ textTransform: "capitalize" }}>{this.state.types}</h2>
            <h3 className="">{this.state.ABL}</h3>
            <div className="statFlex">
              <h3 className="stat">
                Base XP: <br /> {this.state.XP}
              </h3>
              <h3 className="stat">
                HP: <br /> {this.state.HP}
              </h3>
              <h3 className="stat">
                Atack: <br /> {this.state.ATK}
              </h3>
              <h3 className="stat">
                Defense: <br /> {this.state.DEF}
              </h3>
              <h3 className="stat">
                Speed:
                <br /> {this.state.SPD}
              </h3>
              <h3 className="stat">
                Weight: <br /> {this.state.WEI}
              </h3>
            </div>
          </div>
          <div className="pokeNum">
            <h1>#{this.state.NUM}</h1>
          </div>
          <div className="pokeExit" onClick={this.handlePokedex}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c23eacf8-e366-4118-ab5c-5a1255842a75/de44dk0-f367f584-c0ea-46aa-9675-46eeb964636e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzIzZWFjZjgtZTM2Ni00MTE4LWFiNWMtNWExMjU1ODQyYTc1XC9kZTQ0ZGswLWYzNjdmNTg0LWMwZWEtNDZhYS05Njc1LTQ2ZWViOTY0NjM2ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kFME8zKls7_x2mEptLNoEMO6z57Oy7dhCeW7goKPSfM"
              alt="Menu Button"
              width="50px"
              height="50px"
            ></img>
          </div>
        </div>
      );
    } else {
      pokedex = <div style={{ display: "none" }}></div>;
    }

    return (
      <div className="pokeContainerDoNotTouch">
        <div className="pokedexContainer">{pokedex}</div>

        <div
          className="container"
          style={backgroundStyle}
          onClick={this.handlePokedex}
        >
          <h3
            className="pokeTitle"
            style={{ zIndex: "-1", textTransform: "capitalize" }}
          >
            {this.props.name}
          </h3>
        </div>
      </div>
    );
  };
}

export default Pokemon;
