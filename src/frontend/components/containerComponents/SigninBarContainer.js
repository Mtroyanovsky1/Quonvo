import { connect } from 'react-redux';
import { signUp, google } from 'actions';
import { SigninBar } from '../presentationalComponents';
console.log(google)
export default connect(null, { signUp, google })(SigninBar);
