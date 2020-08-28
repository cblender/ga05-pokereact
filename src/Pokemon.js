import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
    
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.state = {
            name: this.props.name,
            url: this.props.url,
            pokeInfo: '',
            showPokedex: false
        };

        // console.log(this.state)
    }

    componentDidMount = () => {
        // console.log("FIRED! componentDidMount for "+this.state.name)

        let url = this.state.url

        fetch(url)
        .then(response => response.json())
        .then((pokeData) => {
            let pokeInfo = this.state.pokeInfo
            pokeInfo = pokeData
            this.setState({pokeInfo})

            let imgsrc = this.state.pokeInfo.sprites.other.dream_world.front_default
            this.setState({img: imgsrc})
        })

        
    }    

    handlePokedex = () => {
        console.log("FIRED! handlePokedex for "+this.state.pokeInfo.name)
        console.log(this.state.pokeInfo, this.state.showPokedex)
        // console.log(this.state.pokeInfo.sprites.other.official-artwork.front_default)

        
        // THE GREAT POKEMON INFORMATION TRAWLER


        let statXP = this.state.pokeInfo.base_experience
        let statHP = this.state.pokeInfo.stats[0].base_stat
        let statATK = this.state.pokeInfo.stats[1].base_stat
        let statDEF = this.state.pokeInfo.stats[2].base_stat
        let statSPD = this.state.pokeInfo.stats[5].base_stat
        let statWeight = this.state.pokeInfo.weight

        let type1 = this.state.pokeInfo.types[0].type.name
        let typeArray = this.state.pokeInfo.types
        let length = typeArray.length
        let types = ''

        if (length > 1) {
            let type2 = this.state.pokeInfo.types[1].type.name
            types += "Types: "
            types += type1
            types +=", "
            types += type2
        }
        else {
            types += "Type: "
            types += type1
        }
        console.log(types)

        this.setState({types: types})
        this.setState({XP: statXP})
        this.setState({HP: statHP})
        this.setState({ATK: statATK})
        this.setState({DEF: statDEF})
        this.setState({SPD: statSPD})
        this.setState({WEI: statWeight})

        if (!this.state.showPokedex) {
            let bool = true
            this.setState({showPokedex: bool})
        }
        else {
            let bool = false
            this.setState({showPokedex: bool})
        }

    }

    render = () => {
        let pokedex
        let show = this.state.showPokedex
        let backgroundStyle = {backgroundImage:"url("+this.state.img+")", backgroundSize:"contain", backgroundPosition:"center center", backgroundRepeat:"no-repeat"}

        if (show) {
            pokedex = 
                <div className="pokedex" style={{zIndex:"100"}}>
                    <h1 style={{textTransform:"capitalize"}}>{this.state.pokeInfo.name}</h1>
                    <img src={this.state.img} height="300px"></img>
                    <h2 style={{textTransform:"capitalize"}}>{this.state.types}</h2>
                    <div className="statFlex">
                        <h3 className="stat">    
                            Base XP: {this.state.XP}
                        </h3>
                        <h3 className="stat">  
                            HP: {this.state.HP}
                        </h3>
                        <h3 className="stat">                             
                            Atack: {this.state.ATK}
                        </h3>
                        <h3 className="stat">                             
                            Defense: {this.state.DEF}
                        </h3>
                        <h3 className="stat">                             
                            Speed: {this.state.SPD}
                        </h3>
                        <h3 className="stat">                             
                            Weight: {this.state.WEI}
                        </h3>
                    </div>
                </div>
                
        }
        else {
            pokedex = <div style={{display:'none'}}></div>
        }

        return(
            <div className="pokeContainerDoNotTouch" onClick={this.handlePokedex}>
 
                <div className="pokedexContainer">
                    {pokedex}
                </div>

                <div className="container" style={backgroundStyle}>
                    <h3 className="pokeTitle" style={{zIndex:"-1", textTransform:"capitalize"}}>{this.props.name}</h3>
                </div>

                

            </div>
        )
    }
}

export default Pokemon;