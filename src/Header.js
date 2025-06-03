import React from 'react';
import './Header.css'; // ✅ Import the styles
import locationIcon from '@iconify/icons-mdi/fire-alert';
import LocationInfo from './LocationInfo';

const Header = () => {
  return (
    <div className='header'>
        <h1>WILDGUARD</h1>
        <h2>wildfire tracker powered by NASA</h2>
    </div>
  );
};

export default Header;
