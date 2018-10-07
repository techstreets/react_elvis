import { reduxForm } from 'redux-form';
import LoginForm from './login-form';

const LoginFormConnected = reduxForm({
  form: 'form-login'
})(LoginForm);

export { LoginForm, LoginFormConnected };
export default LoginFormConnected;
