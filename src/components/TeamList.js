// Importing necessary modules from React
import React, { useEffect, useState } from 'react';

// Importing the TeamCard component to display individual team information
import TeamCard from './TeamCard';

// Importing the JSON data containing all the teams
import teamsData from '../CollegeBasketballTeams.json';

// TeamList component responsible for rendering a list of all team cards
const TeamList = () => {
  // Initializing state to store the array of teams
  const [teams, setTeams] = useState([]);

  // useEffect hook to set the teams data when the component mounts
  useEffect(() => {
    // Check if the imported JSON data is available and contains a 'teams' array
    if (teamsData && teamsData.teams) {
      // Set the state with the teams data
      setTeams(teamsData.teams);
    } else {
      // Log an error message if the data is not found
      console.error('No teams data found in the JSON file.');
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex flex-wrap justify-center">
      {teams.length > 0 ? (
        // Map over the teams array to generate a TeamCard for each team
        teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))
      ) : (
        // Display a message if no team data is available
        <p className="text-center text-red-500">No team data available.</p>
      )}
    </div>
  );
};

// Exporting the TeamList component for use in other parts of the app
export default TeamList;
