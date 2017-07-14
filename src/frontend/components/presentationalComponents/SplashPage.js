import React from 'react';


const SplashPage = ({ onPressButton }) => (
  <div>
    <div onClick={onPressButton} className="main_container_splash">
      <div className="logo_container" >
        <img alt="" className="logo_icon" src="assets/quonvologo.png" />
        <button type="button" className="login_button">Login</button>
      </div>
    </div>
    <div onClick={onPressButton} className="row_2">
      <div className="description_container" >
        <h1 className="description_row_2">When you need answers fast</h1>
        <h1 className="description_row_2">Quonvo is your solution</h1>
      </div>
      <div className="description_icons_container ">
        <div className="col-md-4 row2_icon_container">
        <img alt="" className="row2_icon" src="assets/trophy.svg" />
          <h1 className="icon_description">Ask Questions</h1>
          <p className="icon_details"> If you have a question is any of your classes, quonvo has the answer.
          </p>
        </div>
        <div className="col-md-4 row2_icon_container">
        <img alt="" className="row2_icon" src="assets/trophy.svg" />
          <h1 className="icon_description">Quick Responses</h1>
          <p className="icon_details"> Quonvo is filled with students that most likely have the same questions as you.
          They will be there to help you with anything.
          </p>
        </div>
        <div className="col-md-4 row2_icon_container">
        <img alt="" className="row2_icon" src="assets/trophy.svg" />
          <h1 className="icon_description">Community</h1>
          <p className="icon_details"> Feel free to ask anything since the Quonvo community is filled with other
          students just like you.
          </p>
        </div>
      </div>
    </div>
    <div onClick={onPressButton} className="row_3">
      <div className="title_container" >
        <h1 className="instruction_title">How does it work?</h1>
      </div>
      <div className="instruction_container_main row">
        <div className="col-md-6 ask_container" >
          <h1 className="ask_question">Ask a question</h1>
          <p className="icon_details"> Ask any question in any subject that you may have. There is always someone out there to help you.
          You can remain anynomous and get an answer quickly.
          </p>
        </div>
        <div className="col-md-6 instruction_container">
          <img alt="" className="question_icon" src="assets/question.png" />
        </div>
      </div>

    </div>
    <div onClick={onPressButton} className="row_3">
      <div className="instruction_container_main row">
        <div className="col-md-6 ask_container" >
          <h1 className="ask_question">Wait for someone to respond</h1>
          <p className="icon_details"> Your question will show up in our question bar feed on the left side of the screen.
          Anyone with the answer can click on your question and answer it.
          </p>
        </div>
        <div className="col-md-6 instruction_container">
          <img alt="" className="question_icon" src="assets/question_bar.png" />
        </div>
      </div>

    </div>
    <div onClick={onPressButton} className="row_3">
      <div className="instruction_container_main row">
        <div className="col-md-6 ask_container" >
          <h1 className="ask_question">Get an answer</h1>
          <p className="icon_details"> When someone clicks on your question, a chat room will appear and you can you submit the
          answer from there.
          </p>
        </div>
        <div className="col-md-6 instruction_container">
          <img alt="" className="question_icon" src="assets/answered_question.png" />
        </div>
      </div>

    </div>
    <div onClick={onPressButton} className="row_4">
      <div className="logo_container" >
        <h1 className="icon_description"></h1>
      </div>
    </div>
  </div>
);

export default SplashPage;
// TODO good place to try out some animations
