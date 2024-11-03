import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage.tsx';
import {RecipePage} from './Recipes.tsx';

export default function App() {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:recipeName" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}


