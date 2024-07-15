import React , {Fragment, useEffect, useState} from "react"

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(function(){
    setInterval(() => { //every 2 seconds the fwtch is called therefore random todos comes in our website evry 10 seconds coz the backend server responds with random set of todos.
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
       const json = await res.json();
       setTodos(json.todos);
      })
    },2000) 
  } , [])

  return <div>
   {todos.map((todo) =>  <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({title,description}){
  return <div>
    <h1>
    {title}
  </h1>
  <h3>
    {description}
  </h3>
  </div>
}

export default App
