import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(function WelcomePage({history}) {
  return (
    <>
    {history.push('/my-ideas')}
    </>
  );
})
