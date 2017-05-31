import React, { Component } from 'react';

class SigninBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // if field is true then it is on signUp, and false is signIn
      field: true
    };
  }
  render() {
    let emailField;
    let passField;
    let firstName;
    const signUpClick = () => {
      const submitEmail = emailField.value.trim();
      const submitPass = passField.value.trim();
      const submitName = firstName.value.trim();
      if (submitEmail && submitPass && submitName) {
        this.props.signUp(submitEmail, submitPass, submitName);
      }
    };
    const signInClick = () => {
      const submitEmail = emailField.value.trim();
      const submitPass = passField.value.trim();
      if (submitEmail && submitPass) {
        this.props.signIn(submitEmail, submitPass);
      }
    };
    const googleClick = () => {
      this.props.google();
    };
    return (
      <div className="signin_wrapper" style={{ marginTop: (this.state.field) ? '15%' : '10%' }}>
        { (this.state.field) ?
          (<span className="form-label">FIRST NAME</span>)
          :
          null
        }
        { (this.state.field) ?
          (<input
            className="field"
            type="text" name="firstname"
            ref={(node) => { firstName = node; }}
          />) :
          null
        }
        <span className="form-label">E-MAIL</span>

        <input
          className="field"
          type="text"
          name="lastname"
          ref={(node) => { emailField = node; }}
        />
        <span className="form-label">PASSWORD</span>

        <input
          className="field"
          type="password"
          name="password"
          ref={(node) => { passField = node; }}
        />
        { (this.state.field) ?
          <button onClick={() => signUpClick()} className="ask_button"> Sign Up</button>
          :
          <button onClick={() => signInClick()} className="ask_button"> Sign In</button>
        }
        <br />
        <div className="line" />
        <br />
        <button className="google" type="submit" onClick={() => googleClick()}>
          <img alt="" className="logo" src="assets/google_logo.png" />
          <span className="signin">Continue with Google</span>
        </button>
        { (this.state.field) ?
          <div className="explanation">Already have an account? Log in
            <div className="logIn" onClick={() => this.setState({ field: false })}> here </div>
          </div>
          :
          null
      }
        <br />
      </div>
    );
  }
}

export default SigninBar;
