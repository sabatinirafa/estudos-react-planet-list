import { Fragment } from "react"

const Description = (props) => {
  return (
    <Fragment>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
      <br/>
      <br/>
    </Fragment>
  )
}

export default Description