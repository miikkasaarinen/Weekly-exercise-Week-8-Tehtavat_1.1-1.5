const Header = (prop) => {
    return (
      <div>
        <h1>{prop.header}</h1>
      </div>
    )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )

}

const Content = (props) => {
    return(
      <div>
        <Part part={props.parts1.name} exercises={props.parts1.exercises} />
        <Part part={props.parts2.name} exercises={props.parts2.exercises} />
        <Part part={props.parts3.name} exercises={props.parts3.exercises} />
      </div>
    )
}

const Total = (prop) => {
  return(
    <div>
    <p>Number of exercises {prop.num}</p>
    </div>
  )
}

const App = (props) => {
  const course = {
  name: 'Half Stack application development',
  parts: [ 
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]
}
  return (
    <div>
      <Header header={course.name} />
      <Content parts1={course.parts[0]} parts2={course.parts[1]} parts3={course.parts[2]} />
      <Total num={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App