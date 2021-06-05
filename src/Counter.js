import React,{useState,useEffect} from 'react'

function Counter() {
    const[count,setCount]= useState(0)
useEffect(()=>{
    console.log('mounding...')
    console.log('updating..'+count)
    return ()=>{
        console.log('unmounding...')
    }
},[count])

    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>increment</button>
            <h1>count: {count}</h1>
        </div>
    )
}

export default Counter
