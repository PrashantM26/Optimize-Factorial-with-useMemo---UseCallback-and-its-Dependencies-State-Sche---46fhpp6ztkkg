"use client"
import React, { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';

export default function Home() {
  const [inputNumber, setInputNumber] = useState(5);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <section>
        <h2>Factorial Calculation</h2>
        <input 
          type="number" 
          value={inputNumber}
          onChange={(e)=>{setInputNumber(e.target.value)}}
          placeholder="Enter a number" 
        />
        <FactorialComponent number={inputNumber} />
      </section>
    </div>
  );
}
