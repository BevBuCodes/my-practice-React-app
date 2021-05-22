import logo from './logo.svg';
import './App.css';
import HelloFromComponent from './components/HelloFromFunctionalComponent'

function App() {
  const Hello = <h2>Hello World from JS</h2>;
  return (
    <div className="App">
      <header className="App-header">
         <HelloFromComponent />

        <img src={logo} className="App-logo" alt="logo" />
        

        <h2>Hello World</h2>
        {Hello}
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
