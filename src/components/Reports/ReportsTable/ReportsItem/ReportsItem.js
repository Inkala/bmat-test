import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ReportsItem.css';

const reportsItem = ({ report }) => (
  <tr className='report-item'>
    <td>
      <span className='item--name'>{report.name}</span>
      <span className='item--date'>
        <small>{report.date}</small>
      </span>
    </td>
    <td>
      <span className='item--group'>{report.group}</span>
      <span className='item--groupType'>
        <small>{report.groupType}</small>
      </span>
    </td>
    <td>
      <span className='item--sentItems'>
        {`${report.sentItems}/${report.validatedItems}`}
      </span>
      <span className='item--errors'>
        <small>
          <FontAwesomeIcon icon='exclamation-circle' /> {report.errors}
        </small>
      </span>
    </td>
    <td>
      <span className='item--icons'>
        <FontAwesomeIcon icon='cloud-download-alt' />
        <FontAwesomeIcon icon='paper-plane' />
      </span>
    </td>
  </tr>
);

export default reportsItem;
