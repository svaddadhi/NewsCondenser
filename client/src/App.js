import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchNews from "./components/SearchNews";
function App() {
  return (
    <div className="App">
      <h1>News Summarizer</h1>
      <SearchNews />
    </div>
  );
}

export default App;
