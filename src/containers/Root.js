import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchStudents } from '../actions/students';
import AnalysisContainer from './AnalysisContainer';
import AboutDataset from '../components/AboutDataset';
import StudentsContainer from './StudentsContainer';
import Landing from '../components/Landing';

class Root extends React.Component {

  state = {
    error: null
  }

  componentDidMount = () => {
    fetch('/students.json')
      .then(res => res.json())
      .then(data => {
        this.props.fetchStudents(data.students);
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { error } = this.state;
    const { students } = this.props;

    // Check if an error exists while fetching data
    if (error) {
      return <div>Please contact administrator</div>;
    }

    // Check if data is fetching
    if (!students.isFetched) {
      return <div>Loading...</div>;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path='/about-dataset' component={AboutDataset} />
          <Route path='/analysis' component={AnalysisContainer} />
          <Route path='/students' component={StudentsContainer} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students
});


Root.propTypes = {
  fetchStudents: PropTypes.func.isRequired,
  students: PropTypes.shape({
    isFetched: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
  }).isRequired
};


export default connect(mapStateToProps, { fetchStudents })(Root);