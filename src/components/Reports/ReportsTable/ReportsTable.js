import React from "react";

import ReportsItem from "./ReportsItem/ReportsItem";
import "./ReportsTable.css";

const reportsTable = ({ reports, handleSuccess }) => {
  const reportsList = reports.map(report => (
    <ReportsItem
      key={report.name}
      report={report}
      clickHandler={() => handleSuccess(report)}
    />
  ));
  return (
    <div className="test">
      <table className="report-table">
        <tbody>{reportsList}</tbody>
      </table>
    </div>
  );
};

export default reportsTable;
