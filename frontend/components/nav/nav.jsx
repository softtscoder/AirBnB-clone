//TO REMOVE: main nav header

import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './dropdown';
import ModalContainer from '../modal/modal';

const Nav = () => {
  
  return (
  <div className="nav-header-container">
    <div className="splash-page-link-container">
      <Link to="/">
        <div className="airbnb-logo">
          <svg height="50px" style={{ enableBackground: 'new 0 0 512 512' }} viewBox="0 0 512 512" width="50px"><g id="_x31_1-airbnb"><path d="M457.266,345.496c-16.088-34.213-40.285-85.473-64.514-136.703   c-24.232-51.23-48.4-102.464-64.486-136.619c-13.072-28.031-41.43-46.173-72.275-46.173c-30.653,0-58.956,17.97-72.084,45.77   c-18.523,39.673-47.967,101.834-75.699,160.481c-20.381,43.095-39.88,84.264-53.467,113.218   c-6.164,13.021-9.408,27.486-9.408,41.802c-0.027,54.422,44.156,98.728,98.456,98.728c34.987,0,76.643-24.413,112.202-59.172   c35.548,34.759,77.205,59.172,112.191,59.172c54.299,0,98.484-44.306,98.484-98.759   C466.668,372.956,463.398,358.49,457.266,345.496z M204.894,274.746c0-28.259,22.936-51.259,51.097-51.259   c28.15,0,51.087,23,51.087,51.259c0,34.212-21.846,75.038-51.087,109.423C226.71,349.811,204.894,308.958,204.894,274.746z    M368.182,457.244c-25.748,0-61.047-21.389-92.238-51.743c34.748-40.631,59.811-89.842,59.811-130.755   c0-44.101-35.781-79.979-79.763-79.979c-43.986,0-79.77,35.879-79.77,79.979c0,40.881,25.058,90.124,59.81,130.755   c-31.196,30.354-66.492,51.743-92.243,51.743c-38.501,0-69.815-31.395-69.815-70.002c0-10.092,2.299-20.266,6.657-29.501   c13.618-28.977,33.088-70.116,53.47-113.188c27.756-58.703,57.204-120.917,75.756-160.561   c8.397-17.741,26.487-29.236,46.134-29.236c19.75,0,37.896,11.606,46.3,29.638c16.082,34.211,40.281,85.469,64.514,136.706   c24.229,51.227,48.4,102.433,64.51,136.675c4.357,9.201,6.65,19.375,6.65,29.467C437.998,425.85,406.686,457.244,368.182,457.244z" style={{ fill: '#FF5A60' }}/></g><g id="Layer_1"/></svg>
        </div>
        <div className="yourbnb-text"><h1>YourBnB</h1></div>
      </Link>
    </div>

    <div className="search-bar-container">
          <div>Search Bar Input</div>
          <div className="search-button">
            <i className="fas fa-search fa-1x"></i>
          </div>
    </div>

    <div className="socials-dropdown-menu-container">
      <div className="socials-links">
        <a className="social-link" href="https://github.com/pa-dg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/patricia-deguzman/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a className="social-link" href="https://angel.co/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-angellist fa-2x"></i>
        </a>
        <a className="social-link" href="mailto:padgzmn@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope fa-2x"></i>
        </a>

      </div>
      <div className="dropdown-menu-container">
        <DropDownContainer/>
      </div>
    </div>
    
  </div>
  )
};

export default Nav;



