import React, {useState} from 'react'

import {
  Container, 
  Calculadora, 
  DisplayContainer, 
  Display, 
  Body, 
  ButtonContainer, 
  Button, 
  ButtonPlus,
  ButtonClear
} from './styles'

function App() {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Error")
    }
  }
  return (
    <Container>
      <Calculadora>
        <DisplayContainer>
          <Display type="text" value={result} />
        </DisplayContainer>

        <Body>
          <ButtonContainer>
            <ButtonClear onClick={clear}>Clear</ButtonClear>
            <Button onClick={backspace}>C</Button>
            <Button name='/' className='/' onClick={handleClick}>&divide;</Button>
            <Button name='7' className='7' onClick={handleClick}>7</Button>
            <Button name='8' className='8' onClick={handleClick}>8</Button>
            <Button name='9' className='9' onClick={handleClick}>9</Button>
            <Button name='*' className='*' onClick={handleClick}>&times;</Button>
            <Button name='4' className='4' onClick={handleClick}>4</Button>
            <Button name='5' className='5' onClick={handleClick}>5</Button>
            <Button name='6' className='6' onClick={handleClick}>6</Button>
            <Button name='-' className='-' onClick={handleClick}>&ndash;</Button>
            <Button name='1' className='1' onClick={handleClick}>1</Button>
            <Button name='2' className='2' onClick={handleClick}>2</Button>
            <Button name='3' className='3' onClick={handleClick}>3</Button>
            <ButtonPlus name='+' className='+' onClick={handleClick}>+</ButtonPlus>
            <Button name='0' className='0' onClick={handleClick}>0</Button>
            <Button name='.' className='.' onClick={handleClick}>.</Button>
            <Button onClick={calculate}> = </Button>
          </ButtonContainer>
        </Body>
      </Calculadora>
    </Container>
  );
}

export default App;
