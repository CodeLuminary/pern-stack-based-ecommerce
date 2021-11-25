import './css/App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    );
}

export default App;
