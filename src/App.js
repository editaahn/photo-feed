import FilterToggle from "./components/feed/FilterToggle";
import Feed from "./components/feed/Feed";
import { ScrapProvider } from "./contexts/scrap";
import { ListProvider } from "./contexts/list";
import { NoticeProvider } from "./contexts/notice";
import "./styles/components/common.scss";
import "./styles/layout/layout.scss";

function App() {
  return (
    <NoticeProvider>
      <ListProvider>
        <ScrapProvider>
          <div className="App">
            <FilterToggle />
            <Feed />
          </div>
        </ScrapProvider>
      </ListProvider>
    </NoticeProvider>
  );
}

export default App;
