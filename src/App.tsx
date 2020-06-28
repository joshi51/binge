import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './admin/Dashboard/Dashboard';
import BingeNav from './BingeNav/BingeNav';
import Footer from './Footer/Footer';
import MoviesList from './Genre/MoviesList/MoviesList';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import '../scss/custom.scss';

const App = () => (
  <React.Fragment>
    <BingeNav/>
    <Switch>
      <Route exact={true} path="/auth/login" component={Login}/>
      <Route exact={true} path="/auth/signup" component={Signup}/>
      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/admin" component={Dashboard}/>
      <Route exact={true} path="/genres/:genreId" component={MoviesList}/>
    </Switch>
    <Footer/>
  </React.Fragment>
);

export default App;
