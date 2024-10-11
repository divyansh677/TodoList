import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Using prevCount in setCount to avoid closure issues
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1); // Always uses the latest state
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
