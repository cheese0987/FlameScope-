import React from 'react';
import './LocationInfo.css'; // 👈 Make sure to import the styles

const LocationInfo = ({ info }) => {
  return (
    <div className='location-info-box'>
      <h2>Event Location Info</h2>
      <ul>
        <li><span>ID:</span> <strong>{info.id}</strong></li>
        <li><span>Title:</span> <strong>{info.title}</strong></li>
      </ul>
    </div>
  );
};

export default LocationInfo;
