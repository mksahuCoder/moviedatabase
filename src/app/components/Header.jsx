"use client" 
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchText){
      router.push(`/movies/search?query=${searchText}`)
    }
  }
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">Movies Batabase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            // navbarScroll
          >
            
          </Nav>
          <Form className="d-flex" onSubmit={e=> handleSubmit(e)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e=>setSearchText(e.target.value)}
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;