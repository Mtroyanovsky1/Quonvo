import React from 'react';


const SplashPage = ({ onPressButton }) => (
  <div>
    <div onClick={onPressButton} className="main_container_splash">
      <div className="logo_container_first" >
        <img alt="" className="logo_icon" src="assets/quonvologo.png" />
        <button type="button" className="login_button">Sorry We are not live anymore</button>

      </div>


    </div>

  </div>
);

// <div onClick={onPressButton} className="row_2">
//   <div className="description_container" >
//     <img alt="" className="main_logo" src="assets/Main logo SVG.svg" />
//     <h1 className="description_row_2">Dont Just Ask a Question, Have a Convo </h1>
//   </div>
//   <div className="description_icons_container ">
//     <div className="col-md-4 row2_icon_container">
//     <img alt="" className="row2_icon" src="assets/chat.svg" />
//       <h1 className="icon_description">Ask Questions</h1>
//       <p className="icon_details"> If you have a question, Quonvo will find someone who you can chat with
//       </p>
//     </div>
//     <div className="col-md-4 row2_icon_container">
//     <img alt="" className="row2_icon" src="assets/trophy.svg" />
//       <h1 className="icon_description">Have Conversations to Increase Your Ranking</h1>
//       <p className="icon_details"> With Quonvo the more conversations you have where you help someone the higher your ranking
//       will be in that subject
//       </p>
//     </div>
//     <div className="col-md-4 row2_icon_container">
//     <img alt="" className="row2_icon" src="assets/archive_icon-01.png" />
//       <h1 className="icon_description">Read Archives</h1>
//       <p className="icon_details"> On Quonvo you can read anonymous conversations that have occured and learn new things
//       </p>
//     </div>
//   </div>
// </div>
// <div onClick={onPressButton} className="row_3">
//   <div className="title_container" >
//     <h1 className="instruction_title">How does it work?</h1>
//   </div>
//   <div className="instruction_container_main row">
//     <div className="col-md-6 ask_container" >
//       <h1 className="ask_question">Ask a question</h1>
//       <p className="icon_details"> When you ask your question you can choose to use your first name or remain anonymous.
//       Make sure to choose the subject that corresponds with your question
//       </p>
//     </div>
//     <div className="col-md-6 instruction_container">
//       <img alt="" className="question_icon" src="assets/Ask a question SVG.svg" />
//     </div>
//   </div>
//
// </div>
// <div onClick={onPressButton} className="row_3_darkblue">
//   <div className="instruction_container_main row">
//     <div className="col-md-6 ask_container" >
//       <h1 className="ask_question_white">Waiting for someone to respond</h1>
//       <p className="icon_details_white"> Your question will show up in our question bar feed on the left side of the screen.
//       Once someone answers your question, the color will turn a darker blue
//       </p>
//     </div>
//     <div className="col-md-6 instruction_container">
//       <img alt="" className="question_icon" src="assets/question_bar.png" />
//     </div>
//   </div>
//
// </div>
// <div onClick={onPressButton} className="row_3">
//   <div className="instruction_container_main row">
//     <div className="col-md-6 ask_container" >
//       <h1 className="ask_question">Chat with someone about your question</h1>
//       <p className="icon_details"> When someone clicks on your question, you instantly get placed into a chat where you can discuss the question
//       </p>
//     </div>
//     <div className="col-md-6 instruction_container">
//       <img alt="" className="question_icon" src="assets/Chat mockup svg.svg" />
//     </div>
//   </div>
//
// </div>
// <div onClick={onPressButton} className="row_3_lightBlue">
//   <div className="instruction_container_main row">
//     <div className="col-md-6 ask_container" >
//       <h1 className="ask_question_black">Find old questions</h1>
//       <p className="icon_details_black"> When someone clicks on your question, a chat room will appear and you can you submit the
//       answer from there.
//       </p>
//     </div>
//     <div className="col-md-6 instruction_container">
//       <img alt="" className="archives_icon" src="assets/Archives SVG.svg" />
//     </div>
//   </div>
//
// </div>
// <div onClick={onPressButton} className="row_4">
//   <div className="footer_container" >
//     <h1 className="footer_description">If you actually read this part of the site send me an email at
//      <h1 style={{ color: 'black', fontSize: '1.2em' }}>mtroyanovsky1@babson.edu</h1>
//    and ill give you a virtual high five
//     </h1>
//   </div>
// </div>
export default SplashPage;
// TODO good place to try out some animations
