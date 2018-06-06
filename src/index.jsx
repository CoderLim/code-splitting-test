
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Route } from 'react-router';
import { Link, HashRouter as Router } from 'react-router-dom';

const Home = Loadable({
  loader: () => import('./pages/home.jsx'),
  loading: () => <div>Loading</div>
});

const BIO = Loadable({
  loader: () => import('./pages/bio.jsx'),
  loading: () => <div>Loading</div>
});

const About = Loadable({
  loader: () => import('./pages/about.jsx'),
  loading: () => <div>Loading</div>
});

ReactDOM.render(<Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/bio" component={BIO}/>
    <Route path="/about" component={About}/>
  </div>
</Router>
, document.querySelector('#app'));
