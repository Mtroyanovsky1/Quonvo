import { connect } from 'react-redux';
import { getMessages, getQuestion } from 'reducers';
import MessagesBox from '../presentationalComponents/MessagesBox';


const mapStateToProps = (state, { chatIndex }) => ({
  messages: getMessages(state, chatIndex),
  question: getQuestion(state, chatIndex)
});
export default connect(mapStateToProps, null)(MessagesBox);
