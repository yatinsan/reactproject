
import { useState } from 'react'
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
        <i onClick={() => { setToDos([...toDos, { id: Date.now, text: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input value={obj.status}
                  onChange={(e) => {
                    console.log(e.target.checked)
                    
                    setToDos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                       obj2.status=e.target.checked
                      }
                      return obj2
                    }))
                    console.log(obj)
                  }} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}
export default App;
