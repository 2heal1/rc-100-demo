for i in {1..100}
do
echo "import React, { useState, useEffect } from 'react';
$(if [[ $i == 10 || $i == 20 || $i == 30 || $i == 40 || $i == 50 ]]; then echo "import img from '../assets/image$i.jpg';"; fi)

export default function Component$i() {
    const [count, setCount] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        }
    }, []);

    return (
      <div>
        <h2>Component $i</h2>
        <p>This is component number $i</p>
        $(if [[ $i == 10 || $i == 20 || $i == 30 || $i == 40 || $i == 50 ]]; then echo "<img src={img} alt='Image for Component $i' />"; fi)
        <p>Counter for this component: {count}</p>
        <button onClick={handleIncrease}>Increase count</button>
        $(for j in {1..2000}; do echo "<p>Additional content line $j</p>"; done)
        $(for j in {1..2000}; do echo "<li>List item $j</li>"; done)
        <p>Is the component mounted? {isMounted ? 'Yes' : 'No'}</p>
      </div>
    );
}
" > src/components/Component$i.jsx
done