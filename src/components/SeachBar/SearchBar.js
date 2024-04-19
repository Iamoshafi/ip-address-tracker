import React from 'react'
import { useState } from 'react';
import "./SearchBar.css"

const SearchBar = ({setIPAddress, fetchLocation}) => {
  const [ipAddress, setIpAddress] = useState("");

  const handleClick = () => {
    console.log(ipAddress);
    setIPAddress(ipAddress);
    fetchLocation(ipAddress);
  }; 

  return (
    <div className="search-bar-container">
      <h3 className="title">IP Address Tracker</h3>
      <div className='form'>
        <input
          type="text"
          onChange={(e) => {
            setIpAddress(e.target.value);
          }}
          className="input"
          placeholder="Search for any IP address or domain"
        />
        <button onClick={handleClick}>go</button>
      </div>
    </div>
  );
}

export default SearchBar
