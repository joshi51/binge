import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class BingeNav extends React.Component {
    public render() {
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Let's Binge</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Navbar>
        );
    }
}

export default BingeNav;
