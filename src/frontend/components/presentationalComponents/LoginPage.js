import React from 'react';
// NOTE at moment (4/26/17) the login app cannot import using the index.js files since they
// cause import of everything, including containers that error without their presentationals
// TODO investigate this and fix imports (both for js and css)
import SigninBarContainer from '../containerComponents/SigninBarContainer';

const LoginPage = () => (

  <div className="display_container">
    <div className="header_block">
      <span className="title"> WELCOME TO </span>
      <span className="title2"> Quonvo</span>
      <SigninBarContainer />

    </div>

  </div>
  );


export default LoginPage;
