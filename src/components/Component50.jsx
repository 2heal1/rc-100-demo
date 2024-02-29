import React from 'react';
import img from '../assets/image50.jpg';

export default function Component50() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h2>Component 50</h2>
        <p>This is component number 50</p>
        <img src={img} style={{width:100}} alt='Image for Component 50' />
        <p>Counter for this component: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
}

