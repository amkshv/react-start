import React from 'react'

export default function User(props) {
  let { name, age } = props.data;
  return (
    <div className="person">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <button onClick={props.callback}>Delete</button>
    </div>
  )
}
