import React from 'react'

const Course = (props) => {
    return (
      <div>
        <Header name={props.name} />
        <Content parts={props.parts} />
        <Total parts={props.parts} /> 
      </div>
    )
  }
  
  const Header = ({name}) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part) =>
          <Part key={part.id} name = {part.name} exercises={part.exercises} />
        )}
      </div>
    )
  }
  const Part = (part) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Total = ({parts}) => {
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
      <h3>Number of exercises {sum}</h3>
    ) 
  }

  export default Course