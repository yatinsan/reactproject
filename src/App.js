
import { React, useState, } from 'react'
import './App.css'

function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input value={obj.status}
                  onChange={(e) => {
                    console.log(obj.id)
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => {
                  setToDos(toDos.filter(obj3 => {

                    return obj3 !== obj
                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
      </div>
      <div className="didlist">
       <h1>completed</h1>
        {toDos.map((obj) => {
          console.log(obj.text)
          console.log(obj.status)
          if (obj.status) {
            return (
              <div className="acc">
              <div className="todo">
                <div className="left">
                  
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                </div>
              </div>
              </div>)
          }
          return null
        })}
         <h1>not completed</h1>
        {toDos.map((obj) => {
          console.log(obj.text)
          console.log(obj.status)
          if (!obj.status) {
            return (
              <div className="notacc">
              <div className="todo">
                <div className="left">
                  
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                </div>
              </div>
              </div>)
          }
          return null
        })}
      </div>
    </div>

  )
}
export default App;
