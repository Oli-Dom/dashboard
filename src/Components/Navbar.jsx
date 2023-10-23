import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="vertical-container">
        <div id="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"></img>
          <h2>ComicBoard</h2>
        </div>
        <div id="routeContainer">
          <h2>Dashboard</h2>
          <h2>Search</h2>
          <h2>About</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
