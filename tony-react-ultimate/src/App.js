import './App.css';


// components
import { Button, ButtonWithIcon } from './components/Button';
import ComposeComponent from './components/ComposeComponent';

function App() {

  const element_2 = (
    <ul>
      <li>React</li>
      <li>Angular</li>
    </ul>
  )
  
  function traditionalA() {
    return (
      <div>this is traditionalA</div>
    )
  }

  const funA = () => {
    return (
      <div>this is funcA</div>
    )
  }
  const shortHand = () => (<div>short hand</div>);


  return (
    <div>
      <div className="App">
        <header>
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

      
      {/* section closing tag */}
      <br />
      {/* <img src="xx" alt='' /> */}
      <div className='divEmpty'/>

      {/* section large html block */}
      {element_2}

      {funA()}
      {shortHand()}
      {traditionalA()}
      
      <Button />

      <br />
      <br />
      {/* section compose component */}
      <ComposeComponent />


      <div className="App">
        dasds
      </div>  
    </div>
   
  );
}

export default App;
