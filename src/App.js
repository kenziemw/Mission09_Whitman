// Importing necessary React modules and components
import React, { useState } from "react";

// Importing the JSON data directly from the src folder
import teamsData from "./CollegeBasketballTeams.json";

// Importing custom components
import TeamList from "./components/TeamList"; // Displays a list of team cards
import Header from "./components/Header"; // Displays the header section

// Main App component
function App() {
  // Initializing the 'teams' state with the data from the JSON file
  const [teams] = useState(teamsData.teams);

  // The returned JSX structure for the app
  return (
    <div>
      {/* Header component to introduce the site */}
      <Header />
      
      {/* TeamList component that receives the 'teams' array as props */}
      <TeamList teams={teams} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
