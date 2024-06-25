import React from "react";
import { players as mockPlayers } from "../data/mockData";

const Leaderboard: React.FC = () => {
  const sortedPlayers = mockPlayers.sort((a, b) => b.score - a.score);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Leaderboard</h2>
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {sortedPlayers.map((entry, idx) => (
            <li key={idx} className="mb-2">
              {entry.name}: {entry.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
