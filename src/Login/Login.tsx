import React from 'react';
import { Button, Container, FormControl, InputLabel, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { UserService } from '../shared/services';
import { userLogin } from '../shared/store/actions';
import { get } from 'lodash';

const userService = new UserService();

class Login extends React.Component<{ userLogin: any }, { username: string, password: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          localStorage.setItem('auth', JSON.stringify(authResponse));
          this.props.userLogin(authResponse);
        }
      })
      .catch((err) => console.log(err));
  }
  
  public render() {
    return (
      <Container>
        <h5>Login Form</h5>
          <FormControl fullWidth>
            <InputLabel>Username</InputLabel>
            <Input type="text" id="loginUsername" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
          </FormControl>
          
          <FormControl fullWidth>
            <InputLabel>Password</InputLabel>
            <Input type="password" id="loginPassword" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
          </FormControl>
          <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
      </Container>
    );
  }
}

export default connect(null, {userLogin})(Login);
