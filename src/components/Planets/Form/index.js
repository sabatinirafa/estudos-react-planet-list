import React, {Fragment, useState} from "react"

const initialState = {
  name: '',
  description: '',
  link: '',
  img_url: ''
}


const Form = (porps) => {

  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = ev => setFields({
    ...fields,
    [ev.target.name]: ev.target.value
  })
  

  const handleSubmit = ev => {
    porps.addPlanet(fields)
    ev.preventDefault()
    setFields(initialState)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input id="description" name="description" type="text" value={fields.description} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="link">Link: </label>
          <input id="link" name="link" type="text" value={fields.link} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="img_url">img_url: </label>
          <input id="img_url" name="img_url" type="text" value={fields.img_url} onChange={handleFieldsChange}/>
        </div>
        <br/>
        <input type="submit"/>
      </form>
    </Fragment>
  )
}

export default Form