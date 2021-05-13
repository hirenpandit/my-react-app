import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Route,
    Switch    
} from 'react-router-dom';
import App from './App';
import Company from './company/list-company';
import {CompanyPorp} from './company/company';

export default function Navigation() {
    const companies = new Array({
        id: 123,
        name: "mastercard",
        city: "vadodara",
        region: "gujarat"
    })
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
                    
                    <Route>
                        <Company companies = {companies}/>
                    </Route>
                </Switch>
            </Router>
    
}