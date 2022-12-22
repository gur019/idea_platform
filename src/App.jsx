import './styles/App.scss';
import Filters from './components/Filters';
import Tickets from './components/Tickets';
import tickets from './tickets.json';

function App() {
  return (
    <div className="App">
        <Filters/>
        <Tickets tickets={tickets}/>
    </div>
  );
}

export default App;