import React from 'react'
import './Stats.css'

const Stats = ({ ipAddress, location, timeZone, isp }) => {
  return (
    <div className="stats-container">
      <div className="details">
        <div className="ip-info">
          <h6>IP Address</h6>
          <p>{ipAddress}</p>
        </div>
        <div className="ip-info">
          <h6>Location</h6>
          <p>{location}</p>
        </div>
        <div className="ip-info">
          <h6>Timezone</h6>
          <p>{timeZone}</p>
        </div>
        <div className="ip-info">
          <h6>ISP</h6>
          <p>{isp === '' ? 'Unavailable' : isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats
