import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class NavigationBar extends React.Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link className="px-5" href="#Home">Home</Nav.Link>
                                <Nav.Link className="px-5" href="#About">About</Nav.Link>
                                <Nav.Link className="px-5" href="#Projects">Projects</Nav.Link>
                                <Nav.Link className="px-5" href="#Contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;