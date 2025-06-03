import React from 'react'
import Home from './component/home'
import About from './component/about'
import ColorContext from './theme'
import {useState} from "react";
import Todo from '../todolist/listItem'
import List from '../todoNew/list';

const App = () => {

    const [color, setColor] = useState("green");
  
  return (
    <div>
      <ColorContext.Provider value={{color, setColor}}>
         <Home/>
         <About/>
         <List/>
      </ColorContext.Provider>
       
   
      
    </div>
  )
}

export default App
