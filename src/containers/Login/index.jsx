
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link, Button, Span } from "./styles";

import Logo from '../../assets/Login/Logo.png';

export function Login() { 

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="LogoDevBurguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem-vindo ao <Span>DevBurguer</Span>!
                    <br></br>
                    Acesse com seu <Span>Login e senha.</Span>
                </Title>
                <Form>
                    <InputContainer>
                    <label>Email</label>
                    <input type="email" placeholder="Digite seu email" />
                    </InputContainer>
                    <InputContainer>
                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha" />
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <Button>Entrar</Button>
                </Form>
                <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
            </RightContainer>
        </Container>
    );
}