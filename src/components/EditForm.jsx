import React, { useEffect, useState } from 'react'

//icons
import { CheckIcon } from '@heroicons/react/24/outline'

export const EditForm = ({ editedTask, updateTask }) => {
    const[UpdatedTaskName, setUpdatedTaskName]= useState(editedTask.name);
    
    useEffect(() => {
      const closeModalIfEscaped = (e) => {
        e.key === 'Escape' && closeEditMode()
      }
      window.addEventListener('keydown',closeModalIfEscaped)

      return() => {
        window.removeEventListener('keydown',closeModalIfEscaped)
      }
    
    },[closeEditMode])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: UpdatedTaskName})
        
    }


  return (
    <div role='dialog' aria-labelledby='editTask' 
    onClick={(e)=> {e.target === e.currentTarget && closeEditMode()}}
    >
    <form className='todo' onSubmit={handleFormSubmit}>
        <div className="wrapper">
            <input
            type='text'
            id='editTask'
            className='input'
            value={UpdatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Update Task'
            />
            <label 
            htmlFor='editTask'
            className='label'
            >Enter Task</label>
        </div>
        <button className='btn' aria-label={'Confirm edited task to now read ${updatedTaskName'} type='submit'> <CheckIcon strokeWidth = {2} height ={24} width ={24}/></button>
    </form>
    </div>
  )
}

export default EditForm