import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbarr() {
    return (
        <>

            <Navbar bg="light" expand="lg" className=' bg-transparent'>
                <Container className='full-screen'>
                    <Navbar.Brand href="#home"><h2 className=' fw-bold'>STvDY</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto full-screen-items">
                            <Nav.Link href="https://github.com/amrIsmayl" className='active mx-2 fw-bold' target="_blank">Browser</Nav.Link>
                            <Nav.Link href="https://github.com/amrIsmayl" className='active mx-2 fw-bold' target="_blank">Bootcamps</Nav.Link>
                            <Nav.Link href="https://github.com/amrIsmayl" className='active mx-2 fw-bold' target="_blank">How It Works</Nav.Link>
                            <Nav.Link href="https://github.com/amrIsmayl" className='active mx-2 fw-bold' target="_blank">Testemonial</Nav.Link>
                        </Nav>
                        <button className=' btn btn-danger px-5 fw-bold Nav-button'>About us</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
