import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className='home'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;