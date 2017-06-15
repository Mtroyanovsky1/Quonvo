import { connect } from 'react-redux';
import { signUp, signIn } from 'actions';
import { google } from 'api';
import { SigninBar } from '../presentationalComponents';

export default connect(null, { signUp, google, signIn })(SigninBar);
