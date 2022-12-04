import React ,{useState} from 'react'
import { OneToDo } from './OneToDo'
import { InputField } from './InputField'

export const ToDolist = () => {

    const [todos , setTodos] = useState([]);
    //Function for adding ToDos in the list
    const addToDo = (todo) => {
        
        

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        
    }
    

    const completeToDo =(id) => {

      let updatedToDos = todos.map(todo => {
        
        return todo;
      })
      setTodos(updatedToDos)
    }    

  return (
    <div className='list_Tod'>
        <InputField onSubmit={addToDo}/>
        <OneToDo todos={todos} completeToDo ={completeToDo}/>
    </div>
  )
}
