import GreyImg from '../../shared/grey-img'
import Description from '../../shared/description'
import React from 'react'


class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellites: []
    }
  }

  getSatellites = async function () {
    let response = await fetch(`http://localhost:3000/api/${this.props.id}.json`)
    let data = response.json()
    return data
  }

  componentDidMount() {
    this.getSatellites().then(data => {
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
        {this.state.satellites.map(satellite => 
          <p>{satellite.name}</p>
        )}
        <hr/>
      </div>
    )
  }


}


export default Planet