import { useState } from 'react';
import './App.css';
import {vData, vData1} from '../data.js'
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div className='App'>
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
    <div className='visualWrap mb-3'>
      <Container className='py-4 text-white text-center'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aperiam.</p>
      </Container>
    </div>

    <Container className='mb-2 mb-md-5'>
      <h3 className='text-center mb-3'>GALLERY</h3>
      <Row>
        <Col sm={6} md={3} className='mb-2'>
          <Card>
            <Card.Img variant="top" src="./img/img01.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3} className='mb-2'>
          <Card>
            <Card.Img variant="top" src="./img/img02.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3} className='mb-2'>
          <Card>
            <Card.Img variant="top" src="./img/img03.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3} className='mb-2 d-none d-md-block'>
          <Card>
            <Card.Img variant="top" src="./img/img04.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <div className="contentWrap01 py-2 py-md-5">
      <Container>
        <h3 className='text-center mb-3'>GALLERY</h3>
        <Row>
          <Col sm={6} md={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="./img/img01.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="./img/img02.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="./img/img03.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="./img/img04.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}


export default App;
