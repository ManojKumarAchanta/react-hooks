import React from 'react'
import { useState } from 'react';

function Usestate() {
  const [color,setColor] = useState('red');
  const [count,setCount] = useState(0);
  return (
    <>
    <h1>My favourite color is {color}</h1>
    <button onClick={()=>setColor('blue')}>Blue</button>
    <button onClick={()=>setColor('red')}>Red</button>

    <h1>count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button> 
    <button onClick={()=>setCount(count-1)}>Decrement</button> 
    <button onClick={()=>setCount(0)}>Reset</button> 
    <button onClick={()=>setCount((prev)=>prev+4)}>Increment by 4</button>
    </>
  )
}

export default Usestate;