import React from 'react';
import ReactDOM from 'react-dom';
import styles from './home.css';
import shared1 from './../common/shared1.js';

export default class Home extends React.Component {
  componentWillMount () {
    console.log(shared1);
  }

  render () {
    return <div className={styles.bg}>This is the Home Page.</div>
  }
}
