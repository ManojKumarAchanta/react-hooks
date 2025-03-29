import React from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react'

export const UseLayoutEffect = () => {
    useEffect(()=>{
        console.log("useEffect");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    },[])
  return (
    <div>
        <h1>Test message</h1>
        {Array(40000).fill('').map((item,index)=>(
            <li key={index}>{Math.pow(Math.random(item),10)}</li>
        ))}
    </div>
  )
}
