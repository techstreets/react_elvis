import React from 'react';
import styles from './home.css';
import DefaultLayout from '../../layouts';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DefaultLayout className={styles.container}>
        <h1>Home Page</h1>
      </DefaultLayout>
    );
  }
}

export default HomePage;
