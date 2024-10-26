import logo from './logo.svg';
import './App.css';
import { Componente1 } from './componentes/Componente1';
import Componente2 from './componentes/Componente2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Componente1 />
        <Componente2 />
      </header>
    </div>
  );
}

export default App;
