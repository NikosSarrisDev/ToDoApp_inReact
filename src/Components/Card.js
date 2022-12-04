import React from 'react'
import { InputField } from './InputField'
import { ToDolist } from './ToDolist'

export const Card = () => {
  return (
    <div className='parent_of_Card'>
        <div className='div_basic_card_class'>
            <div className='inside_Card'>What's up for today</div>
            <InputField />            
            <ToDolist/>
        </div>
    </div>
  )
}
