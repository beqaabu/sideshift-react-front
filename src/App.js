import './App.css';
import Address from './Components/Address.js';
import SelectCoins from './Components/SelectCoins.js';
import SelectType from './Components/SelectType';

function App() {
  return (
    <div className="App">
      <SelectType /> 
      <SelectCoins />
      <SelectCoins />
      <Address />
    </div>
  );
}

export default App;
