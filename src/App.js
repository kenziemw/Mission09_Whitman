import React, { useEffect, useState } from 'react';
import './App.css';

// #1: Heading Component
const Heading = () => (
  <header className="bg-blue-600 text-white p-4 text-center">
    <h1 className="text-3xl font-bold">NCAA Basketball Teams</h1>
    <p className="text-lg">Explore information about all the college basketball teams!</p>
  </header>
);

// #2: Team Card Component
const TeamCard = ({ team }) => (
  <div className="border p-4 rounded-lg shadow-md bg-white m-2">
    <h2 className="text-xl font-semibold">{team.school}</h2>
    <p className="text-gray-700">Mascot: {team.name}</p>
    <p className="text-gray-700">Location: {team.city}, {team.state}</p>
  </div>
);

// #3: Team List Component
const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/CollegeBasketballTeams.json')
      .then(response => response.json())
      .then(data => setTeams(data.teams))
      .catch(error => console.error('Error fetching team data:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Heading />
      <TeamList />
    </div>
  );
};

export default App;
