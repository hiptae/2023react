import { useState } from 'react';
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas } from 'react-bootstrap';


function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">COMPANY</Nav.Link>
                        <Nav.Link href="#link">PRODUCT</Nav.Link>
                        <Nav.Link href="#link">BOARD</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">COMPANY</Nav.Link>
                <Nav.Link href="#link">PRODUCT</Nav.Link>
                <Nav.Link href="#link">BOARD</Nav.Link>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default NavBar;