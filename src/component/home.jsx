import React from 'react'
import ColorContext from '../theme'
import {useContext} from "react";
import {useRef, useEffect} from "react";

const Home = () => {
  // const bgColor = {
  //   green : "bg-green-500",
  //   red : "bg-red-500"
  // }
  let ref = useRef();
  
  useEffect(()=>{
    if(ref.current){
      ref.current.style.backgroundColor="yellow";
    }
  },[])
  //  const {color} =useContext(ColorContext);
  //  console.log(color);
   
  
  return (
    <div >
      <h1 ref={ref}>This is my home page</h1>
    </div>
  )
}

export default Home
