import React ,{ Component } from 'react';
import RouteComponent from './Routes';
import './App.css';

class App extends Component {
  
  render(){
    return (
      <div className="app">
        <header>
          <h2>React</h2>
        </header>
        <section>
          <RouteComponent />
        </section>
        <footer>
          <p>footer</p>
        </footer>
          
      </div>
    );
  }
}

export default App;
