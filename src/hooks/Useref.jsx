import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Useref() {
  // const [value,setValue] = useState(0);
  // const count = useRef(0);
  // console.log(count);
  // useEffect(()=>{
  //   count.current = count.current+1;
  // });
  const inputRef = useRef(null);
  const btnClicked = ()=>{
    console.log(inputRef.current.value);
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "blue";
  }
  return (
    <>
    {/* <button onClick={()=>setValue((prev)=>prev-1)}>-1</button>
    <h1>Value: {value}</h1>
    <button onClick={()=>setValue((prev)=>prev+1)}>+1</button>
    <h1>Render count: {count.current}</h1> */}
    <input type="text" ref={inputRef} />
    <button onClick={btnClicked}>Click here</button>
    </>

  )
}

export default Useref