import React from 'react';


export default function Component71() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h2>Component 71</h2>
        <p>This is component number 71</p>
        
        <p>Counter for this component: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
}

