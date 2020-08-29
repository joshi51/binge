import React from 'react';
import { Button, Container, FormControl, InputLabel, Input } from '@material-ui/core';

class Signup extends React.Component<{}, { email: string, password: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  public handleChange(event: any) {
    event.preventDefault();
    
    switch (event.currentTarget.id) {
      case 'signupPassword': {
        this.setState({password: event.currentTarget.value});
        break;
      }
      case 'signupEmail': {
        this.setState({email: event.currentTarget.value});
        break;
      }
      default:
        return;
    }
  }
  
  private handleSubmit(event: any) {
    event.preventDefault();
    console.log(this.state);
  }
  
  public render() {
    return (
      <Container>
        <h5>SignUp Form</h5>
        <FormControl fullWidth>
          <InputLabel htmlFor="signupEmail">Email address</InputLabel>
          <Input type="email" id="signupEmail" value={this.state.email} onChange={this.handleChange}/>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel htmlFor="signupPassword">Password</InputLabel>
          <Input type="password" value={this.state.password} id="signupPassword" onChange={this.handleChange}/>
        </FormControl>
        
        <Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
      </Container>
    );
  }
}

export default Signup;
