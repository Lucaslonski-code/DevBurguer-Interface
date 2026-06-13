
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from "yup";

import Logo from '../../assets/Login/Logo.png';
import { Button } from "../../components/Button/index.jsx";
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link, Span } from "./styles.js";

import { api } from '../../services/api.js'

export function Register() {

    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().required("Email é obrigatório").email("Digite um email válido"),
        password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
        confirmarSenha: yup.string().oneOf([yup.ref('Senha')], 'As senhas devem ser iguais').required('Confirme sua senha')
    }).required();

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        const response = await toast.promise(
            api.post('/users', {
            name: data.name,
            email: data.email,
            password: data.password,
            }),
            {
                pending: 'Verificando seus dados',
                sucess: 'Cadastro efetuado com sucesso',
                error: 'Algo deu errado, tente novamente'
            }
        )};

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
                    <input type="text" placeholder="Digite seu nome" {...register("Name")} />
                    <p>{errors?.name?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" {...register("Email")} />
                        <p>{errors?.email?.message}</p>
                         {/* ELVIS OPERATOR para verificar se existe a propriedade message dentro do objeto errors.Email, caso exista, exibe a mensagem de erro correspondente ao campo Email.  */}
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("Senha")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                    <label>Confirmar Senha</label>
                    <input type="password" placeholder="Digite sua senha novamente" {...register("ConfirmarSenha")} />
                    <p>{errors?.confirmarSenha?.message}</p>
                    </InputContainer>
                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>Já possui conta? <a href="/sessions">Cadastre-se</a></p>
            </RightContainer>
        </Container>
    );
}
