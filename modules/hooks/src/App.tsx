import React from 'react';
import { useInput } from 'seo-input-hooks';
import './App.css';

function App() {
  const { value, onChange } = useInput('');

  return (
    <div>
      <h1>useInput Example</h1>
      <input type='text' value={value} onChange={onChange} />
      <p>Input value: {value}</p>
    </div>
  );
}

export default App;
