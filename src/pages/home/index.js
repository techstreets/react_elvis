import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import HomePage from './home';

const mapDispatchToProps = (dispatch) => {
  return {
    gotoAbout: bindActionCreators(() => push('/about'), dispatch),
  };
};

const mapStateToProps = (state, ownProps = {}) => {
  const { pathname } = state.router.location;
  return {
    pathname,
    ...ownProps
  };
};

export { HomePage };
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
