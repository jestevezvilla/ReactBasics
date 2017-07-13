import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

const FilterLink = ({filter, children}) => (
  <NavLink
    to={'/'+filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
    >
    {children}
  </NavLink>
);

const Footer = () => 
  (
    <div>
      <FilterLink filter='completed' >
          Completed
        </FilterLink>
        {' '}
        <FilterLink filter='all'>
          ALL
        </FilterLink>
        {' '}
        <FilterLink filter='active'>
          PENDING
        </FilterLink>
    </div>
  );

export default Footer;