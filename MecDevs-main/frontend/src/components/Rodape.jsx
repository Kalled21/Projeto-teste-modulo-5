import Container from 'react-bootstrap/Container';
import "../../styles/Footer.css"
function Rodape() {
    return (
        <footer className=" bg-warning ">
        <Container className='text-center py-4 text-light fw-bold' >
            <p>&copy; MecDevs 2023</p> 
        </Container>
        </footer>
    );
}

export default Rodape