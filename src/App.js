import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import MoodDiary from './pages/MoodDiary/MoodDiary';
import Resources from './pages/Resources/Resources';
import './App.css';

function App() {
  return (
    
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/MoodDiary" element={<MoodDiary/>} />
            <Route path="/Resources" element={<Resources/>} />
          </Routes>
        </Navbar>
    </Router>
    
  );
}

export default App;
