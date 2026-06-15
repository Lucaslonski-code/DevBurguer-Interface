
import styled from "styled-components";
import BannerHome from '../../assets/homes/Home.jpg';
import Background2 from '../../assets/Login/Background2-login-cadastro.png';



export const Main = styled.main`
    height: 100vh;
    width: 100vw;
`;

export const Banner = styled.div`
    background: url('${BannerHome}');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 26%;
    width: 100%;

    h1 {
        font-size: 20px;
        color: #f4f4f4;
        right: 20%;
        top: 10%;
    }

`;

export const Container = styled.section`
    background: linear-gradient(rgba(255, 255, 255 0.5), rgba(255, 255, 255, 0)),  url('${Background2}');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 74%;
    color: #f4f4f4;
`;

export const Content = styled.div``;
