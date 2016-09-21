import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from './App.jsx';
import Path1 from './jsx/Path1.jsx'

ReactDOM.render(
	<Router history={hashHistory}>
      <Route path="/" component={App}></Route>
      <Route path="Path1" component={Path1}></Route>
    </Router>
    ,document.getElementById('app'));
