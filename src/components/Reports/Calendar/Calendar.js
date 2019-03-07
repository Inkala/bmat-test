import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './Calendar.css';

const calendar = () => {
  const options = [
    'October 2018',
    'November 2018',
    'December 2018'
  ];
  const defaultOption = options[0];
  return (
    <div className='calendar'>
      <FontAwesomeIcon icon='angle-left' />
      <div className='calendar-wrapper'>
        <FontAwesomeIcon icon={['far', 'calendar-alt']} />
        <Dropdown
          options={options}
          value={defaultOption}
          placeholder={defaultOption}
          controlClassName='dropdown'
          placeholderClassName='dd-placeholder'
          menuClassName='dd-menu'
        />
      </div>
      <FontAwesomeIcon icon='angle-right' />
    </div>
  );
};

export default calendar;
