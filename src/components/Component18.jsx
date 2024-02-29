import React from 'react';


export default function Component18() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h2>Component 18</h2>
        <p>This is component number 18</p>
        
        <p>Counter for this component: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
}

