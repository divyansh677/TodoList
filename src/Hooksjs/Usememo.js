import React, { useState , useMemo } from 'react';

export default function Usememo() {
    const [number, setNumber] = useState(2);
    const squarednumber = useMemo(()=> number * number, [number]);
  return (
    <div>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <p> Squared Number is : {squarednumber}</p>
      
    </div>
  )
}
