import React, { Fragment, useState, useEffect } from "react"
import Planet from "./Planet"

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = response.json()
  return data
}


const Planets = () => {

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  },[])

  const removelast = () => {
    let new_planets = [...planets]
    new_planets.pop()
    setPlanets(new_planets)
  }

  const duplicateLast = () => {
    let duplicated = planets[planets.length - 1]
    let new_planets = [...planets, duplicated]
    setPlanets(new_planets)
  }

  return (
    <Fragment>
      <h1>Planet list</h1>
      <button onClick={removelast}>Remover último</button>
      <button onClick={duplicateLast}>Duplicar o último</button>
      {planets.map((planet, index) => 
        <Planet 
        name={planet.name}
        description={planet.description}
        link={planet.link}
        img_url={planet.img_url}
        id={planet.id}
        key={index}
        />
      )}
    </Fragment>
  )
}

export default Planets