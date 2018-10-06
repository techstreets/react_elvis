import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { fetchUsers } from '../../data/routines';
import HomePage from './home';

const mapDispatchToProps = (dispatch) => {
  return {
    doFetchUsers: bindActionCreators(fetchUsers, dispatch),
    gotoAbout: bindActionCreators(() => push('/about'), dispatch),
  };
};

const mapStateToProps = (state, ownProps = {}) => {
  return {
    users: state.users,
    pathname: _.get(state, 'router.location.pathname'),
    ...ownProps
  };
};

export { HomePage };
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
