var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Use ES6 destructuring to import stuff needed for React Routing
// var Route = require('react-router').Route // Otherwise
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
// use css loader so that it can be required
// chain style loader as well
require('style!css!foundation-sites/dist/foundation.min.css');

// Load our own styles
require('style!css!sass!applicationStyles');

$(document).foundation();


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown} />
            <IndexRoute component={Timer} />
        </Route>
    </Router>,
    document.getElementById('app')
);
