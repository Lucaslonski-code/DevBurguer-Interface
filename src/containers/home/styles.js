
import styled from "styled-components";
import BannerHome from '../../assets/homes/BurguerHome.png';
import Background2 from '../../assets/Login/Background2-login-cadastro.png';

export const Main = styled.main`
    height: 100vh;
    width: 100vw;
`;

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-repeat: no-repeat;
    display: flex;
    background-size: cover; 
    background-position: center bottom 38%; 
    height: 40vh;
    width: 100vw;

    h1 {
        font-family: 'Times New Roman', Times, serif;
        font-weight: 600;
        position: absolute;
        font-size: 26px;
        color: #f4f4f4;
        right: 24%;
        top: 10%;
    }

`;

export const Container = styled.section`
    background: #f4f4f4 url('${Background2}');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 70vh;
    max-height: 800px;
    color: #f7f7f7; 
`;

export const Content = styled.div``;
