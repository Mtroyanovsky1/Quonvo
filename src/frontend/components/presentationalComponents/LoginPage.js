import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashPage from './SplashPage';
// NOTE at moment (4/26/17) the login app cannot import using the index.js files since they
// cause import of everything, including containers that error without their presentationals
// TODO investigate this and fix imports (both for js and css)
import SigninBarContainer from '../containerComponents/SigninBarContainer';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true
    };
  }
  onPress() {
    this.setState({
      splash: false
    });
  }

  goBack() {
    this.setState({
      splash: true
    });
  }
  render() {
    return (
      <Provider store={this.props.store}>
        { this.state.splash
        ?
          <SplashPage onPressButton={() => this.onPress()} />
        :
          <div className="display_container">
            <div className="Splash_button" onClick={() => this.goBack()}>
              <img alt="" src="assets/back.svg" className="arrow_splash" />
            </div>
            <div className="header_block">
              <span className="title"> WELCOME TO </span>
              <span className="title2"> Quonvo</span>
              <SigninBarContainer />

            </div>
          </div>
        }
      </Provider>
    );
  }
}

export default LoginPage;
