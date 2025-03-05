import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/CollegeBasketballTeams.json') // Make sure the file is in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched Data:', data); // Debugging output
        setTeams(data.teams);
      })
      .catch((error) => console.error('Error fetching team data:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {teams.length > 0 ? (
        teams.map((team, index) => <TeamCard key={index} team={team} />)
      ) : (
        <p className="text-center text-red-500">No team data available.</p>
      )}
    </div>
  );
};

export default TeamList;
