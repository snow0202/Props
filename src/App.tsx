import React from 'react';
import './App.css';
import { A } from './Props/A'
import { Drop } from './Doropdown/Drop'

export const App = () => {

  const arr: Array<{ value: string; name: string }> = [
    { value: '1', name: 'Selection1' },
    { value: '2', name: 'Selection2' },
    { value: '3', name: 'Selection3' },
    { value: '4', name: 'Selection4' }
  ];

  const string: string = "Label";
  const string2: string = "input";

  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        <A />
        <Drop 
          optionList={arr} 
          placeholder={string2}
        />

      </div>
      </header>
    </div>
  );
}
