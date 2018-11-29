import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Pie, Bar, Polar, Scatter, Bubble } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import IntroPage from './IntroPage';
import { 
  makeGenderChart, 
  makeNationalityChart,
  makeGradeChart,
  makeClassChart,
  makeTopicChart,
  makeTopicClassChart,
  makeRaisedHandsVisitedResourcesChart,
  makeAnnouncementsViewDiscussionTopicChart,
  makeRaisedHandsDiscussionNationalityChart
} from '../utils/chart';

class Analysis extends React.Component {
  
  render() {
    const { students } = this.props.childProps;

    const genderChart = makeGenderChart(students.all);
    const nationalityChart = makeNationalityChart(students.all);
    const gradeChart = makeGradeChart(students.all);
    const classChart = makeClassChart(students.all);
    const topicChart = makeTopicChart(students.all);
    const topicClassChart = makeTopicClassChart(students.all);
    const raisedHandsVisitedResourcesChart = makeRaisedHandsVisitedResourcesChart(students.all);
    const announcementsViewDiscussionTopicChart = makeAnnouncementsViewDiscussionTopicChart(students.all);
    const raisedHandsDiscussionNationalityChart = makeRaisedHandsDiscussionNationalityChart(students.all);

    return (
      <div className="analysis-content">
        <IntroPage menu={{
          "title": "Analysis",
          "navi": [
            { "name": "Home", "path": "/" },
            { "name": "Analysis", "path": null }
          ]
        }} />
      
        <Grid className="content-wrapper">
          
          <Row>
            <Col md={4}>
              <nav className="left-sidenav">
                
                <h3>Menu <small>by Attributes</small></h3>

                <ul>
                  <li>
                    <a href='#gender'>Gender</a>
                    <small>- Pie chart</small>
                  </li>
                  <li>
                    <a href='#nationality'>Nationality</a>
                    <small>- Single Bar chart</small>
                  </li>
                  <li>
                    <a href='#grade_gender'>Grade levels with Gender</a>
                    <small>- Stacked Bar chart</small>
                  </li>
                  <li>
                    <a href='#class'>Class</a>
                    <small>- Polar Area chart</small>
                  </li>
                  <li>
                    <a href='#topic'>Topic</a>
                    <small>- Single Bar chart</small>
                  </li>
                  <li>
                    <a href='#topic_class'>Topic with Class</a>
                    <small>- Multiple Bar chart</small>
                  </li>
                  <li>
                    <a href='#raisedhands_visitedresources'>Raised Hands over Visited Resources</a>
                    <small>- Scatter plot</small>
                  </li>
                  <li>
                    <a href='#announcementsview_discussion_topic'>Announcements View over Discussion with Topic</a>
                    <small>- Bubble plot</small>
                  </li>
                  <li>
                    <a href='#raisedhands_discussion_topic'>Raised Hands over Discussion with Nationality</a>
                    <small>- Bubble plot</small>
                  </li>
                </ul>

              </nav>
            </Col>
            <Col md={8}>

              <div className="right-charts">
                
                <h1>List of Charts</h1>

                <div className="comment">
                  <h4 className="title">About charts</h4>
                  <p className="message">
                    I try to use different kinds of charts in <Link to='https://www.chartjs.org/'>Chart.js</Link>: Pie, Bar (Single, Multiple, Stacked), Polar Area, Scatter plot, Bubble plot, and etc.
                    This <Link to='https://www.chartjs.org/'>Chart.js</Link> supports some useful configuration options such as responsive and colors.
                  </p>
                </div>

                <div className="chart">
                  <h3 id="gender">Gender</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">This school has 64% male students and 36% female students.</p>
                  </div>

                  <Row>
                    <Col md={8} mdOffset={2}>
                      <Pie data={ genderChart.data } options={ genderChart.options } />
                    </Col>
                  </Row>
                </div>

                <div className="chart">
                  <h3 id="nationality">Nationality</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">This school has students from 14 different countries.</p>
                  </div>

                  <Bar data={ nationalityChart.data } options={ nationalityChart.options } />
                </div>

                <div className="chart">
                  <h3 id="grade_gender">Grade levels with Gender</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">There are no students in Grade-1 and Grade-3. Also, there are more female students in Grade 12; on the other hand, there are no female students in Grade-10.</p>
                  </div>

                  <Bar data={ gradeChart.data } options={ gradeChart.options } />
                </div>

                <div className="chart">
                  <h3 id="class">Class</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">
                      Compared to three different levels, the students in the middle level is the most abundant.
                    </p>
                  </div>

                  <Row>
                    <Col md={10} mdOffset={1}>
                      <Polar data={ classChart.data } options={ classChart.options } />
                      <div className="reference">
                        <span>Note:</span>
                        <ul>
                          <li>Low-Level: interval includes values from 0 to 69</li>
                          <li>Middle-Level: interval includes values from 70 to 89</li>
                          <li>High-Level: interval includes values from 90-100</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="chart">
                  <h3 id="topic">Topic</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">There are 12 different topics, and most students take classes in IT/Science and Language.</p>
                  </div>

                  <Bar data={ topicChart.data } options={ topicChart.options } />
                </div>

                <div className="chart">
                  <h3 id="topic_class">Topic with Class</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">There are many low-level students in a IT subject, but there are few low-level students in Biology and Quran subjects.</p>
                  </div>

                  <Bar data={ topicClassChart.data } options={ topicClassChart.options } />
                </div>

                <div className="chart">
                  <h3 id="raisedhands_visitedresources">Raised Hands over Visited Resources</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">This scatter plot shows us that there seems to be a little bit correlation between the two attributes.</p>
                  </div>

                  <Scatter data={ raisedHandsVisitedResourcesChart.data } options={ raisedHandsVisitedResourcesChart.options } />
                </div>

                <div className="chart">
                  <h3 id="announcementsview_discussion_topic">Announcements View over Discussion with Topic</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">This bubble plot shows us that students in the IT course have more discussion, and Announcements View is linearly correlated with Discusstion.</p>
                  </div>

                  <Bubble data={ announcementsViewDiscussionTopicChart.data } options={ announcementsViewDiscussionTopicChart.options } />
                </div>

                <div className="chart">
                  <h3 id="raisedhands_discussion_topic">Raised Hands over Discussion with Nationality</h3>
                  
                  <div className="comment primary">
                    <h4 className="title">Description</h4>
                    <p className="message">Students from Kuwait and Jordan are much more likely to participate in classes, and the more students there are, the more they have raised hands and disuccsion.</p>
                  </div>

                  <Bubble data={ raisedHandsDiscussionNationalityChart.data } options={ raisedHandsDiscussionNationalityChart.options } />
                </div>

              </div>

            </Col>
          </Row>

        </Grid>

      </div>
    );
  }
}

Analysis.propTypes = {
  childProps: PropTypes.shape({
    students: PropTypes.object.isRequired
  }).isRequired
};


export default Analysis;