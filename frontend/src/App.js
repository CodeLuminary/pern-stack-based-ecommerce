import './css/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" exact element={<Home />} />

      </Routes>
    </Router>
    );
}

export default App;
