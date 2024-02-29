import React from 'react';


export default function Component45() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h2>Component 45</h2>
        <p>This is component number 45</p>
        
        <p>Counter for this component: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
}

