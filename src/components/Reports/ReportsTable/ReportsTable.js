import React from 'react';

import ReportsItem from './ReportsItem/ReportsItem';
import './ReportsTable.css';

const reportsTable = (props) => {
  const reports = props.reports.map((report) => (
    <ReportsItem key={report.name} report={report} />
  ));
  return (
    <table className='report-table'>
      <tbody>{reports}</tbody>
    </table>
  );
};

export default reportsTable;
