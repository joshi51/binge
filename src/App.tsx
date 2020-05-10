import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/custom.scss';
import Dashboard from './admin/Dashboard/Dashboard';
import './App.css';
import BingeNav from './BingeNav/BingeNav';
import { BaseRoutes } from './BingeNav/enums';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const App = () => (
    <React.Fragment>
        <Switch>
            <Route path="/auth" component={LoginComponents}/>
            <Route path="/admin" component={AdminComponents}/>
            <Route path="/" component={DefaultComponents}/>
        </Switch>
    </React.Fragment>
);

const LoginComponents = () => (
    <React.Fragment>
        <BingeNav type={BaseRoutes.AUTH}/>
        <Route exact={true} path="/auth/login" component={Login} />
        <Route exact={true} path="/auth/signup" component={Signup} />
    </React.Fragment>
);

const DefaultComponents = () => (
    <React.Fragment>
        <BingeNav type={BaseRoutes.DEFAULT}/>
        <Route exact={true} path="/" component={Home} />
    </React.Fragment>
);

const AdminComponents = () => (
    <React.Fragment>
        <BingeNav type={BaseRoutes.ADMIN}/>
        <Route exact={true} path="/admin" component={Dashboard} />
    </React.Fragment>
);

export default App;
