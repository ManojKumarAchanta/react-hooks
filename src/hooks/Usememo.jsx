import React from 'react'
import { useRef } from 'react';
import { useState ,useMemo } from 'react'

export default function Usememo() {
    const [number,setNumber]=useState(0);
    const [counter,setCounter]=useState(0);

    function cubeNum(number){
        console.log("Calculation done!");
        return Math.pow(number,3);
    }
    const result = useMemo(()=>cubeNum(number),[number]);
  return (
    <>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
    <h1>Cube of the number: {result}</h1>
    <button onClick={()=>setCounter(prev=>prev+1)}>Counter++</button>
    <h1>Counter: {counter}</h1>
    </>
  )
}
