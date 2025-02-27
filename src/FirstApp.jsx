import React from 'react';
import PropTypes from 'prop-types';

export const FirstApp = ({title,subTitle}) => {
  
  return (
    <>
    <h1> {title} </h1>
    <p> {subTitle + 1} </p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string
}