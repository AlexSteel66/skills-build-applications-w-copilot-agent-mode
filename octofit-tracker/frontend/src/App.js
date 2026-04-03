import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <div className="container my-4">
        <h1 className="mb-4">OctoFit Tracker</h1>

        <nav className="mb-4">
          <div className="btn-group" role="group" aria-label="Navigation">
            <NavLink to="/" className="btn btn-primary" end>
              Activities
            </NavLink>
            <NavLink to="/teams" className="btn btn-primary">
              Teams
            </NavLink>
            <NavLink to="/users" className="btn btn-primary">
              Users
            </NavLink>
            <NavLink to="/workouts" className="btn btn-primary">
              Workouts
            </NavLink>
            <NavLink to="/leaderboard" className="btn btn-primary">
              Leaderboard
            </NavLink>
          </div>
        </nav>

        <div className="border rounded p-3">
          <Routes>
            <Route path="/" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
