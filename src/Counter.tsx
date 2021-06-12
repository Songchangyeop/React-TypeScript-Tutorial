import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // useState를 사용 할 때 Generics 를 사용하지 않아도 알아서 타입을 유추
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
