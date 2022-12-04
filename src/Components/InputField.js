import React,{useState} from 'react'
import { ButtonAddTodo } from './ButtonAddTodo'

export const InputField = (props) => {

  const [input , setInput] = useState("");

  const WheninputChange = (event) => {

    setInput(event.target.value);

  }

  const AddAnewToDoHandler = (event) => {

    event.preventDefault();

    props.onSubmit({
      id : Math.floor(Math.random()*10000),
      text : input
    })
    
    setInput("");

  }

  return (
    <div>
      <form onSubmit={AddAnewToDoHandler}>
        <input className='input_field_Class' type="text" onChange={WheninputChange} value={input}></input>
        <ButtonAddTodo />
      </form>
    </div>
  )
}
