import { connect } from 'react-redux';
import { getTopics, getUser } from 'reducers';
import { newQuestionThunk } from 'actions';
import WriteQuestion from '../presentationalComponents/WriteQuestion';

const mapStateToProps = (state, ownProps) => ({
  topics: getTopics(state),
  firstName: getUser(state).name,
  ...ownProps
});

export default connect(mapStateToProps, { onSubmitQuestion: newQuestionThunk })(WriteQuestion);
