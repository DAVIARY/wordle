import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Board(){
  let board = document.getElementById("board");
  for(let i=0; i < 6; i++){
    let row = document.createElement("div")
    row.className="row"
    for(let u=0; u < 5; u++){
      let box = document.createElement("div")
      box.className = "letter-Box"
      row.appendChild(box);
    }
    
    board.appendChild(row)
  }
} 


export default App;
