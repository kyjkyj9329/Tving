import React from 'react'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logoImg from '../assets/img/TVING.svg'

const Navigation = () => {
  let [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchMovieName = (event) => {
    event.preventDefault();
    navigate('/');
  }
  return (
  <Nav>
    <div className='nav-items'>
      <a href="#">
        <img onClick={() => navigate('/')} width={100} src={logoImg} />
      </a>
      <Link to="/" className='nav-item'>Home</Link>
      <Link to="/movies" className='nav-item'>Movies</Link>
    </div>
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
  </Nav>
  )
}

export default Navigation
