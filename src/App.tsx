import React from 'react';
import styles from './App.module.css';
import { Button } from './Components/Button/Button';
// import { A } from './Props/A';

export const App: React.FC = () => {
  const name: string = "Enter";
  return (
    <>
      <div className={styles.app}>
        <Button name={name} />
      </div>
    </>
  );
}