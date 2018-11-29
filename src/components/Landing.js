import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Header from './Header';
import Jumbotron from './Jumbotron';


const Landing = () => (
  <div className="landing">
    <Header />
    <Jumbotron />

    <section className="container main">

      <section className="greeting">
        <div className="comment success">
          <h2 className="title">
            <i className="far fa-smile-wink"></i> Greetings
          </h2>
          
          <p className="message">
            Thank you for visiting this website.<br /> 
            This sample web-based application contains some information and several charts in terms of the educational dataset in <a href='https://www.kaggle.com/aljarah/xAPI-Edu-Data/home'>Kaggle Datasets</a>.
          </p>
        </div>
      </section>

      <section className="technologies">
        <h3>Used Technologies</h3>

        <Row className="technologies-body">

          <Col md={4}>
            <div className="tech">
              <i className="fas fa-laptop-code fa-3x"></i>
              <h4>Frontend</h4>
              
              <hr className="dotted" />

              <span>
                <a href='https://github.com/facebook/react'>React</a>
              </span>
              <span>
                <a href='https://github.com/reduxjs/redux'>Redux</a>
              </span>
            </div>
          </Col>
          
          <Col md={4}>
            <div className="tech">
              <i className="fas fa-file-code fa-3x"></i>
              <h4>Stylesheet</h4>

              <hr className="dotted" />

              <span>
                <a href='https://react-bootstrap.github.io/'>React-Bootstrap</a>
              </span>
              <span>
                <a href='https://github.com/michaelwayman/node-sass-chokidar#readme'>SASS</a>
              </span>
              <span>
                <a href='https://fontawesome.com/'>Font Awesome</a>
              </span>
            </div>
          </Col>
          
          <Col md={4}>

            <div className="tech">
              <i className="fas fa-chart-bar fa-3x"></i>
              <h4>Chart</h4>

              <hr className="dotted" />

              <span>
                <a href='https://www.chartjs.org/'>Chart.js</a>
              </span>
              <span>
                <a href='https://github.com/jerairrest/react-chartjs-2'>React-Chartjs-2</a>
              </span>
            </div>

          </Col>
        </Row>

      </section>

    </section>
    
  </div>
);

export default Landing;