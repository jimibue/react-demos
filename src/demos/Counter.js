import {useState} from 'react'
import DemoContainer from './DemoContainer';

const Counter = () => {
  const [count, setCount ] = useState(0)
  return (
    <DemoContainer header='Counter App' code={CounterCode}>
      <h3>count: {count}</h3>
      <button onClick={()=> setCount(count + 1)}>add</button>
      <button onClick={()=> setCount(count - 1)}>minus</button>
    </DemoContainer>
  );
}

export default Counter;

const CounterCode =`//
import {useState} from 'react'
import DemoContainer from './DemoContainer';

const Counter = () => {
  const [count, setCount ] = useState(0)
  return (
    <DemoContainer header='Counter App'>
      <h3>count: {count}</h3>
      <button onClick={()=> setCount(count + 1)}>add</button>
      <button onClick={()=> setCount(count - 1)}>minus</button>
    </DemoContainer>
  );
}

export default Counter;`