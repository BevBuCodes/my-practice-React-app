import logo from './logo.svg';
import './App.css';
import HelloFromComponent from './components/HelloFromFunctionalComponent'
import HelloFromClassComponent from './components/HelloFromClassComponent'

function App() {
  const Hello = <h2>Hello World from JS</h2>;

  var nameArray = [
    "Trudy",
    "Tom",
    "Garrett"
  ]
 

  return (
    <div className="App">
      <header className="App-header">
      

        <img src={logo} className="App-logo" alt="logo" />
        

        <h2 className="greeting">Hello World</h2>
        {Hello}
        
        <HelloFromComponent name="Beverly"/>

         {nameArray.map(individualName => <HelloFromClassComponent key={individualName} name={individualName}/>)}
        
         <HelloFromClassComponent />
        

      </header>
    </div>
  );
}

export default App;
