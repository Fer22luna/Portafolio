import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsArrowBarRight } from "react-icons/bs";


export const NavbarBootstrap = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#hero" className="fs-5 fw-bold me-5 name">Luna Fernando Gabriel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#contact" className='fs-5 nav_element me-3'>Contact</Nav.Link>
            <Nav.Link href="#skills" className='fs-5 nav_element me-3'>Skills</Nav.Link>
            <Nav.Link href="#aboutMe" className='fs-5 nav_element me-3'>About me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="" className='nav_element'>
              Hire me
              <BsArrowBarRight className='ms-1'/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

