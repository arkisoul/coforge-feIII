import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Blogs } from '../blogs/Blogs';
import { BlogDetail } from '../blog-detail/blog-detail';
import './App.css';

export function App() {
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
