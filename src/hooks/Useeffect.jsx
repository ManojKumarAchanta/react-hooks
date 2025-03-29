//fetching data from api
//directly updating the dom
//Timers like setTimeout, setInterval
//side effects
//conditional rendering
//rendering lists
//rendering forms
//rendering data

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function Useeffect() {
    const [count,setCount] = useState(0);
   //to use useEffect 2 params => callback function, dependency array
  useEffect(()=>{
    setTimeout(()=>{
        setCount(count+1);
    },2000);
  },[count]);
  return (
    <>
        <h1>I've rendered {count} times</h1>
    </>
  )
}

export default Useeffect