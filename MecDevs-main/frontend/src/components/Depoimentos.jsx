import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Feedback clientes</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-pessoa-com-chapeu-rosa_23-2149436195.jpg?w=826&t=st=1677673710~exp=1677674310~hmac=589f427a3bd49c0b76e73a884d9ad4442ea24d34f48568cb439db9d60cbd42cf" width={100} alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Ticket#3788</strong>
                <p>Claudia Damasceno</p>
                <p>
                    "Achei maravilhoso o cheese burguer da promoção de domingo,<br /> estão de parabéns
                    depois de termos varias decepções, encontramos a perfeita,meu marido e eu viramos fã de carteirinha, ganharam uma cliente fiel!!!"
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436180.jpg?w=826&t=st=1677673701~exp=1677674301~hmac=c0ea1b9d597dbd9b114785e299c765dd9f9c15a09dd73f23403eb4cf401fff6c" width={100} alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Ticket#9822</strong>
                <p>Bianca Alburquerque</p>
                <p>
                "Quero parabenizar a hamburgueria pela excelente qualidade de produto e entrega<br />
                    Além do lanche que não há palavras pra descrever, motoboy foi super educado, experiência ótima pedirei novamente."
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos