
import './css/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home} />
      </Routes>
    </Router>
    );
}

export default App;
