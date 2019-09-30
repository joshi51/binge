import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/custom.scss';
import './App.css';
import BingeNav from './BingeNav/BingeNav';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const App = () => (
    <div>
        <BingeNav/>
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/signup" component={Signup} />
        </Switch>
    </div>
);

export default App;
