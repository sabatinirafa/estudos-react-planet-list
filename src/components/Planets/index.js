import React, { Fragment } from "react"
import Planet from "./Planet"



class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [
        {
          name: 'Urano', 
          description: "Urano (Úrano em Portugal) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano.",
          link: 'https://pt.wikipedia.org/wiki/Urano_(planeta)',
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg",
        },
        {
          name: 'Vênus',
          description: "Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus)[1] é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias.",
          link: 'https://pt.wikipedia.org/wiki/Venus_(planeta)',
          img_url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
        }
      ]
    }
  }

  removelast = () => {
    let new_planets = [...this.state.planets]
    new_planets.pop()
    this.setState({
      planets: new_planets
    })
  }

  duplicateLast = () => {
    let duplicated = this.state.planets[this.state.planets.length - 1]
    let new_planets = [...this.state.planets, duplicated]
    this.setState({
      planets: new_planets
    })
  }


  render() {
    return (
      <Fragment>
        <h1>Planet list</h1>
        <button onClick={this.removelast}>Remover último</button>
        <button onClick={this.duplicateLast}>Duplicar o último</button>
        {this.state.planets.map(planet => 
          <Planet 
          name={planet.name}
          description={planet.description}
          link={planet.link}
          img_url={planet.img_url}
          />
        )}
      </Fragment>
    )
  }
}

export default Planets