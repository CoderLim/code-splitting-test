import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import styles from './home.css';

export default class Home extends React.Component {
  render () {
    return <div className={styles.bg}>This is the Home Page.</div>
  }
}
