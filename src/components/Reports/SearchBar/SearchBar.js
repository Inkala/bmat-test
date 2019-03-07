import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SearchBar.css';

const searchBar = ({ onSearchChange }) => {
  return (
    <div className='search-bar'>
      <FontAwesomeIcon icon='search' />
      <input
        type='text'
        className='search-bar__input'
        placeholder='Search Programs'
        onChange={onSearchChange}
      />
    </div>
  );
};

export default searchBar;
