import React from 'react';

const LoginModal = ({ signIn }) => {
  let emailField;
  let passField;

  const signInClick = () => {
    const submitEmail = emailField.value.trim();
    const submitPass = passField.value.trim();
    if (submitEmail && submitPass) {
      signIn(submitEmail, submitPass);
    }
  };
  return (

    <div className="display_container">
      <div className="header_block" style={{ height: '40%' }}>
        <span className="explanation" style={{ fontSize: '24px', paddingTop: '5%' }}> LOG IN </span>
        <div className="signin_wrapper">
          <input
            className="field"
            placeholder="email"
            ref={(node) => { emailField = node; }}
          />
          <input
            className="field"
            placeholder="password"
            ref={(node) => { passField = node; }}
          />
          <button onClick={() => signInClick()} className="ask_button"> LOGIN</button>
          <br />
        </div>
      </div>
    </div>


  );
};

export default LoginModal;
