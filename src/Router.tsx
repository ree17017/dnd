import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterSheet from './pages/CharacterSheet';
import React from 'react';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterSheet />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
