
import {useState} from 'react'
import './App.css'
import Employee from './employee'
function App() {
  const [count,setCount]= useState(0)
  const AddCount=()=>{
    setCount(count+1)
    console.log(count)
  }
  let employ=[{name:'yatin',age:21},{name:'amith',age:21},{name:'midhun',age:21},{name:'kichu',age:20}]

  return (
    <div>
      <button onClick={AddCount}>ADD</button>
      {
        employ.map((obj)=>{
          return(
            <Employee name={obj.name} age={obj.age} />)
        })
      }
      
    </div>
  );
}

export default App;
