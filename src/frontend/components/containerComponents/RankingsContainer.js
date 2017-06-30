import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getRankings, getTopics } from 'reducers';
import { newRankingsThunk, closeRankings } from 'actions';

import Rankings from '../presentationalComponents/Rankings';
console.log('connect', Rankings);
class RankingsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: props.topics[0] };
  }

  setTopic(topic) {
    this.setState({ topic });
    this.props.newRankingsThunk(this.state.topic);
  }

  render() {
    return (
      <Rankings
        currentTopic={this.state.topic}
        setTopic={topic => this.setTopic(topic)}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  listRankings: getRankings(state),
  topics: getTopics(state)
});


export default connect(mapStateToProps, { newRankingsThunk, closeRankings })(RankingsWrapper);
