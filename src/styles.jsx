import styled from "styled-components";

export const Container = styled.section`
    
    display: flex;
    justify-content: center;
`;

export const Calculadora = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 200px;
    height: 800px;
    width: 560px;
    border-radius: 3vh;
    background-color: #0a0a0a;
`;

export const DisplayContainer = styled.form`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    height: 120px;
    width: 500;
    border-radius: 1vh;
`;

export const Display = styled.input`
    font-family: 'Graduate', cursive;
    border: 0;
    height: 120px;
    width: 500px;
    font-size:64px;
    margin: 0;
    border-radius: 1vh;
`;

export const Body = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    height: 600px;
    width: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 7px;
    border-radius: 1vh;
`;

export const Button = styled.button`
    border: 0;
    border-radius: 1vh;
    font-family: "Josefin Sans", sans-serif;
    font-size: 50px;
    font-weight: 500;
    background-color: #343537;
`;

export const ButtonPlus = styled.button`
    border: 0;
    grid-column: 4 / 5;
    grid-row: 4 / 6;
    border-radius: 1vh;
    font-family: "Josefin Sans", sans-serif;
    font-size: 50px;
    font-weight: 500;
    background-color: #fa9712;
`;

export const ButtonClear = styled.button`
    border: 0;
    grid-column: 1 / 3;
    border-radius: 1vh;
    font-family: "Josefin Sans", sans-serif;
    font-size: 34px;
    font-weight: 500;
    color: #141414;
    background-color: #d2d2d2;
`; 
