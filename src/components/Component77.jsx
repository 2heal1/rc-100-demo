import React from 'react';


export default function Component77() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h2>Component 77</h2>
        <p>This is component number 77</p>
        
        <p>Counter for this component: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
}

