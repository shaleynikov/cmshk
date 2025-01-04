import { useState } from 'react'
import './App.css'

function App() {
  const [sequence] = useState([1, 2, 3, 5, 8, 13])
  const [hints] = useState([
    "Start with the smallest positive integer",
    "The next even number after 1",
    "The number of primary colors",
    "Number of fingers on one hand",
    "Number of planets in our solar system (before Pluto was reclassified)",
    "The number of stripes on the US flag"
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState('Start breaking the supercomputer!')
  const [isError, setIsError] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const checkNumber = () => {
    const inputNumber = parseInt(userInput)
    if (inputNumber === sequence[currentIndex]) {
      setMessage(`Correct! ${sequence[currentIndex]} accepted ✅`)
      setIsError(false)
      setCurrentIndex(currentIndex + 1)
      setUserInput('')
      if (currentIndex === sequence.length - 1) {
        setMessage('Supercomputer broken! 🎉 You win!')
      }
    } else {
      setMessage(`Incorrect! ❌ Try again`)
      setIsError(true)
    }
  }

  const getHint = () => {
    return `Hint: ${hints[currentIndex]}`
  }

  return (
    <div className="game-container">
      <h1>Break the Supercomputer! 💥</h1>
      <div className="game-content">
        <p>Enter the next number in the sequence:</p>
        <div className="input-container">
          <input
            type="number"
            value={userInput}
            onChange={handleInput}
            className={isError ? 'error' : ''}
            placeholder="Enter number"
          />
          <button onClick={checkNumber}>Submit</button>
        </div>
        <p className={`message ${isError ? 'error' : ''}`}>{message}</p>
        {isError && <p className="hint">{getHint()}</p>}
        <div className="progress">
          Progress: {currentIndex}/{sequence.length}
        </div>
      </div>
    </div>
  )
}

export default App
