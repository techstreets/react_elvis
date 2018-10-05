import React from 'react';
import styles from './app.css';
import { Provider } from 'react-redux';
import HomePage from './pages';


const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
