import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (<button onClick={onClick}> {text} </button>)

const Statistics = ({good, neutral, bad}) => {
  console.log(good, neutral, bad)
  return (
    <>
    <h1>Statistics</h1>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>All {good+neutral+bad}</p>
    <p>Average {(good * 1 + bad * (-1)) / (good+neutral+bad)}</p>
    <p>Positive {good * 100 / (good+neutral+bad)}%</p> */}
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    (setGood(good + 1))
  }

  const neutralClick = () => {
    (setNeutral(neutral + 1))
  }

  const badClick = () => {
    (setBad(bad + 1))
  }

  return (
    <div>
    <h1>Give Feedback</h1>
    <Button onClick={goodClick} text='GOOD' />
    <Button onClick={neutralClick} text='NEUTRAL' />
    <Button onClick={badClick} text='BAD' />
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))