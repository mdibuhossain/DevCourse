import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-light">
            <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link as={Link} to="/home" eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about" eventKey="link-2">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/services" eventKey="link-3">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/events" eventKey="link-4">Events</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;