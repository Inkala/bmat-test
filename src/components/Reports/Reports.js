import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './SearchBar/SearchBar';
import Calendar from './Calendar/Calendar';
import ReportsTable from './ReportsTable/ReportsTable';
import { mockAPI } from '../../helpers/mockAPI';
import './Reports.css';

class Reports extends Component {
  state = {
    reports: null,
    initialReports: [],
    error: null
  };

  /*--- Call fetch method when app loads ---*/
  componentDidMount() {
    mockAPI()
      .then(res => {
        this.setState({ reports: res, initialReports: res });
      })
      .catch(err => console.log(err));
  }

  /*--- Filters program by name ---*/
  filterProgramHandler = e => {
    const searchValue = e.target.value.toUpperCase();
    const filteredTable = this.state.initialReports.filter(program => {
      return program.name.toUpperCase().includes(searchValue);
    });
    this.setState({ reports: filteredTable });
  };

  /*--- Makes green tick appear ---*/
  sendSuccessHandler = rep => {
    const reports = this.state.reports.map(report => {
      if (report.name === rep.name) {
        report.sent = true;
      }
      return report;
    });
    this.setState({ reports });
  };

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    const reportsTable = this.state.reports ? (
      <ReportsTable
        reports={this.state.reports}
        handleSuccess={this.sendSuccessHandler}
      />
    ) : (
      <p>'Loading...'</p>
    );
    return (
      <section className="reports">
        <div className="reports--nav">
          <SearchBar onSearchChange={this.filterProgramHandler} />
          <Calendar />
        </div>
        <div className="reports--options">
          <span>
            Sort By: Program
            <FontAwesomeIcon
              aria-hidden="false"
              aria-label="Sorting direction"
              role="button"
              icon="arrow-down"
            />
          </span>
          <div>
            <FontAwesomeIcon
              aria-hidden="false"
              aria-label="Settings"
              role="button"
              icon="sliders-h"
            />
            <FontAwesomeIcon
              aria-hidden="false"
              aria-label="Views"
              role="button"
              icon="columns"
            />
          </div>
        </div>
        {reportsTable}
      </section>
    );
  }
}

export default Reports;

// Placeholders for menu
export const Sendungen = () => <p>Placeholder for Sendungen content</p>;
export const Programs = () => <p>Placeholder for Programs content</p>;
