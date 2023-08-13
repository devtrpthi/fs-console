const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "peter"
  const age = 25
  return (
    <div>
      <p>greetings</p>
      <Hello name='Maya' and  age={26+10} />
      <Hello name={name} and age = {age}/>
    </div>
  )
}

export default App
