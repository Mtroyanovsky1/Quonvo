import { connect } from 'react-redux';
import { openChat } from 'actions/chatActions';
import TabsBar from '../presentationalComponents/TabsBar';

// right now, TabsBar gets the chats from ParentPage.
// TODO should it get them from connect here instead?
console.log('connect', TabsBar);
export default connect(null, { openChat })(TabsBar);
