import { connect } from 'react-redux';
import React, { Component } from 'react';
import io from 'socket.io-client';
import { getTopics, getUser } from 'reducers';
import { newQuestionThunk } from 'actions';
import WriteQuestion from '../presentationalComponents/WriteQuestion';

class WriteQuestionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { socket: io(DOMAIN) };
  }

  onSubmit(genre, content, handle) {
    const submit = this.props.onSubmitQuestion;
    submit(genre, content, handle);
  }

  render() {
    const onSubmit = (genre, content, handle) => {
      this.props.onSubmitQuestion(genre, content, handle);
    };
    this.newProps = Object.assign({}, this.props, { onSubmit });
    return (
      <WriteQuestion {...this.newProps} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  topics: getTopics(state),
  firstName: getUser(state).name,
  ...ownProps
});

export default connect(mapStateToProps, {
  onSubmitQuestion: newQuestionThunk
})(WriteQuestionWrapper);
