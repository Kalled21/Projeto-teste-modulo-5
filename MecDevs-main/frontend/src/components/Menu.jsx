import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import "../../styles/Menu.css"



function Menu() {
    
    return (
        
    <Navbar id="navbarMenu" collapseOnSelect expand="lg" bg="warning" variant="dark" fixed="top">
        <LinkContainer to="/">
         <img src="../src/img/Mec-removebg-preview.png" width={100} class="image-thumbnail" alt="..."></img>
         </LinkContainer>
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand class="logo">MecDevs</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>FaQ Resolução</Nav.Link>
                    </LinkContainer>
                </Nav>
                <img class="rounded-left" src="../src/img/lateral.png" width={40} left={60} alt="..."></img>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Menu;

