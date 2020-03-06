import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DummyPage from './DummyPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/dummy">Test Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/dummy" component={DummyPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
