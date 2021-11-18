
import './css/App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
    );
}

export default App;
