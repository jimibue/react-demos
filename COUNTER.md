```javascript
import {useState} from 'react'

const Counter = () => {
  const [count, setCount ] = useState(0)
  return (
    <>
      <h1>counter app</h1>
      <h3>count: {count}</h3>
      <button onClick={()=> setCount(count + 1)}>add</button>
      <button onClick={()=> setCount(count - 1)}>minus</button>
    </>
  );
}

export default Counter;

```