import React, {Fragment, useState} from "react"

const Form = (porps) => {

  const [name, setName] = useState('')

  const handleChange = ev => {setName(ev.target.value)}

  const handleSubmit = ev => {
    porps.addPlanet({name: name})
    ev.preventDefault()
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" value={name} onChange={handleChange}/>
        </div>
        <br/>
        <input type="submit"/>
      </form>
    </Fragment>
  )
}

export default Form