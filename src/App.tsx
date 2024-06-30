import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Main } from './Components/Main/Main';
import { Welcome } from './Components/Welcome/Welcome';
// import { A } from './Props/A';

export const App: React.FC = () => {

  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/Welcome" element={<Welcome />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}