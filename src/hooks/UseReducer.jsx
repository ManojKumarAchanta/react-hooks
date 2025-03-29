import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

export const UseReducer = () => {
    const initalState={
        count:0
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "increment":
                return {count:state.count+1}
            case "decrement":
                return {count:state.count-1}
            case "reset":
                return {count:0}
            case "input":
                return {count:action.payload}
            default:
                return state
        }
    }
    const [state,dispatch]=useReducer(reducer,initalState);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        <br />
        <input value={state.count} type="number" onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})}/>
    </div>
  )
}
