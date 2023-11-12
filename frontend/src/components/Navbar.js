import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux';
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

export default function Navb(){
  const islogin = useSelector((state)=>{return state.isloggin});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = ()=>{
    sessionStorage.clear("id");
    navigate("/");
    dispatch(authActions.logout());

  }

    return(
        <>
<Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container className="nav-css">
        <Navbar.Brand href="/"><span style={{color:"white"}}><b>MovieADDA</b></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-null">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="/movies">Movies</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="/about">About US</Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact Us
            </Nav.Link>
            { !islogin && <>
            <Nav.Link  href="/signup">
              Login/SignUP
            </Nav.Link>
            </>
            }
            { islogin && <>
            <Nav.Link  onClick={logout}>
              Logout
            </Nav.Link>
            <Nav.Link  href="/favourites">
              Favourites
            </Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         </>
     );
}