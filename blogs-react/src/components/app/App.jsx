import React from 'react';
import { Blogs } from '../blogs/Blogs';
import './App.css';

export function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const squares = [];

  nums.forEach(num => squares.push(num ** 2));
  const cubes = nums.map(num => num ** 3);

  return (
    <div className="App">
      <header></header>
      <main>
        <Blogs />
      </main>
      <footer></footer>
    </div>
  );
}
