import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

const header = () => (
  <header className='header'>
    <FontAwesomeIcon className='header__icon' icon={['far', 'user-circle']} />
    <FontAwesomeIcon
      className='header__icon header__icon--arrow'
      icon='sort-down'
    />
  </header>
);

export default header;
