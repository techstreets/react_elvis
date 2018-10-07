import React from 'react';
import styles from './home.css';
import moment from 'moment';
import Moment from 'react-moment';
import DefaultLayout from '../../layouts';
import Button from '@material-ui/core/Button';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { doFetchUsers } = this.props;
    doFetchUsers();
  }

  render() {
    const { pathname, users, gotoAbout, gotoLogin } = this.props;
    return (
      <DefaultLayout className={styles.container}>
        <h1>Home Page @{pathname}</h1>
        <Moment format="YYYY/MM/DD HH:mm:ss">
          {moment.now()}
        </Moment>
        <br/><br/>
        <Button
          variant="contained"
          color="primary"
          onClick={() => gotoAbout()}
        >
          Goto About
        </Button>
        <br/><br/>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => gotoLogin()}
        >
          Login Page
        </Button>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </DefaultLayout>
    );
  }
}

export default HomePage;
