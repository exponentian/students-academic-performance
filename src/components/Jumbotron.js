import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = () => (
  <section className="container-fluid">
    <div className="jumbotron-wrapper">
      
      <div className="content">
        <h1>Students' Academic Performance Dataset</h1>
        
        <h4>xAPI-Educational Mining Dataset</h4>
        
        <h3>
          <Link to='https://www.kaggle.com/aljarah/xAPI-Edu-Data/home'>in Kaggle Datasets</Link>
        </h3>
        
        <Link to='/students'>Get Students' Information</Link>
      </div>

    </div>
  </section>
);

export default Jumbotron;
