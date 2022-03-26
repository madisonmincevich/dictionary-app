import "./App.css";

import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="dictionaryApp">
        <div className="container">
          <div className="col">
            <img src="https://img.icons8.com/dotty/2x/m.png" alt="logo" />
            <Dictionary defaultKeyword="sunset" />
            <footer>
              <a
                href="https://github.com/madisonmincevich/dictionary-app"
                target="_blank"
                rrel="noreferrer"
              >
                Open source
              </a>{" "}
              code by{" "}
              <a
                href="https://stupefied-poitras-c9d7d8.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Maddie Mincevich
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
