import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes/Routes';
import Navibar from './components/navibar/Navibar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
