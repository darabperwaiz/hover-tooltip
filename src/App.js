
import './App.css';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
        <div className='wrapper'>
          <Tooltip position='bottom' tooltipText='Button'>
          <button>Press</button>
          </Tooltip>
        </div>
    </div>
  );
}

export default App;
