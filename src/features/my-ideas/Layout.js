import React from 'react';
import Header from '../headers/Header';
// import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (<>
    {children}
  </>);
};

Layout.propTypes = {};
Layout.defaultProps = {};
