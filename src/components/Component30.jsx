import React from 'react';
import img from '../assets/image30.jpg';

export default function Component30() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <h2>Component 30</h2>
        <p>This is component number 30</p>
        <img src={img} style={{width:100}} alt='Image for Component 30' />
        <p>Counter for this component: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
}

