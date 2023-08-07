import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchAction } from '../redux/actions/searchAction';

const Navigation = () => {
  let [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchMovieName = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    dispatch(authenticateAction.login(id, password));
    navigate('/');
  }
  return (
  <Navbar bg='dark' variant='dark' style={{ zIndex: 999 }}>
    <Container fluid>
      <Navbar.Brand href="#">
        <img onClick={() => navigate('/')} width={100} src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/movies" className='nav-item'>Movies</Link>
        </Nav>
        <Form onSubmit={searchMovieName} className="d-flex">
          <Form.Control
            value={keyword} onChange={ (e) => setKeyword(e.target.value) }
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button type='submit' variant="outline-danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation
