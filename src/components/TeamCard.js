// Importing the React library to build a component
import React from 'react';

// TeamCard component to display individual team information
// 'team' is a prop passed to this component containing the team's data
const TeamCard = ({ team }) => (
  <div className="border p-4 rounded-lg shadow-md bg-white m-2">
    
    {/* Displaying the school name with styled heading */}
    <h2 className="text-xl font-semibold">{team.school}</h2>
    
    {/* Displaying the mascot name */}
    <p className="text-gray-700">Mascot: {team.name}</p>
    
    {/* Displaying the team's location with city and state */}
    <p className="text-gray-700">Location: {team.city}, {team.state}</p>
    
  </div>
);

// Exporting the TeamCard component for use in other parts of the application
export default TeamCard;
