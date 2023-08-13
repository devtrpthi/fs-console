const App = () =>{
  const friends = [
    {name: "joe", age: 36},
    {name: "root", age: 25},
  ]
  return (
    <>
      <p>{friends[0].name} implies {friends[0].age}</p>
      <p>{friends[1].name} implies {friends[1].age}</p>
    </>
  )
}

export default App
