import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form.name);
    console.log(form.description);
  };

  return (
    <>
      <Greetings name="Hello" onClick={onClick} />
      {/* 컴포넌트의 렌더링에 필요한 props를 빠뜨리면 에러  */}
      {/* Ctrl + Space 눌러보면 props 어떤 값이 들어가야하는지 보여줌 */}
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </>
  );
}

export default App;

// 화살표 함수보다 function 키워드를 사용하여 개발하는 것이 추세
