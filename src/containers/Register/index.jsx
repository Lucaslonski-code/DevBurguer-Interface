import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from "yup";

import Logo from '../../assets/Login/Logo.png';
import { Button } from "../../components/Button/index.jsx";
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles.js";
import { Link as ReactLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api.js'

export function Register() {
    const navigate = useNavigate();

    // Definição do schema Yup com os nomes dos campos em minúsculo
    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().required("Email é obrigatório").email("Digite um email válido"),
        password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
        confirmarSenha: yup.string()
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
            .required('Confirme sua senha')
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    // Função chamada no submit do formulário
    const onSubmit = async (data) => {
        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            }, {
                validateStatus: () => true,
            });

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Conta criada com sucesso!');
            } else if (status === 409) {
                toast.error('Email já cadastrado! Faça o login para continuar');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('Falha no sistema, tente novamente');
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="LogoDevBurguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Criar Conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" placeholder="Digite seu nome" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" placeholder="Digite sua senha novamente" {...register("confirmarSenha")} />
                        <p>{errors?.confirmarSenha?.message}</p>
                    </InputContainer>
                    <Button type="submit">Criar Conta</Button>
                </Form>

                <p>Já possui uma conta? <Link to="/sessions">Faça login</Link></p>

            </RightContainer>
        </Container>
    );
}

