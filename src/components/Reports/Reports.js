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
    mockAPI().then((res) => {
      this.setState({ reports: res, initialReports: res });
    });
  }

  /*--- Search Bar Methods ---*/
  filterProgramHandler = (e) => {
    const searchValue = e.target.value.toUpperCase();
    const filteredTable = this.state.initialReports.filter((program) => {
      return program.name.toUpperCase().includes(searchValue);
    });
    this.setState({ reports: filteredTable });
  };

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return (
      <section className='reports'>
        <div className='reports--nav'>
          <SearchBar onSearchChange={this.filterProgramHandler} />
          <Calendar />
        </div>
        <div className='reports--options'>
          <span>
            Sort By: Program <FontAwesomeIcon icon='arrow-down' />
          </span>
          <div>
            <FontAwesomeIcon icon='sliders-h' />
            <FontAwesomeIcon icon='columns' />
          </div>
        </div>
        {this.state.reports ? (
          <ReportsTable reports={this.state.reports} />
        ) : (
          <p>{`<Loading />`}</p>
        )}
      </section>
    );
  }
}

export default Reports;

// Placeholders for menu
export const Sendungen = () => <p>Placeholder for Sendungen content</p>;
export const Programs = () => <p>Placeholder for Programs content</p>;
