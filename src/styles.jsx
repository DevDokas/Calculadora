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
    width: 550px;
    background-color: red;
`;

export const DisplayContainer = styled.form`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    height: 100px;
    width: 500;
`;

export const Display = styled.input`
border: 5px solid black;
    height: 100px;
    width: 500px;
    font-size:74px;
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
`;

export const Button = styled.button`
    border: 3px solid black;
`;

export const ButtonPlus = styled.button`
    border: 3px solid black;
    grid-column: 4 / 5;
    grid-row: 4 / 6;
`;

export const ButtonClear = styled.button`
    border: 3px solid black;
    grid-column: 1 / 3;
`; 
