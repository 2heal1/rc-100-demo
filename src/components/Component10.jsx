import React from 'react';
import img from '../assets/image10.jpg';

export default function Component10() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h2>Component 10</h2>
        <p>This is component number 10</p>
        <img src={img} style={{width:100}} alt='Image for Component 10' />
        <p>Counter for this component: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
}

