import React from 'react';
import styles from './about.css';
import DefaultLayout from '../../layouts';


class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultLayout className={styles.container}>
        <h1>About Page</h1>
      </DefaultLayout>
    );
  }
}

export default AboutPage;
