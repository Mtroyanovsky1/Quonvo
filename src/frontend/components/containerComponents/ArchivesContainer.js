import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getArchives, getTopics, getPageNumber, getLoading } from 'reducers';
import { newArchivesThunk, closeArchives, nextPage, pageZero, previousPage } from 'actions';
import Archives from '../presentationalComponents/Archives';

class ArchivesWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: props.topics[0],
      getMessages: false,
      messages: null
    };
  }

  nextPage(numberPerPage) {
    const pageNumber = this.props.pageNumber;
    this.props.nextPage();
    this.props.newArchivesThunk(this.state.topic, pageNumber, numberPerPage);
  }

  previousPage(numberPerPage) {
    const pageNumber = this.props.pageNumber;
    this.props.previousPage();
    this.props.newArchivesThunk(this.state.topic, pageNumber, numberPerPage);
  }

  backToArchives() {
    this.setState({ getMessages: false });
  }
  newTopic(topic, numberPerPage) {
    pageZero();
    this.setState({ topic, getMessages: false });
    const pageNumber = this.props.pageNumber;
    this.props.newArchivesThunk(topic, pageNumber, numberPerPage);
  }

  openMessages(messages) {
    this.setState({ getMessages: true, messages });
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
  topics: getTopics(state),
  pageNumber: getPageNumber(state),
  loading: getLoading(state)
});

export default connect(mapStateToProps, {
  newArchivesThunk,
  closeArchives,
  nextPage,
  pageZero,
  previousPage
})(ArchivesWrapper);
