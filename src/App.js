import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import List from './List';
import Details from './Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/:id/details" element={<><Link to="/">Назад</Link><Details/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
