import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { onQuestionClick, openChat, removeQuestion } from 'actions/chatActions';
import { getQuestions, getCurrentQuestionPage, getYourQuestion, getYourQuestionReady, getUserName } from 'reducers';
import { loadMoreQuestionsThunk as loadMoreQuestions, nextQuestionPage, previousQuestionPage, firstQuestionPage, addQuestion, removeUserQuestionThunk } from 'actions';
import QuestionBar from '../presentationalComponents/QuestionBar';
import AnswerQuestion from '../presentationalComponents/AnswerQuestion';
import Modal from '../presentationalComponents/Modal';


const limit = 1000;
const questionRefresh = 40000; // TODO make a realistic value
const numberOfQs = 5;
const howEarlyShouldWeLoad = -1; // TODO make a realistic value (see git issue #187)

class QuestionBarWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io(DOMAIN),
      answerModalActive: false,
      clickedQid: null,
      clickedQhandle: null,
      clickedQquestion: null
    };
    this.state.socket.on('removeQuestion', ({ questionId }) => {
      this.props.removeQuestion(questionId);
    });
    this.state.socket.on('addQuestion', (newQuestion) => {
      this.props.addQuestion(newQuestion.newQuestion, this.props.user);
    });
    this.state.socket.on('removeYourQuestion', ({ userId }) => {
      this.props.removeUserQuestionThunk(userId);
    });
  }

  componentDidMount() {
    this.props.loadMoreQuestions(limit, 0);
    this.interval = setInterval(() => this.props.nextQuestionPage(), questionRefresh);
  }

  componentDidUpdate() {
    const questions = this.props.allQuestions;
    const page = this.props.currentPage;
    let mostRecent = 0;

    if ((questions.length / numberOfQs) < page) {
      this.props.firstQuestionPage();
    }
    for (let i = 0; i < questions.length; i++) {
      const date = questions[i].createdTime;
      if (date > mostRecent) mostRecent = date;
    }

    if ((questions.length / numberOfQs) < page + howEarlyShouldWeLoad) {
      this.props.loadMoreQuestions(limit, mostRecent);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onMouseHover() {
    clearInterval(this.interval);
  }

  onMouseLeave() {
    this.interval = setInterval(() => this.props.nextQuestionPage(), questionRefresh);
  }

  nextQuestion() {
    this.props.nextQuestionPage();
    clearInterval(this.interval);
    this.interval = setInterval(() => this.props.nextQuestionPage(), questionRefresh);
  }
  submitModal(handleField) {
    const chosenHandle = handleField;
    this.props.onQuestionClick(
      this.state.clickedQid,
      this.state.clickedQhandle,
      chosenHandle,
      this.state.clickedQquestion
    );
    this.closeModal();
  }

  openModal(id, theirHandle, theirQuestion) {
    this.setState({
      answerModalActive: true,
      clickedQid: id,
      clickedQhandle: theirHandle,
      clickedQquestion: theirQuestion
    });
  }

  closeModal() {
    this.setState({
      answerModalActive: false,
      clickedQid: null,
      clickedQhandle: null,
      clickedQquestion: null
    });
  }

  previousQuestion() {
    this.props.previousQuestionPage();
    clearInterval(this.interval);
    this.interval = setInterval(() => this.props.nextQuestionPage(), questionRefresh);
  }
  render() {
    const newProps = Object.assign(
      {},
      this.props,
      {
        onClick: (id, theirHandle, theirQuestion) =>
          this.openModal(id, theirHandle, theirQuestion),
        nextQuestionClick: () => this.nextQuestion(),
        previousQuestionClick: () => this.previousQuestion(),
        onMouseHover: () => this.onMouseHover(),
        onMouseLeave: () => this.onMouseLeave()
      }
    );

    return (
      <div className="question_wrapper">
        <Modal
          contentLabel="Modal"
          isOpen={this.state.answerModalActive}
          onRequestClose={() => this.closeModal()}
        >
          <AnswerQuestion
            submit={this.submitModal.bind(this)}
            user={this.props.user}
          />
        </Modal>
        <QuestionBar {...newProps} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const page = getCurrentQuestionPage(state);
  const allQuestions = getQuestions(state);
  const currentQuestions = allQuestions.slice(numberOfQs * page, (numberOfQs * page) + numberOfQs);
  return {
    listOfQuestions: currentQuestions,
    allQuestions,
    currentPage: page,
    yourQuestion: getYourQuestion(state),
    yourQuestionReady: getYourQuestionReady(state),
    user: getUserName(state)
  };
};

export default connect(
  mapStateToProps,
  {
    onQuestionClick,
    nextQuestionPage,
    loadMoreQuestions,
    previousQuestionPage,
    firstQuestionPage,
    yourQuestionClick: openChat,
    removeQuestion,
    addQuestion,
    removeUserQuestionThunk
  }
)(QuestionBarWrapper);
