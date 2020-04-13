import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (<button onClick={onClick}> {text} </button>)

const Statistic = ({ text, value }) => <p>{text}{value}</p>

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
    <>
    <h1>Statistics</h1>
    <p>No feedback given</p>
    </>
    )
  }

  return (
    <>
    <h1>Statistics</h1>
    <Statistic text="Good " value={good} />
    <Statistic text="Neutral " value={neutral} />
    <Statistic text="Bad " value={bad} />
    <Statistic text="All " value={good+neutral+bad} />
    <Statistic text="Average " value={(good * 1 + bad * (-1)) / (good+neutral+bad)} />
    <Statistic text="Positive " value={good * 100 / (good+neutral+bad) +"%"} />
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