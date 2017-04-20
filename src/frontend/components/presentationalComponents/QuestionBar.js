import React from 'react';
import LiveQuestion from './LiveQuestion';
// The liftOfQustions is an array of objects that has the keys content, subject, and id
const QuestionBar = ({ listOfQuestions, yourQuestion, onQuestionClick, nextQuestionPage }) => (
  <div className="question_bar">
    <div
      className="question_header bold"
      style={{ letterSpacing: '0.1vw' }}
    >
      LEND AN EAR
    </div>
    {console.log(yourQuestion)}
    { yourQuestion ?
      <div>
        Your Question
        <LiveQuestion
          onQuestionClick={() => onQuestionClick(yourQuestion.id, yourQuestion.handle)}
          questionText={yourQuestion.content}
          questionSubject={yourQuestion.subject}
        />
      </div>
      : null }
    <div className="question_sidebar_display">
      <div className="question_column">
        {listOfQuestions.map(question =>
          <LiveQuestion
            key={question.id}
            onQuestionClick={() => onQuestionClick(question.id, question.handle)}
            questionText={question.content}
            questionSubject={question.subject}
          />
      )
      }
      </div>
    </div>
    <button onClick={() => nextQuestionPage()}>
    Get more questions
    </button>
  </div>
);

export default QuestionBar;
