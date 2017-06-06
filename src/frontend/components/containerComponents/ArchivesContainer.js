import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getArchives, getTopics } from 'reducers';
import { newArchivesThunk, closeArchives } from 'actions';
import Archives from '../presentationalComponents/Archives';

class ArchivesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, topic: props.topics[0], getMessages: false, messages: null };
  }

  nextPage(numberPerPage) {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
    const pageNumber = this.state.page;
    this.props.newArchivesThunk(this.state.topic, pageNumber, numberPerPage);
  }

  previousPage(numberPerPage) {
    const previousPage = this.state.page - 1;
    this.setState({ page: previousPage });
    const pageNumber = this.state.page;
    this.props.newArchivesThunk(this.state.topic, pageNumber, numberPerPage);
  }

  backToArchives() {
    this.setState({ getMessages: false });
  }
  newTopic(topic, numberPerPage) {
    console.log('new topic function', topic)
    this.setState({ page: 0, topic, getMessages: false });
    const pageNumber = this.state.page;
    this.props.newArchivesThunk(topic, pageNumber, numberPerPage);
  }

  openMessages(messages) {
    this.setState({ getMessages: true, messages });
    console.log('i got here');
  }
  render() {
    const newProps = Object.assign(
      {}, this.props, {
        nextPage: this.nextPage.bind(this),
        previousPage: this.previousPage.bind(this),
        newTopic: this.newTopic.bind(this),
        openMessages: this.openMessages.bind(this),
        areMessagesOpen: this.state.getMessages,
        messages: this.state.messages,
        backToArchives: this.backToArchives.bind(this),
        currentTopic: this.state.topic,
        topics: this.props.topics
      }
    );
    console.log('the state', this.state);
    return (
      <Archives {...newProps} />
    );
  }
}

const mapStateToProps = state => ({
  archives: getArchives(state),
  topics: getTopics(state)
});

export default connect(mapStateToProps, { newArchivesThunk, closeArchives })(ArchivesWrapper);
