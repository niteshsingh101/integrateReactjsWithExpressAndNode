import React from 'react';
import {Card, Nav, Image} from 'react-bootstrap';

const Footer = () => {
    return(
        <Card.Footer className="footer">
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            <Nav className="justify-content-center" variant="pills" defaultActiveKey="#first" bg="primary">
                <Nav.Item>
                <Nav.Link href="#first" className="nav-link">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Footer>
    );
}

export default Footer;