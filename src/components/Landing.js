import React from 'react';
import { Link } from 'react-router-dom';
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
          <h2 className="title"><i className="far fa-smile-wink"></i> Greetings</h2>
          <p className="message">
            Thank you for visiting this website.<br /> 
            This sample web-based application contains some information and several charts in terms of the educational dataset in <Link to='https://www.kaggle.com/aljarah/xAPI-Edu-Data/home'>Kaggle Datasets</Link>.
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
                <Link to='https://github.com/facebook/react'>React</Link>
              </span>
              <span>
                <Link to='https://github.com/reduxjs/redux'>Redux</Link>
              </span>
            </div>
          </Col>
          
          <Col md={4}>
            <div className="tech">
              <i className="fas fa-file-code fa-3x"></i>
              <h4>Stylesheet</h4>

              <hr className="dotted" />

              <span>
                <Link to='https://react-bootstrap.github.io/'>React-Bootstrap</Link>
              </span>
              <span>
                <Link to='https://github.com/michaelwayman/node-sass-chokidar#readme'>SASS</Link>
              </span>
              <span>
                <Link to='https://fontawesome.com/'>Font Awesome</Link>
              </span>
            </div>
          </Col>
          
          <Col md={4}>

            <div className="tech">
              <i className="fas fa-chart-bar fa-3x"></i>
              <h4>Chart</h4>

              <hr className="dotted" />

              <span>
                <Link to='https://www.chartjs.org/'>Chart.js</Link>
              </span>
              <span>
                <Link to='https://github.com/jerairrest/react-chartjs-2'>React-Chartjs-2</Link>
              </span>
            </div>

          </Col>
        </Row>

      </section>

    </section>
    
  </div>
);

export default Landing;