import React from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { connect, useSelector } from 'react-redux';
import { userService } from '../shared/services';
import { userLogin } from '../shared/store/actions';
import { get } from 'lodash';
import './Login.scss';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogin: (payload: any) => dispatch(userLogin(payload))
  };
};

class Login extends React.Component< any , { username: string, password: string, redirectPath: string }> {
  private storeData: any;
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectPath: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public componentDidUpdate() {
    if (get(this.props, 'user.userData')) {
      this.setState({...this.state, redirectPath: '/'});
    }
  }

  public componentWillUnmount() {
    this.setState = (state,callback)=>{
      return;
    };
  }
  
  public handleChange(event: any) {
    event.preventDefault();
    switch (event.currentTarget.id) {
      case 'loginPassword': {
        this.setState({password: event.currentTarget.value});
        break;
      }
      case 'loginUsername': {
        this.setState({username: event.currentTarget.value});
        break;
      }
      default:
        return;
    }
  }
  
  private handleSubmit(event: any) {
    event.preventDefault();
    userService.loginUser({username: this.state.username, password: this.state.password})
      .then((res) => {
        const authResponse = get(res, 'data');
        if (authResponse) {
          sessionStorage.setItem('auth', JSON.stringify(authResponse.token.user));
          this.props.userLogin(authResponse.token.user)
          this.setState({...this.state, redirectPath: '/'});
        }
      })
      .catch((err) => console.log(err));
  }
  
  public render() {
    if (this.state.redirectPath) {
      return <Redirect to={this.state.redirectPath} push/>;
    } else {
      return (
        <div className="login-form">
          <h5>Login Form</h5>
            <FormControl fullWidth>
              <InputLabel>Username</InputLabel>
              <Input type="text" id="loginUsername" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
            </FormControl>
            {this.storeData}
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <Input type="password" id="loginPassword" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
            </FormControl>
            <Button variant="contained" color="primary" type="submit" className="submit" onClick={this.handleSubmit}>Submit</Button>
        </div>
      );
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
