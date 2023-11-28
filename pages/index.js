"use client"
import React, { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';

export default function Home() {
  const [inputNumber, setInputNumber] = useState(0);

  const handleInputChange = (e) => {
    const newNumber = parseInt(e.target.value, 10);
    setInputNumber(isNaN(newNumber) ? 0 : newNumber);
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
