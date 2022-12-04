import React,{useState} from 'react'
import { ToDolist } from './ToDolist'

export const OneToDo = ({todos , completeToDo}) => {

const [edit , setEdit] = useState({
  id : null,
  value : ""
})



  return todos.map((todo , index) => {
    <div className='class_for_each_ToDo' onClick={() => completeToDo(todo.id)}>
      {todo.text}
    </div>
    


  }
  )
}
