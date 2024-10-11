import React, { useRef, useState } from 'react'

export default function PreviousCount() {
    const [count,setCount] = useState(0);

    const Previousvalue = useRef(0);

    const increase =()=>{
        Previousvalue.current = count;
        setCount(count+1);
    }
  return (
    <div>
        <h1> Current Count : {count}</h1>
        <h2> PreviousCount : {Previousvalue.current}</h2>
        <button onClick={increase}> Increase   </button>

      
    </div>
  )
}
