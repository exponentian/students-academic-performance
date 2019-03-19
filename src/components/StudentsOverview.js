import React from 'react';
import { Panel } from 'react-bootstrap';
import Datatable from 'react-bs-datatable';
import PropTypes from 'prop-types';

import IntroPage from './IntroPage';
import Note from './Note';
import { getByGender, getByNationality } from '../reducers/students';
import { countryRenames } from '../utils/rename';
import { header, customLabels } from '../utils/dataTable';

class StudentsOverview extends React.Component {

  render() {
    const { students } = this.props.childProps;

    const byGender = getByGender(students.all);
    const byNationality = getByNationality(students.all);

    // get nationality info
    let nationalityInfo = [];
    for (let nationality in byNationality) {
      let countryName = nationality.charAt(0).toUpperCase() + nationality.slice(1);
      const numStudents = byNationality[nationality].length;
      
      // Change a country name
      if ( countryRenames[countryName] !== undefined ) {
        countryName = countryRenames[countryName];
      }

      if (numStudents === 1) {
        nationalityInfo.push(`${ numStudents } student are from ${ countryName }`);
      } else {
        nationalityInfo.push(`${ numStudents } students are from ${ countryName }`);
      }
    }

    return (
      <div className="students-overview">
        <IntroPage menu={{
          "title": "Students' Overview",
          "navi": [
            { "name": "Home", "path": "/" },
            { "name": "Students' Overview", "path": null }
          ]
        }} />
      
        <div className="container overview-wrapper">

          <Panel className="overview" bsStyle="info">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Overview of students</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              
              <p>
                The data is collected using a learner activity tracker tool, which called experience API (xAPI). The xAPI is a component of the training and learning architecture (TLA) that enables to monitor learning progress and learner’s actions like reading an article or watching a training video. The experience API helps the learning activity providers to determine the learner, activity and objects that describe a learning experience.
              </p>

              <ul>
                <li>There are { students.all.length } students in total</li>
                <li>Students consist of { byGender.M.length } males and { byGender.F.length } females</li>
                <li>
                  {nationalityInfo.map((info, i) => 
                    nationalityInfo.length - 1 === i ? <span key={i}>{ info }</span> : <span key={i}>{ info }, </span> )}
                </li>
              </ul>

            </Panel.Body>
          </Panel>

          <Note />

          <section>
            <h3>List of students</h3>
            <Datatable
              tableHeader={header}
              tableBody={ students.all }
              keyName="studentsTable"
              tableClass="striped hover responsive"
              rowsPerPage={20}
              rowsPerPageOption={[20, 40, 80, 100]}
              initialSort={{ prop: "LastName", isAscending: true }}
              labels={customLabels}
            />
          </section>

        </div>
      </div>
    );
  }
}

StudentsOverview.propTypes = {
  childProps: PropTypes.shape({
    students: PropTypes.object.isRequired
  }).isRequired
};

export default StudentsOverview;