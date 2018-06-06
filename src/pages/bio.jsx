import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import styles from './bio.css';

export default class BIO extends React.Component {
  render () {
    return <div className={styles.bg}>This is the BIO Page.</div>
  }
}
