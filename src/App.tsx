import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Main } from './Components/Main/Main';
import { Welcome } from './Components/Welcome/Welcome';
import { MAIN_URL, WELCOM_URL } from './utils/constants';
// import { A } from './Props/A';

export const App: React.FC = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={MAIN_URL} element={<Main />} />
        <Route path={WELCOM_URL} element={<Welcome />} />
      </Routes>
    </AnimatePresence>
  );
}