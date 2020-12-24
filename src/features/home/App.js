import React from 'react';
import Header from '../headers/Header';

export default function App({ children }) {
  return (
    <div className="home-app">
      <Header />
      <div className="page-container">{children}</div>
    </div>
  );
}
