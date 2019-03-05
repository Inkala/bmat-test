import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SideMenu.css';

const sideMenu = () => (
  <ul className='side-menu'>
    <li className='side-menu--item'>
      <FontAwesomeIcon icon='desktop' />
      Reports
    </li>
    <li className='side-menu--item'>
    <FontAwesomeIcon icon={['far', 'list-alt']} />
    Sendungen</li>
    <li className='side-menu--item'>
      <FontAwesomeIcon icon={['far', 'file-alt']} />
      Programs
    </li>
  </ul>
);

export default sideMenu;
