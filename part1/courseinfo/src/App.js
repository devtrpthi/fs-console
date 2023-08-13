const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part1} {props.exercises1}</p>
      <p> {props.part2} {props.exercises2}</p>
      <p> {props.part3} {props.exercises3}</p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part1='Fundamentals of React' exercises1={10}/>
      <Part part2 = 'Using props to pass data' exercises2 = {7}/>
      <Part part3 = 'State of a component' exercises3 = {14}/>
    </div>
  )
}

const Render = (props) => {
  return (
    <div>
      <p>total exercises {props.exercises1 + props.exercises2+ props.exercises3} </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header course = 'Half Stack application development'/>
      <Content/>
      <Render exercises1 = {10}  exercises2 = {7} exercises3 = {14}/>
    </div>
  )
}

export default App;
