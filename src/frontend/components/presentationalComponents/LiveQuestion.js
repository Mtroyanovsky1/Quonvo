import React from 'react';

const LiveQuestion = ({
  questionText,
  onQuestionClick,
  questionSubject,
  onMouseOver,
  onMouseOut,
/* questionHandle , */
  questionClickable,
  questionShade // for yourQuestion readiness or also potentially hotness
}) => (
  <div
    onClick={questionClickable ? onQuestionClick : null}
    className="questionTALL"
    onMouseOver={() => onMouseOver()}
    onMouseLeave={() => onMouseOut()}
    style={questionShade ? { backgroundColor: 'lightblue' } : null}
  >
    <div className="question_text" maxLength="40">
      {questionText}
    </div>
    { /* <span className="question_label"> {questionHandle} </span> */ }
    <div className="question_label"> {questionSubject} </div>
  </div>
);

export default LiveQuestion;
