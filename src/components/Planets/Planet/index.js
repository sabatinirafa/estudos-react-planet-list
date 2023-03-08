import GreyImg from '../../shared/grey-img'
import Description from '../../shared/description'
import React, { useEffect, useState } from 'react'


const Planet = (props) => {

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
      <hr/>
    </div>
  )
}


export default Planet