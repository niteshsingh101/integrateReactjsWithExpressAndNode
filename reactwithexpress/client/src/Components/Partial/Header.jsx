import React from 'react';
import {Card, Nav, ListGroup, ListGroupItem, Image} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <Card.Header className="header">
            <Image style={{maxHeight:'20vh'}} src={process.env.PUBLIC_URL+'/Assets/logo.png'}></Image>            
            <Nav className="justify-content-center" variant="pills" defaultActiveKey="#first" bg="primary">
                <Nav.Item>
                <NavLink to="/" className="nav-link">Active</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/users">Users</NavLink>
                </Nav.Item>
                
            </Nav>            
        </Card.Header>
    );
}
export default Header;