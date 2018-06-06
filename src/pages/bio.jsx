import React from 'react';
import ReactDOM from 'react-dom';
import styles from './bio.css';
import shared1 from '../common/shared1.js';

export default class BIO extends React.Component {
  constructor(props) {
    shared1('bio');
  }

  render () {
    return <div className={styles.bg}>This is the BIO Page.</div>
  }
}
