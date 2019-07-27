import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/custom.scss';
import './App.css';
import BingeNav from './BingeNav/BingeNav';
import Home from './Home/Home';

const App = () => (
    <div>
        <BingeNav/>
        <Switch>
            <Route exact={true} path="/" component={Home} />
        </Switch>
    </div>
);

export default App;
