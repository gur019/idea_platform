import './styles/App.scss';
import Filters from './components/Filters';
import Tickets from './components/Tickets';

function App() {
  return (
    <div className="App">
        <Filters/>
        <Tickets/>
    </div>
  );
}

export default App;