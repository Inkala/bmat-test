import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SideMenu.css';

const sideMenu = () => (
  <nav className='side-menu'>
    <ul className='menu-content'>
      <li>
        <NavLink to='/' exact>
          <FontAwesomeIcon icon='desktop' />
          Reports
        </NavLink>
      </li>
      <li>
        <NavLink to='/sendungen' >
          <FontAwesomeIcon icon={['far', 'list-alt']} />
          Sendungen
        </NavLink>
      </li>
      <li>
        <NavLink to='/programs'>
          <FontAwesomeIcon icon={['far', 'file-alt']} />
          Programs
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default sideMenu;
