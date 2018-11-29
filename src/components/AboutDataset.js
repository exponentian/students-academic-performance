import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

import Header from './Header';
import IntroPage from './IntroPage';


const AboutDataset = () => (
  <div className="about-dataset">
    <Header />
    <IntroPage menu={{
      "title": "About Dataset",
      "navi": [
        { "name": "Home", "path": "/" },
        { "name": "About Dataset", "path": null }
      ]
    }} />
    
    <section className="container dataset-wrapper">
      <h3>About Dataset</h3>
      <Link to='https://www.kaggle.com/aljarah/xAPI-Edu-Data'>More Information</Link>
      
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Students' Academic Performance Dataset (xAPI-Edu-Data)</Panel.Title>
        </Panel.Heading>

        <Panel.Body>
          <ul>
            <li>Data Set Characteristics: Multivariate</li>
            <li>Number of Instances: 480</li>
            <li>Area: E-learning, Education, Predictive models, Educational Data Mining</li>
            <li>Attribute Characteristics: Integer/Categorical</li>
            <li>Number of Attributes: 16</li>
            <li>Date: 2016-11-8</li>
          </ul>
        </Panel.Body>
      </Panel>

      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Dataset Information</Panel.Title>
        </Panel.Heading>

        <Panel.Body>
          <p>
            This is an educational data set which is collected from learning management system (LMS) called Kalboard 360. Kalboard 360 is a multi-agent LMS, which has been designed to facilitate learning through the use of leading-edge technology. Such system provides users with a synchronous access to educational resources from any device with Internet connection.
          </p>
        </Panel.Body>
      </Panel>

      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Attributes</Panel.Title>
        </Panel.Heading>

        <Panel.Body>
          <ol className="">
            <li>Gender - student's gender (nominal: 'Male' or 'Female’)</li>
            <li>Nationality- student's nationality (nominal:’ Kuwait’,’ Lebanon’,’ Egypt’,’ SaudiArabia’,’ USA’,’ Jordan’,’ Venezuela’,’ Iran’,’ Tunis’,’ Morocco’,’ Syria’,’ Palestine’,’ Iraq’,’ Lybia’)</li>
            <li>Place of birth- student's Place of birth (nominal:’ Kuwait’,’ Lebanon’,’ Egypt’,’ SaudiArabia’,’ USA’,’ Jordan’,’ Venezuela’,’ Iran’,’ Tunis’,’ Morocco’,’ Syria’,’ Palestine’,’ Iraq’,’ Lybia’)</li>
            <li>Educational Stages- educational level student belongs (nominal: ‘lowerlevel’,’MiddleSchool’,’HighSchool’)</li>
            <li>Grade Levels- grade student belongs (nominal: ‘G-01’, ‘G-02’, ‘G-03’, ‘G-04’, ‘G-05’, ‘G-06’, ‘G-07’, ‘G-08’, ‘G-09’, ‘G-10’, ‘G-11’, ‘G-12 ‘)</li>
            <li>Section ID- classroom student belongs (nominal:’A’,’B’,’C’)</li>
            <li>Topic- course topic (nominal:’ English’,’ Spanish’, ‘French’,’ Arabic’,’ IT’,’ Math’,’ Chemistry’, ‘Biology’, ‘Science’,’ History’,’ Quran’,’ Geology’)</li>
            <li>Semester- school year semester (nominal:’ First’,’ Second’)</li>
            <li>Parent responsible for student (nominal:’mom’,’father’)</li>
            <li>Raised hand- how many times the student raises his/her hand on classroom (numeric:0-100)</li>
            <li>Visited resources- how many times the student visits a course content(numeric:0-100)</li>
            <li>Viewing announcements-how many times the student checks the new announcements(numeric:0-100)</li>
            <li>Discussion groups- how many times the student participate on discussion groups (numeric:0-100)</li>
            <li>Parent Answering Survey- parent answered the surveys which are provided from school or not (nominal:’Yes’,’No’)</li>
            <li>Parent School Satisfaction- the Degree of parent satisfaction from school(nominal:’Yes’,’No’)</li>
            <li>Student Absence Days-the number of absence days for each student (nominal: above-7, under-7)</li>
          </ol>

          <h4>The students are classified into three numerical intervals based on their total grade/mark:</h4>
          <ul>
            <li>Low-Level: interval includes values from 0 to 69</li>
            <li>Middle-Level: interval includes values from 70 to 89</li>
            <li>High-Level: interval includes values from 90-100</li>
          </ul>
        </Panel.Body>
      </Panel>

    </section>

  </div>
);

export default AboutDataset;