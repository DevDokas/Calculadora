import React, {useState} from 'react'

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
    <>
      <div>
        <form>
          <input type="text" value={result} />
        </form>

        <div>
          <button onClick={clear}>Clear</button>
          <button onClick={backspace}>C</button>
          <button name='/' className='/' onClick={handleClick}>&divide;</button>
          <button name='7' className='7' onClick={handleClick}>7</button>
          <button name='8' className='8' onClick={handleClick}>8</button>
          <button name='9' className='9' onClick={handleClick}>9</button>
          <button name='*' className='*' onClick={handleClick}>&times;</button>
          <button name='4' className='4' onClick={handleClick}>4</button>
          <button name='5' className='5' onClick={handleClick}>5</button>
          <button name='6' className='6' onClick={handleClick}>6</button>
          <button name='-' className='-' onClick={handleClick}>&ndash;</button>
          <button name='1' className='1' onClick={handleClick}>1</button>
          <button name='2' className='2' onClick={handleClick}>2</button>
          <button name='3' className='3' onClick={handleClick}>3</button>
          <button name='+' className='+' onClick={handleClick}>+</button>
          <button name='0' className='0' onClick={handleClick}>0</button>
          <button name='.' className='.' onClick={handleClick}>.</button>
          <button onClick={calculate}> = </button>
        </div>
      </div>
    </>
  );
}

export default App;
