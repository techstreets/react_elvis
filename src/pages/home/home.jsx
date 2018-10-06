import React from 'react';
import styles from './home.css';
import moment from 'moment';
import Moment from 'react-moment';
import DefaultLayout from '../../layouts';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname, gotoAbout } = this.props;

    return (
      <DefaultLayout className={styles.container}>
        <h1>Home Page @{pathname}</h1>
        <Moment format="YYYY/MM/DD HH:mm:ss">
          {moment.now()}
        </Moment>
        <br/><br/>
        <button onClick={() => gotoAbout()}>Goto About</button>
      </DefaultLayout>
    );
  }
}

export default HomePage;
