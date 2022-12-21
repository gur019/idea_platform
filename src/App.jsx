import './styles/App.scss';
import Filters from './components/Filters';
import Tickets from './components/Tickets';

function App() {
  return (
    <div className="App">

      <div>
        <Filters/>
      </div>

      <div>
        <Tickets/>
      </div>
      

      
      
    </div>
  );
}

export default App;