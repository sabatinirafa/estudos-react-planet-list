import GreyImg from '../../shared/grey-img'
import Description from '../../shared/description'
import React from 'react'

let getSatellites = async function (id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = response.json()
  return data
}

class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellites: []
    }
  }

  componentDidMount() {
    getSatellites(this.props.id).then(data => {
      this.setState({
        satellites: data['satellites']
      })
    })
  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <Description
          description={this.props.description}
          link={this.props.link}
        />
        <GreyImg 
          img_url={this.props.img_url}
        />
        <h4>Luas do satélite</h4>
        <ul>
          {this.state.satellites.map((satellite, index) => 
            <li key={index}>{satellite.name}</li>
          )}
        </ul>
        <hr/>
      </div>
    )
  }


}


export default Planet