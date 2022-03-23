import "./App.css";
import icon from "./icon.png";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="dictionaryApp">
        <div className="container">
          <img src={icon} alt="" className="icon" />
          <h1>Dictionary App</h1>
          <Dictionary />
          <footer className="mt-4">Coded by Maddie Mincevich</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
