import styled from 'styled-components';

export const ContainerButton = styled.button`
    background-color: #9758A6;
    width: 100%;
    max-width: 200px;
    height: 38px;
    border-radius: 10px;
    border: none;
    font-family: "Playfair Display", serif;
    font-size: 18px;
    color: #fff;
    font-weight: 700;   
    margin: -5px 0px;

    &:hover {
        background-color: #7A3E8C;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='9' ry='9' stroke='black' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='11' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 9px;
        color: #f0f8f0;
    }
`;
