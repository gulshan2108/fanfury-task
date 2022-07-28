import React from 'react';
import './header.scss';
import {
    Navbar,
    Container,
    Nav,
    Button
} from "react-bootstrap";
import Logo from "../../../assets/fanfury-logo.svg";
import {BsSearch} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <Navbar expand="lg">
            <Container>
                <Link to="/">
                    <img src={Logo} alt="logo" className='img-fluid' />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center">
                    <Nav.Link className="active" href="/">Packages</Nav.Link>
                    <Nav.Link href="/">About Us</Nav.Link>
                    <Nav.Link>
                        <BsSearch />
                    </Nav.Link>
                    <Nav.Link>
                        <Button className='btn-header'>Play Now</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header;