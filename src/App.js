import './App.css';
import CardFilter from './components/list/CardFilter';
import CardList from './components/list/CardList';
import { ScrapProvider } from './context/scrap';
import { ListProvider } from './context/list';

function App() {
  return (
    <ListProvider>
      <ScrapProvider>
        <div className="App">
          <CardFilter />
          <CardList />
        </div>
      </ScrapProvider>
    </ListProvider>
  );
}

export default App;
