import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NaveBar = () => {
    return (
       <>
       <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: 'white' }}>
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'white' }}>
              Pricing
            </Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="collapsible-nav-dropdown"
              style={{ color: 'white' }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{ color: 'white' }}>
              More deets
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{ color: 'white' }}>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

           </>
          );
        };
  
  export default NaveBar;