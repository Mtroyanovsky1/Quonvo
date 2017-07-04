import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserThunk } from 'actions';
import { getChats, areArchivesOpen, areRankingsOpen } from 'reducers';
import io from 'socket.io-client';
import ParentPage from '../presentationalComponents/ParentPage';

console.log('connect', ParentPage);
class ParentPageWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { socket: io(DOMAIN) };
  }

  componentDidMount() {
    this.props.newUser();
  }
  render() {
    return (
      <ParentPage {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  // map from dict of chats objects to array of chatObjects which now include their dict key
  chats: Object.keys(getChats(state))
          .map(key => Object.assign({}, getChats(state)[key], { chatIndex: key })),
  archives: areArchivesOpen(state),
  rankings: areRankingsOpen(state)
});

export default connect(mapStateToProps, { newUser: newUserThunk })(ParentPageWrapper);
