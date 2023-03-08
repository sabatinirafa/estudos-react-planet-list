import React, {Fragment, useState} from "react"


const Form = (props) => {

  const [satellite, setSatellite] = useState('')

  const handleChange = (ev) => {
    setSatellite(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (satellite !== '') {
      props.addSatellite(satellite) 
      setSatellite('')
    } 
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor='satellite'>Add new satellite: </label>
        <input type='text' id='satellites' name='satellites' onChange={handleChange} value={satellite}/>
        <br/>
        <input type='submit'/>
      </form>
    </Fragment>
  )
}

export default Form