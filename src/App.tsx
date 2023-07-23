import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const handleLogin = () => {
      navigate('/Test');
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        <A />
        <Drop optionList={arr} placeholder={string2} />
        <button className="button" onClick={handleLogin}>
          Testを呼ぶ
        </button>
      </div>
      </header>
    </div>
  );
}
