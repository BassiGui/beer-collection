import React from 'react';

const TestComponent: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Teste de Formatação</h1>
      <p>Contador: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

export default TestComponent;
