import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';
import { useCallback } from 'react';


export const UseCallback = () => {
    const [count,setCount]=useState(0);
    const newFn=useCallback(()=>{
        console.log("newFn called");
    },[]);
  return (
    <>
        <Header newFn={newFn}/>
        <h1>{count}</h1>    
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </>
  )
}
