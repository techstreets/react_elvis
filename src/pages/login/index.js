import { connect } from 'react-redux';
import LoginPage from './login';

const mapDispatchToProps = () => {
  return {
  };
};

const mapStateToProps = (state, ownProps = {}) => {
  return {
    ...ownProps
  };
};

export { LoginPage };
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
