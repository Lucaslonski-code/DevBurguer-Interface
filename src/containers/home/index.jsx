import { Main, Banner, Content, Container } from './styles.js'

export function Home () {

    return (
        <Main>
            <Banner>
            <h1>Bem-vindo(a)!</h1>
            </Banner>
            <Container>
                <Content>
                    <div>Carossel Categorias</div>
                    <div>Carossel Produtos</div>
                </Content>
            </Container>

        </Main>
    )
}
