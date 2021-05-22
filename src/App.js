import logo from './logo.svg';
import './App.css';

function HelloFromComponent() {
  return <h2>Hello from functional component!</h2>
}

// what looks like html is actually jsx

function App() {
  const Hello = "Hello World from JS!";
  return (
    <div className="App">
      <header className="App-header">
         <HelloFromComponent />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <h2>Hello World</h2>
        <h3>{Hello}</h3>
        <HelloFromComponent />
        
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

export default App;
