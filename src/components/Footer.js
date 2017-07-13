import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/todo';

const Link =({
  active,
  children,
  onClick
}) => {
  if(active){
    return (<span>{children}</span>);
  }
  return (
    <a href='#' onClick={(e) => {
      e.preventDefault();
      onClick();
    }}>
          {children}
    </a>
  );
};


const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick(){
    dispatch(setVisibilityFilter(props.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

const Footer = () => 
  (
    <div>
      <FilterLink filter='SHOW_COMPLETED' >
          Completed
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_ALL'>
          ALL
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_PENDING'>
          PENDING
        </FilterLink>
    </div>
  );

export default Footer;