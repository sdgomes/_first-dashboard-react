import React from 'react';
// Components
import { Navbar, Nav, Form, FormControl, Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

function Navigation() {
    return (
        <Card className="sticky-top border-0 navgation-card" >
            <Navbar bg="navbar" variant="dark">
                <Nav className="ml-5 text-uppercase mr-auto">
                    <Nav.Link href="#MyPlace">My Place</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#Overview">Overview</Nav.Link>
                </Nav>
                <Form inline className="search-bar rounded-pill">
                    <FormControl id="NavigationSearch" type="text" placeholder="Search Project..." className="rounded-pill bg-transparent border-0 text-white" />
                    <Button className="btn text-white search-btn">
                        <i className="fas fa-search"></i>
                    </Button>
                </Form>
                <h6 className="small text-white mb-0 mx-3">Luisa Marilac</h6>
                <Avatar alt="Luisa Marilac" src="/img/marilac.jpg" className="classes.large" />
                <DropdownButton id="dropdown-basic-button" title="">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </Navbar>
            <Nav
                className="stripe"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link className="sub-nav-lik text-light small cardo" href="/home">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sub-nav-lik text-light small cardo" eventKey="link-1">Calendar</Nav.Link>
                </Nav.Item>
                <div className="ml-auto row mr-2 small align-items-center">
                    <Nav.Item>
                        <Nav.Link className="sub-nav-lik text-light" eventKey="link-1"><i className="fas fa-filter"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="sub-nav-lik text-light" eventKey="link-1"><i className="fas fa-cogs"></i></Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </Card>
    );
}

export default Navigation;