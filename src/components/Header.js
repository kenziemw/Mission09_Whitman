// Importing the React library to create a functional component
import React from 'react';

// Header component to display the title and introduction message
const Header = () => (
  // The main header section with Tailwind CSS classes for styling
  <header className="bg-blue-600 text-white p-4 text-center">
    
    {/* The main title of the site with large and bold text */}
    <h1 className="text-3xl font-bold">NCAA Basketball Teams</h1>
    
    {/* A subtitle providing additional context about the site */}
    <p className="text-lg">
      Explore information about all the college basketball teams!
    </p>
    
  </header>
);

// Exporting the Header component for use in the main App and other components
export default Header;

