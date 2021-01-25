import './App.css';
import CardFilter from './components/list/CardFilter';
import CardList from './components/list/CardList';
import { ScrapProvider } from './context/scrap';

function App() {
  return (
    <ScrapProvider>
    <div className="App">
      <CardFilter />
      <CardList />
    </div>
    </ScrapProvider>
  );
}

export default App;
