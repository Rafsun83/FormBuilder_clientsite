import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Form Builder</Navbar.Brand>
                    <Nav>
                        <Link to='/home' style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Link>
                        <Link to='/generateform' style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#features">Generate Form</Nav.Link>
                        </Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;