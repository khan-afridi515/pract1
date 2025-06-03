import React from 'react'

import { useContext } from 'react'
import ColorContext from '../theme'

const About = () => {
  let {color}=useContext(ColorContext)
  return (
    <div>
      <h1>This is my about page {color}</h1>
    </div>
  )
}

export default About
