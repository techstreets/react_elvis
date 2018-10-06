import React from 'react';
import styles from './home.css';
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
        <button onClick={() => gotoAbout()}>Goto About</button>
      </DefaultLayout>
    );
  }
}

export default HomePage;
