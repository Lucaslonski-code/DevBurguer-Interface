import { useEffect, useState } from 'react';
import CarouselImport from 'react-multi-carousel';
const Carousel = CarouselImport.default;
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';

import { Title, ContainerItems, Container } from './styles.js';


export function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            console.log('Resposta /products:', data);
            const onlyOffers = data.products.filter(product => product.offer);
            console.log('Ofertas filtradas:', onlyOffers);
            setOffers(onlyOffers);
        }

        loadProducts();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 30 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>Ofertas do dia</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass='carousel-item'
            >
                {offers.map(product => (<ContainerItems key={product.id} $imageUrl={product.url}><p>{product.name}</p></ContainerItems>))}

            </Carousel>
        </Container>
    );
}

