import GreyImg from '../shared/grey-img'
import Description from '../shared/description'
import React, { useEffect, useState } from 'react'
import Form from './Form'

let getSatellites = async function (id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = response.json()
  return data
}


const Planet = (props) => {
  const [satellites, setSatellites] = useState([])

  useEffect(() => {
    getSatellites(props.id).then(data => {
      setSatellites(data['satellites'])
    })
  },[])

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, {name: new_satellite}])
  }

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
      <Form addSatellite={addSatellite}/>
      <hr/>
    </div>
  )
}


export default Planet