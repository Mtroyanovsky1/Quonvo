import { connect } from 'react-redux';
import { signIn } from 'actions';
import { LoginBar } from '../presentationalComponents';

export default connect(null, { signIn })(LoginBar);
