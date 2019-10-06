import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class Login extends React.Component<{}, { email: string, password: string }> {
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
            case 'loginPassword': {
                this.setState({password: event.currentTarget.value});
                break;
            }
            case 'loginEmail': {
                this.setState({email: event.currentTarget.value});
                break;
            }
            default: return;
        }
    }
    
    private handleSubmit(event: any) {
        event.preventDefault();
        console.log(this.state);
    }
    
    public render() {
        return (
            <Container>
                <h5>Login Form</h5>
                <Form>
                    <Form.Group controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;
