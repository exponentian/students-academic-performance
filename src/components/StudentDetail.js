import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col, Image, Panel, Table } from 'react-bootstrap';
import { Bar, Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import IntroPage from './IntroPage';
import Note from './Note';

import { getStatistics } from '../reducers/students';
import { 
  options, 
  getBehaviourCountData, 
  getBehaviourMeanData 
} from '../utils/chart';

import { 
  genderRenames, 
  countryRenames, 
  classRenames, 
  semesterRenames, 
  stageRenames 
} from '../utils/rename';


class StudentDetail extends React.Component {

  state = {
    student: {}
  }

  componentDidMount = () => {
    const { match, childProps } = this.props;

    this.setState({
      student: childProps.students.byId[match.params.ID]
    });
  }

  render() {
    const { student } = this.state;
    const { students } = this.props.childProps;

    if (Object.keys(student).length === 0 || !students) {
      return <div>Loading...</div>;
    }

    const statistics = getStatistics(students.all);
    const behaviourCountData = getBehaviourCountData(student);
    const behaviourMeanData = getBehaviourMeanData(student, statistics);

    return (
      <div className="student-detail">
        <IntroPage menu={{
          "title": "Details of student",
          "navi": [
            { "name": "Home", "path": "/" },
            { "name": "Students' Overview", "path": "/students" },
            { "name": "Details of student", "path": null }
          ]
        }} />
      
        <Grid>
          
          <Note />

          <h3>Details of student</h3>
          <hr className="dotted" />

          <Row className="detail-wrapper">
            <Col md={9}>
              <section className="detail-header">
                <div className="header-left">
                  <Image src="/images/avatar/avatar.png" thumbnail/>
                </div>

                <div className="header-right">
                  <h1>
                    { student.FirstName } { student.LastName }
                    <br />
                    <small>{ student.UserName }</small>
                  </h1>

                  <ul>
                    <li>{ genderRenames[student.Gender] }</li>
                    <li>{ student.Age } years old</li>
                    <li>{ student.Phone }</li>
                    <li>{ student.Email }</li>
                  </ul>
                </div>
              </section>

              <hr className="dotted" />

              <section className="detail-body">

                <h3>School information of { student.FirstName }</h3>

                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h4">Relationship with this student's parent</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <p>
                      { student.Relation } is more responsible for this student.
                    </p>
                    <p>
                      Did this student's parent answer a survey: { student.ParentAnsweringSurvey }
                    </p>
                    <p>
                      Parent's satisfaction: { student.ParentschoolSatisfaction }
                    </p>
                  </Panel.Body>
                </Panel>

                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h4">Academic background</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <p>
                      This student takes { semesterRenames[student.Semester] } semester, and current grade level is { student.GradeID } in the { stageRenames[student.StageID] } education stage.
                    </p>
                    <p>
                      This student belongs to the class room { student.SectionID }, and is interested in the topic { student.Topic }.
                    </p>
                    <p>
                      This student has { student.StudentAbsenceDays } absence days.
                    </p>
                  </Panel.Body>
                </Panel>

                <div className="comment success">
                  <h4 className="title">Total Mark</h4>
                  <p className="message">
                    This student's grade is <strong>{ classRenames[student.Class] }</strong>.
                  </p>
                </div>

                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h4">Behaviour background</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <p>
                      This student does { student.RaisedHands } times in raised hands, { student.VisitedResources } times in visited resources, { student.AnnouncementsView } times in announcements view, and { student.Discussion } times in discussion.
                    </p>
                  </Panel.Body>
                </Panel>
                
                

                <Row className="chart">
                  <Col md={8} mdOffset={2}>
                    <h4>Chart: Total Count of { student.FirstName }</h4>
                    <Bar data={ behaviourCountData } options={ options.barChart(true, false) } />
                  </Col>
                </Row>

                <div className="chart">
                  <h4>Chart: Comparision of Total Count with School Average</h4>
                  <Radar data={ behaviourMeanData } options={ options.radarChart() } />
                </div>
                
                <hr className="dotted" />

                <h4>School Staistics</h4>
                <BehaviourStats statistics={ statistics } />

              </section>

            </Col>
            
            <Col md={3}>
              <section className="detail-sidemenu">
                
                <div className="item">
                  <h4>Nationality</h4>
                  - { countryRenames[student.Nationality] === undefined ? student.Nationality : countryRenames[student.Nationality] }
                </div>
                
                <div className="item">
                  <h4>Place of birth</h4>
                  - { countryRenames[student.PlaceOfBirth] === undefined ? student.PlaceOfBirth : countryRenames[student.PlaceOfBirth] }
                </div>
                
                <div className="item">
                  <h4>State</h4>
                  - { student.State }
                </div>
                
                <div className="item">
                  <h4>City</h4>
                  - { student.City }
                </div>
                
                <div className="item">
                  <h4>Address</h4>
                  - { student.Address }
                </div>

              </section>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}


const BehaviourStats = ({ statistics }) => (
  <Table striped bordered condensed hover className="behaviour-stats">
    <thead>
      <tr>
        <th>Category</th>
        <th>Minimum</th>
        <th>Maximum</th>
        <th>Mean</th>
        <th>Median</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Raised Hands</td>
        <td>{ statistics.RaisedHands.min }</td>
        <td>{ statistics.RaisedHands.max }</td>
        <td>{ statistics.RaisedHands.mean }</td>
        <td>{ statistics.RaisedHands.median }</td>
      </tr>
      <tr>
        <td>Visited Resources</td>
        <td>{ statistics.VisitedResources.min }</td>
        <td>{ statistics.VisitedResources.max }</td>
        <td>{ statistics.VisitedResources.mean }</td>
        <td>{ statistics.VisitedResources.median }</td>
      </tr>
      <tr>
        <td>Announcements View</td>
        <td>{ statistics.AnnouncementsView.min }</td>
        <td>{ statistics.AnnouncementsView.max }</td>
        <td>{ statistics.AnnouncementsView.mean }</td>
        <td>{ statistics.AnnouncementsView.median }</td>
      </tr>
      <tr>
        <td>Discussion</td>
        <td>{ statistics.Discussion.min }</td>
        <td>{ statistics.Discussion.max }</td>
        <td>{ statistics.Discussion.mean }</td>
        <td>{ statistics.Discussion.median }</td>
      </tr>
    </tbody>
  </Table>
);

StudentDetail.propTypes = {
  match: PropTypes.object.isRequired,
  childProps: PropTypes.shape({
    students: PropTypes.object.isRequired
  }).isRequired
};


export default withRouter(StudentDetail);