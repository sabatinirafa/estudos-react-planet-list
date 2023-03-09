import GreyImg from '../shared/grey-img'
import Description from '../shared/description'
import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useParams } from 'react-router-dom'

let getPlanet = async function (id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = response.json()
  return data
}


const Planet = () => {
  const [satellites, setSatellites] = useState([])
  const [planet, setPlanet] = useState({})


  let {id} = useParams()

  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    })
  },[])

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, {name: new_satellite}])
  }

  return (
    <div>
      <h4>{planet.name}</h4>
      <Description
        description={planet.description}
        link={planet.link}
      />
      <GreyImg 
        img_url={planet.img_url}
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