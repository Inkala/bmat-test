import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ReportsItem.css';

const reportsItem = ({ report, clickHandler }) => (
  <tr className="report-item">
    <td>
      <span className="item--name">{report.name}</span>
      <span className="item--date">
        <small>{report.date}</small>
      </span>
    </td>
    <td>
      <span className="item--group">{report.group}</span>
      <span className="item--groupType">
        <small>{report.groupType}</small>
      </span>
    </td>
    <td>
      <span className="item--sentItems">
        {`${report.sentItems}/${report.validatedItems}`}
      </span>
      <span className="item--errors">
        {parseInt(report.errors) ? (
          <small>
            <FontAwesomeIcon
              aria-hidden="false"
              aria-label="Error"
              icon="exclamation-circle"
            />{' '}
            {report.errors}
          </small>
        ) : (
          <div style={{ height: 15 }} />
        )}
      </span>
    </td>
    <td>
      <span className="item--icons">
        <FontAwesomeIcon
          aria-hidden="false"
          aria-label="Download Report"
          role="button"
          icon="cloud-download-alt"
        />
        <FontAwesomeIcon
          aria-hidden="false"
          aria-label="Send Report"
          role="button"
          onClick={clickHandler}
          icon="paper-plane"
        />
        {report.sent ? (
          <FontAwesomeIcon
          aria-hidden="false"
          aria-label="Report sent"
            className="sent-check"
            onClick={clickHandler}
            icon="check-circle"
          />
        ) : null}
      </span>
    </td>
  </tr>
);

export default reportsItem;
