import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BaseRoutes } from './enums';

class BingeNav extends React.Component<any, {type: number}> {
    constructor(props: {type: number}) {
        super(props);
    }
    public render() {
        switch (this.props.type) {
            case BaseRoutes.AUTH:
                return (
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Let's Binge</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto"/>
                            <Nav className="mr-0">
                                <Nav.Link href="/auth/login">Login</Nav.Link>
                                <Nav.Link href="/auth/signup">Sign Up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                );
            case BaseRoutes.ADMIN:
                return (
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Let's Binge</Navbar.Brand>
                    </Navbar>
                );
            case BaseRoutes.DEFAULT:
            default:
                return (
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Let's Binge</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/admin">Dasboard</Nav.Link>
                            </Nav>
                            <Nav className="mr-0">
                                <Nav.Link href="/auth/login">Login</Nav.Link>
                                <Nav.Link href="/auth/signup">Sign Up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                );
        }
    }
}

export default BingeNav;
