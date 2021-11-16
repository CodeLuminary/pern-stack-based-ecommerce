import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
    );
}

export default App;
