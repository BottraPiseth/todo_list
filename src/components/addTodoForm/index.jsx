import React, { useState } from 'react'
import useTodoStore from '../../store/todoStore'


const AddTodoForm = () => {
  const[text, setText] = useState('')
  const addTodo = useTodoStore(state=>state.addTodo)

  const hangleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    addTodo(text)
    setText('')
  }

  return (

  <form onSubmit={hangleSubmit} className='flex justify-between p-2'>
      <input className='flex-1 p-2 border rounded' type="text" value={text} onChange={(e)=> setText(e.target.value) } placeholder="Add New Todo"/>
      <button type='submit' className='trasition duration-200 ease-in-out transform bg-green-500 hover:bg-blue-600 text-blue ml-2 p-2 rounded'>
        Add
      </button>
  </form>
  )
}

export default AddTodoForm