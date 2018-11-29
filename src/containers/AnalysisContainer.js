import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Analysis from '../components/Analysis';


const AnalysisContainer = ({ match, students }) => (
  <div className="analysis">
    <Header />

    <Switch>
      <Route path={ match.path } component={() => 
        <Analysis childProps={{ students: students.data }} />} />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  students: state.students
});

AnalysisContainer.propTypes = {
  match: PropTypes.object.isRequired,
  students: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AnalysisContainer);