import React from 'react';
import styles from './default.css';
import cx from 'classnames';


class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, children } = this.props;
    return (
      <div className={cx(styles.container, className)}>
        <h1>React Elvis</h1>
        <hr />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
