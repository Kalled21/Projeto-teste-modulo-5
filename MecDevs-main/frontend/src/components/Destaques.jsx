import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-instagram-post-template_106176-2067.jpg?w=740&t=st=1681642650~exp=1681643250~hmac=b5a38988baf351ef5a709a83940392ce2778ba2b18f2b5f05164f2d2dfe88a5d" />
                    <Card.Body>
                        <Card.Title>Novidade no Cardápio</Card.Title>
                        <Card.Text>
                           Novo SMASH COMBO, Cremosidade e Bacon é o que MAIS TEMOS.
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Conferir</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_106176-1326.jpg?w=740&t=st=1681642793~exp=1681643393~hmac=05ee2172fd00a87edb5c2d93bab5be41498b2438e4d42b4af9d5888828ec8ad5" />
                    <Card.Body>
                        <Card.Title>Promoção Gêmeos Duplo</Card.Title>
                        <Card.Text>
                            A nossa equipe criou a maior irmandade possível, Dois Cheese burguer found em um combo só.
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Conferir</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-psd/burger-social-media-template_505751-2876.jpg?w=740&t=st=1681642758~exp=1681643358~hmac=4156a4d48c9d31fa9f4ce6118328543db2ac877440f287d8830a3b80a44d46fb" />
                    <Card.Body>
                        <Card.Title>Stack-Hot Special (Novidade)</Card.Title>
                        <Card.Text>
                            Trabalhamos para melhorar cada vez mais nossos lanches, e sem "querer" criamos um monstro.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Conferir</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;