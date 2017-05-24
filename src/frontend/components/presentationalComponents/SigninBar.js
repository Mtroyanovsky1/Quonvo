import React from 'react';

const SigninBar = ({ signUp, google }) => {
  let emailField;
  let passField;
  const signUpClick = () => {
    const submitEmail = emailField.value.trim();
    const submitPass = passField.value.trim();
    if (submitEmail && submitPass) {
      signUp(submitEmail, submitPass);
    }
  };
  // const signUpClick = () => {
  //   // TODO write signup click function
  // };

  const googleClick = () => {
    google();
  };

  return (
    <div className="signin_wrapper">
      <input
        className="field"
        ref={(node) => { emailField = node; }}
        placeholder="email"
      />
      <input
        className="field"
        ref={(node) => { passField = node; }}
        placeholder="password"
      />
      <button onClick={() => signUpClick()} className="ask_button"> Sign Up</button>
      <br />
      <div className="line" />
      <br />
      <button className="google" type="submit" onClick={() => googleClick()}>
        <img alt="logo" className="logo" src="assets/google_logo.png" />
        <span className="signin">Continue with Google</span>
      </button>

      <div className="explanation">Already have an account? Log in <a> here </a> </div>
      <br />
    </div>
  );
};

export default SigninBar;
