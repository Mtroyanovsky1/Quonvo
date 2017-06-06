import { connect } from 'react-redux';
import { signUp, google, signIn } from 'actions';
import { SigninBar } from '../presentationalComponents';

export default connect(null, { signUp, google, signIn })(SigninBar);
