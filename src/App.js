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
  console.log(props)
    return(
      <div>
        <Part part={props.part1.name} exercises={props.part1.exercises} />
        <Part part={props.part2.name} exercises={props.part2.exercises} />
        <Part part={props.part3.name} exercises={props.part3.exercises} />
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header header={course} />
      <Content part1={part1} exercises1={part1} part2={part2} exercises2={part2} part3={part3} exercises3={part3}/>
      <Total num={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App