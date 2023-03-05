import GreyImg from '../../shared/grey-img'
import Description from '../../shared/description'
import React, { useEffect, useState } from 'react'

let getSatellites = async function (id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = response.json()
  return data
}

// componentDidMount() {
//   getSatellites(this.props.id).then(data => {
//     this.setState({
//       satellites: data['satellites']
//     })
//   })
// }


const Planet = (props) => {
  const [satellites, setSatellites] = useState([])

  useEffect(() => {
    getSatellites(props.id).then(data => {
      setSatellites(data['satellites'])
    })
  },[])

  return (
    <div>
      <h4>{props.name}</h4>
      <Description
        description={props.description}
        link={props.link}
      />
      <GreyImg 
        img_url={props.img_url}
      />
      <h4>Luas do satélite</h4>
      <ul>
        {satellites.map((satellite, index) => 
          <li key={index}>{satellite.name}</li>
        )}
      </ul>
      <hr/>
    </div>
  )
}


export default Planet