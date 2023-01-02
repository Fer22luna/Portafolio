import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsArrowBarRight } from "react-icons/bs";


export const NavbarBootstrap = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-4 fw-bold">Luna Fernando Gabriel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#contact" className='fs-5 ms-3'>Contact</Nav.Link>
            <Nav.Link href="#skills" className='fs-5'>Skills</Nav.Link>
            <Nav.Link href="#aboutMe" className='fs-5'>About me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="">
              Hire me
            </Nav.Link>
            <BsArrowBarRight className='mt-3'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

