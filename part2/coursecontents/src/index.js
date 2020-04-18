import React from 'react';
import ReactDOM from 'react-dom';


const Courses = ({courses}) => {
  return (
    <div>
      {courses.map((course) =>      
        <Course key={course.id} name={course.name} parts={course.parts} />
      )}
    </div>
  )
}
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))