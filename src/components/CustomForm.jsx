import { PlusIcon } from '@heroicons/react/24/solid'

import React, { useState } from 'react'

export const CustomForm = ({ addTask }) => {
    const[task, setTask]= useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name:task,
            checked: false,
            id: Date.now()
        })
        setTask('')
        console.log(e);
    }


  return (
    <form className='todo' onSubmit={handleFormSubmit}>
        <div className="wrapper">
            <input
            type='text'
            id='task'
            className='input'
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Enter Task'
            />
            <label 
            htmlFor='task'
            className='label'
            >Enter Task</label>
        </div>
        <button className='btn' aria-label='Add Task' type='submit'> <PlusIcon className="size-6 text-blue-500" /></button>
    </form>
  )
}

export default CustomForm