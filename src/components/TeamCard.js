import React from 'react';

const TeamCard = ({ team }) => (
  <div className="border p-4 rounded-lg shadow-md bg-white m-2">
    <h2 className="text-xl font-semibold">{team.school}</h2>
    <p className="text-gray-700">Mascot: {team.name}</p>
    <p className="text-gray-700">
      Location: {team.city}, {team.state}
    </p>
  </div>
);

export default TeamCard;
