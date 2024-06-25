import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="p-4 bg-white shadow-md mb-8">
          <div className="max-w-2xl mx-auto flex justify-between">
            <Link to="/" className="text-lg font-semibold text-gray-800">
              Quiz App
            </Link>
            <Link
              to="/leaderboard"
              className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              Leaderboard
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
