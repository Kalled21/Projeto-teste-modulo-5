import Carousel from 'react-bootstrap/Carousel'
import '../assets/css/main.css'
function Banners() {
    return (
        <Carousel variant="bg-white" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-400"
                        src="https://img.freepik.com/free-psd/instagram-post-collection-brunch_23-2148455666.jpg?w=1800&t=st=1681644294~exp=1681644894~hmac=36225f5db14f142dccdf5bc7509603743bfea0e1ede139111bc5edcee84d1ef1"
                        alt="Slide incrível" height={380}
                    />
                    <Carousel.Caption>
                        <h5 id="titulo1" className='text-white .font-italic'>Week da Promoção</h5>
                        <p className='text-white'></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-psd/food-menu-delicious-pizza-facebook-cover-banner-template_106176-720.jpg?w=1480&t=st=1681646046~exp=1681646646~hmac=ecb244afce2c70eec09751ae9fe86c38528a7ca274fd1574c831fb9e1eb5f632"
                        alt="Outro slide incrível" height={380}
                    />
                    <Carousel.Caption>
                        <h5 id="titulo1" className='text-white'>Fome de pizza?</h5>
                        <p className='text-white'>Confira os principais sabores do catálogo</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_106176-756.jpg?w=1480&t=st=1681646112~exp=1681646712~hmac=5bf77a01ca82a9b8941ada3da8882e7dadd208a05b07a1695d1e0e925f30243a"
                        alt="Último slide" height={380}
                    />
                    <Carousel.Caption>
                        <h5 id="titulo1" className='text-white'>Amor por frango?</h5>
                        <p className='text-white'>
                            Nossa equipe pensando nos amantes de frango, atendeu a sua paixão!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners