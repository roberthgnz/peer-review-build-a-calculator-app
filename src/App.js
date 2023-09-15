import React from 'react';

import './style.css';

export default function App() {
  const [result, setResult] = React.useState(0);
  const [number, setNumber] = React.useState(0);

  const calculate = (act) => {
    switch (act) {
      case 'add':
        setResult((prev) => prev + number);
        break;
      case 'subtract':
        setResult((prev) => prev - number);
        break;
      case 'multiply':
        setResult((prev) => prev * number);
        break;
      case 'divide':
        setResult((prev) => prev / number);
        break;
    }
  };

  return (
    <div>
      <h1>Simplest Working Calculator</h1>
      <p>{result}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        required
      />
      <p className="controls">
        <button onClick={() => calculate('add')}>add</button>
        <button onClick={() => calculate('subtract')}>subtract</button>
        <button onClick={() => calculate('multiply')}>multiply</button>
        <button onClick={() => calculate('divide')}>divide</button>
        <button className="special" onClick={() => setNumber(0)}>
          reset input
        </button>
        <button className="special" onClick={() => setResult(0)}>
          reset result
        </button>
      </p>
    </div>
  );
}
