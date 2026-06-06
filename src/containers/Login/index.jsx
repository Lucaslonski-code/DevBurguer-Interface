
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link, Button } from "./styles";

import Logo from '../../assets/Login/Logo.png';

export function Login() { 

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="LogoDevBurguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem-vindo ao <span>DevBurguer</span>! Acesse com seu <span>Login e senha.</span>
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
                <Link>Não tem uma conta? Cadastre-se</Link>
            </RightContainer>
        </Container>
    );
}