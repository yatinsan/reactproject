import React from 'react'

const Employee = (props) => {
    return (
        <div>
            <h1>Name: {props.name}  age: {props.age}</h1>
        </div>
    )
}

export default Employee
