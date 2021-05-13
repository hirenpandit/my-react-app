import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch    
} from 'react-router-dom';
import App from './App';

export default function Navigation() {
    return <Router>
            <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">My-react-app</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/app">Github App</Nav.Link>
                        <Nav.Link href="/companies">Companies</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/app">
                        <App title="The GitHub Card App"/>
                    </Route>
                </Switch>
            </Router>
    
}