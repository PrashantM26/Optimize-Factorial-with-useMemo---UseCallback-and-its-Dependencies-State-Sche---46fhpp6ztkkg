"use client"
import React, { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';

export default function Home() {
  const [inputNumber, setInputNumber] = useState(21);

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <section>
        <h2>Factorial Calculation</h2>
        <input 
          type="number" 
          value={inputNumber}
          onChange={handleInputChange}
          placeholder="Enter a number" 
        />
        <FactorialComponent number={inputNumber} />
      </section>
    </div>
  );
}
