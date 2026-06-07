import styled from 'styled-components';

import BackgroundLogin from '../../assets/Login/Background-login-cadastro.jpg';
import BackgroundLogin2 from '../../assets/Login/Background2-login-cadastro.png';


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;

export const LeftContainer = styled.div`
    background-image: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    max-width: 50%;
    min-height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    max-width: 50%;
    min-height: 100%;

    background-image: url('${BackgroundLogin2}');
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0,40%);

    p {
        color: #fff;
        font-size: 14px;
        a {
            color: purple;
            text-decoration: underline;
        }
    }

`;

export const Title = styled.h2`
  color: #fff;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 900;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    
    input {
        width: 100%;
        border: none;
        height: 42px;
        border-radius: 5px;
        padding: 0px 10px;
    }

    label {
        font-size: 18px;
        font-weight: 800;
        color: #fff;
    }
`;

export const Span = styled.span`
    color: purple;
`;

export const Link = styled.a`
    color: #fff;
    font-size: 12px;
    margin-top: -20px;

    Link:hover {
        text-decoration: underline;
    }
`;

export const Button = styled.button`
    font-size: 14px;
    width: 100%;
    max-width: 140px;
    height: 26px;
    margin: -4px;
`;