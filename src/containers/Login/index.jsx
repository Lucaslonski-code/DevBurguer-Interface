
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from "yup";

import Logo from '../../assets/Login/Logo.png';
import { Button } from "../../components/Button";
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link, Span } from "./styles";
import { useNavigate } from "react-router-dom";

import { api } from '../../services/api.js'

export function Login() {

    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().required("Email é obrigatório").email("Digite um email válido"),
        password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
    }).required();

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        const { data: { token }, } = await toast.promise(
            api.post('/sessions', {
            email: data.email,
            password: data.password,
            }),
            {
                pending: 'Verificando seus dados',
                success: () => {
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                    return 'Login realizado com sucesso!';
                },
                error: 'Email ou senha incorretos'
            },
        );

        localStorage.setItem('token', token);
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
                        <input type="email" placeholder="Digite seu email" {...register("email")} />
                        <p>{errors?.Email?.message}</p>
                         {/* ELVIS OPERATOR para verificar se existe a propriedade message dentro do objeto errors.Email, caso exista, exibe a mensagem de erro correspondente ao campo Email.  */}
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("password")} />
                        <p>{errors?.Senha?.message}</p>
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <Button type="submit" href='/home'>Entrar</Button>
                </Form>
                <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
            </RightContainer>
        </Container>
    );
}
