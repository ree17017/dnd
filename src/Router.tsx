import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CharacterSheet from './pages/CharacterSheet';
import CombatTracker from './pages/CombatTracker';
import React from 'react';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterSheet />}></Route>
        <Route path="/combattracker" element={<CombatTracker />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
