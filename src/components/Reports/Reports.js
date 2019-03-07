import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from "./SearchBar/SearchBar";
import ReportsTable from './ReportsTable/ReportsTable';
// import Loading from '../../components/UI/Loading/Loading';
import { mockAPI } from '../../helper';
// import getAll from '../../services/programs';
import './Reports.css';

class Reports extends Component {
  state = {
    reports: null,
    initialreports: [],
    error: null
  };

  /*--- Call fetch method when app loads ---*/
  componentDidMount() {
    mockAPI().then((res) => {
      this.setState({ reports: res });
    });
  }

  /*--- Search Bar Methods ---*/

  filterProgramHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredTable = this.state.initialreports.filter(
      (program) =>
        program.title.toLowerCase().includes(searchValue) ||
        program.author.toLowerCase().includes(searchValue)
    );
    this.setState({ bookTable: filteredTable });
  };

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return (
      <section className='reports'>
        <div className='reports--nav'>
          <SearchBar onSearchChange={this.filterProgramHandler} />
          <p>Calendar</p>
        </div>
        <div className='reports--options'>
          <span>Sort By: Program <FontAwesomeIcon icon='arrow-down' /></span>
          <div><FontAwesomeIcon icon='sliders-h' /><FontAwesomeIcon icon='columns' /></div>
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
