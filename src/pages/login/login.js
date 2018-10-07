import React from 'react';
import styles from './login.css';
import DefaultLayout from '../../layouts';
import LoginForm from '../../components/login-form';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    this.setState(values);
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <DefaultLayout className={styles.container}>
        <h1>Login Page</h1>
        <br/><br/>
        <div>First name: {firstName}</div>
        <div>Last name: {lastName}</div>
        <div>Email: {email}</div>
        <LoginForm onSubmit={this.submit}/>
      </DefaultLayout>
    );
  }
}

export default LoginPage;
