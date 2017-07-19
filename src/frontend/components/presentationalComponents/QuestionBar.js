import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import LiveQuestion from './LiveQuestion';
// The liftOfQustions is an array of objects that has the keys content, subject, and id
const QuestionBar = ({
   listOfQuestions,
   onClick,
   yourQuestion,
   yourQuestionClick,
   yourQuestionReady,
   nextQuestionClick,
   onMouseHover,
   onMouseLeave
}) => (

  <div className="question_bar">
    <div
      className="question_header bold"
    >
      CLICK ON A QUESTION TO START A QUONVO
    </div>
    {yourQuestion ?
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {yourQuestionReady ?
          <p style={{ textAlign: 'center', fontFamily: 'Roboto Slab', marginTop: '5px' }}> Someone is answering your question </p>
          :
          <p style={{ textAlign: 'center', fontFamily: 'Roboto Slab', marginTop: '5px' }}> Looking for someone to answer your question </p>
      }
        <LiveQuestion
          onQuestionClick={() => yourQuestionClick(yourQuestion.id)}
          questionClickable={yourQuestionReady}
          questionShade={yourQuestionReady ? 'blue' : '#F5DEB3'}
          questionText={yourQuestion.content}
          questionSubject={yourQuestion.subject}
          questionHandle={yourQuestion.handle}
        />
      </div>
    : null}
    <div className="question_sidebar_display">
      <div className="question_column">
        {listOfQuestions.map(question =>
          <LiveQuestion
            key={question.id}
            onQuestionClick={() => {
              question.id
              ?
              onClick(question.id, question.handle, question.content)
              :
              onClick(question._id, question.handle, question.content);
            }}
            onMouseOver={onMouseHover}
            onMouseOut={onMouseLeave}
            questionClickable={true}
            questionText={question.content}
            questionSubject={question.subject}
            questionHandle={question.handle}
          />
      )
      }
      </div>
    </div>
    <ButtonGroup className="navigate_buttons">
      <Button className="navigate_button" onClick={() => nextQuestionClick()} bsSize="large">
      Next
      </Button>
    </ButtonGroup>
  </div>
);

export default QuestionBar;
