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
import Login from './login/login';

function setToken(userToken:any) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString || '{}');
    return userToken?.token;
}

export default function Navigation() {

    const token = getToken();

    console.log(`TOKEN:::${token}`);
    if(!token) {
        return <Login setToken={setToken} />
    }
    
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