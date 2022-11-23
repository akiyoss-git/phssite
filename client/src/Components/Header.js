import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';
import { 
    Container, 
    Nav, 
    Navbar 
} from 'react-bootstrap'
import logo from './logo.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Materials from '../Pages/Materials';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>

                        <Navbar.Brand href="/">
                            <img
                                src = {logo}
                                height="40"
                                width="30"
                                className="d-inline-block align-top" 
                                alt="Logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> ГЛАВНАЯ </Nav.Link>
                                <Nav.Link href="/about"> ОБО МНЕ </Nav.Link>
                                <Nav.Link href="/materials/all"> МАТЕРИАЛЫ </Nav.Link>
                                <Nav.Link href="/materials/upgradeKurses" >Курсы повышения квалификации</Nav.Link>
                            </Nav>

                            {/* поиск */}
                            {/* <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="mr=sm-2"
                                />
                                <Button variant="outline-info"> НАЙТИ </Button>
                            </Form> */}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} /> 
                        <Route exact path="/materials/:tab" component={Materials} /> 
                    </Switch>
                </Router> 
            </>
        )
    }
}