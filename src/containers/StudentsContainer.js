import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StudentsOverview from '../components/StudentsOverview';
import StudentDetail from '../components/StudentDetail';
import Header from '../components/Header';


const StudentsContainer = ({ match, students }) => (
  <div className="students">
    <Header />

    <Switch>
      <Route path={ `${match.path}/:ID`} component={() => 
        <StudentDetail childProps={{ students: students.data }}/> } />
      <Route path={ match.path } component={() => 
        <StudentsOverview childProps={{ students: students.data }} />} />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  students: state.students
});

StudentsContainer.propTypes = {
  students: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(StudentsContainer);