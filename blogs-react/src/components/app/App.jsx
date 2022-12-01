import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Blogs } from '../blogs/Blogs';
import { BlogDetail } from '../blog-detail/blog-detail';
import './App.css';

export function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const squares = [];

  nums.forEach(num => squares.push(num ** 2));
  const cubes = nums.map(num => num ** 3);

  return (
    <div className="App">
      <header>
        <nav>
          <menu>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </menu>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogDetail />} />
          <Route path='/' element={<h1>This is Home</h1>} />
        </Routes>
      </main>
      <footer>
        <small>&copy; {new Date().getFullYear()} all rights reserved</small>
      </footer>
    </div>
  );
}
