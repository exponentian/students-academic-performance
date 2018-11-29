import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IntroPage = ({ menu }) => (
  <section className="container-fluid">

    <div className="intro-page">
      <div className="container content">
        
        <span className="title">{ menu.title }</span>

        <nav className="navi">
          {menu.navi.map((n, i) => menu.navi.length -1 === i ?
            <span key={i}>{ n.name }</span> :
            (<span key={i}>
              <Link to={ n.path }>{ n.name }</Link>{' '}
              <i className="fas fa-angle-right"></i>{' '}
            </span>)
          )}
        </nav>
        
      </div>
    </div>
  
  </section>
);

IntroPage.propTypes = {
  menu: PropTypes.shape({
    title: PropTypes.string.isRequried,
    navi: PropTypes.array.isRequired
  }).isRequired
};

export default IntroPage;