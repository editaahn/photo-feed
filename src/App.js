import Filter from './components/feed/Filter';
import Feed from './components/feed/Feed';
import { ScrapProvider } from './contexts/scrap';
import { ListProvider } from './contexts/list';
import "./styles/components/common.scss";
import "./styles/layout/layout.scss";

function App() {
  return (
    <ListProvider>
      <ScrapProvider>
        <div className="App">
          <Filter />
          <Feed />
        </div>
      </ScrapProvider>
    </ListProvider>
  );
}

export default App;
