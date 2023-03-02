import React, { Fragment } from "react"
import Planet from "./Planet"

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = response.json()
  return data
}

class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: []
    }
  }



  componentDidMount() {
    getPlanets().then(data => {
      this.setState({
        planets: data['planets']
      })
    })
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