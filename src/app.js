import React from 'react';
import styles from './app.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import LoginPage from './pages/login';
import HomePage from './pages';
import AboutPage from './pages/about';


const App = ({ store, persistor, history }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.app}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/about" component={AboutPage} />
            </Switch>
          </ConnectedRouter>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
