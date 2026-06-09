
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import Logo from '../../assets/Login/Logo.png';

import { Button } from "../../components/Button";
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link, Span } from "./styles";

export function Login() {

    const schema = yup.object({
        Email: yup.string().required().email(),
        Senha: yup.string().min(6).required(),
    }).required();

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
       console.log(data);
    };

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" {...register("Email")} />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("Senha")} />
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
            </RightContainer>
        </Container>
    );
}
