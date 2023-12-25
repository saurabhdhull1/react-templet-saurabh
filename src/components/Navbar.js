import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

function MyNavbar() {
    const navigate = useNavigate();
    const [size, setsize] = useState(false);
  return (
    <>
        <Navbar key='md' expand='md' className="bg-body-tertiary shadow-lg sticky-top">
          <Container fluid>
            <Navbar.Brand style={{cursor:"pointer"}} onClick={()=>navigate('/')}>Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              className={'mynavbar'}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Navbar
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 gap-3 pe-3">
                  <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
                  <Nav.Link onClick={()=>navigate('/about')}>About</Nav.Link>
                  <Nav.Link onClick={()=>navigate('/Notfound')}>Not found</Nav.Link>
                  <Nav.Link onClick={()=>navigate('/contact')}><Button variant="primary">Contact Us</Button></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default MyNavbar;