import React from "react"
import Head from 'next/head'
import axios from 'axios'




const Home = () =>{ 
  const [todo, setTodo] = React.useState('')
  const [todos, setTodos] = React.useState([])
  // React.useEffect( () => {
  //   axios.get("api/getTodos").then( res => {

  //     setTodos(res);
  //   }).catch( error => {
  //     console.log("--------")
  //     console.log(error)
  //   })
  // },
  
  // [todo])
  return(

  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
  <form onSubmit = {(e) => {
    e.preventDefault();
    axios.post("/api/addTodo",{body :{
      id : Math.random()*500,
      todo : todo
    }} ).then(() => {
      setTodo('')
    })
    }}>
    <input type ="text" name="basd" value= {todo} onChange = { (e) => setTodo(e.target.value)  }/>
    <button type="submit">Add Todo</button>
  </form>

 


   
  </div>
)}

export default Home
