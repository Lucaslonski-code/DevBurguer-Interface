import { CategoriesCarousel } from '../../components/CategoriesCarousel/index.jsx';
import { Main, Banner, Content, Container } from './styles.js';

export function Home () {

    return (
        <Main>
            <Banner>
            <h1>Bem-vindo(a)!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel></CategoriesCarousel>
                    <div>Carossel Produtos</div>
                </Content>
            </Container>

        </Main>
    )
}
