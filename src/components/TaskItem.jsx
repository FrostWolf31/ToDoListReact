import { useState } from 'react';
//styles
import styles from './TaskItem.module.css';

//icons
import { CheckIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid';

const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked]= useState(task.checked);

    const handleCheckboxChange = (e) =>{
        setIsChecked(!isChecked);
        toggleTask(task.id)
    }

  return (
    <div>
        <li className={styles.task}>
           <div className={styles["task-group"]}>
            <input
             type='checkbox'
             className={styles.checkbox}
             checked={isChecked}
             onChange={handleCheckboxChange}
             name = {task.name}
             id={task.id}
            />
            <label 
            htmlFor={task.id}
            className={styles.label}
            >
            {task.name}    
            <p className={styles.checkmark}>
                <CheckIcon strokeWidth={2} width={24} height={24}/>
            </p>
            </label>          
            </div> 
            <div className={styles['task-group']}>
                <button className='btn' aria-label={'Update $(task.name} Task'} 
                onClick={() => enterEditMode(task)}
                >
                     <PencilIcon width={24} height={24}/>
                </button>

                <button className={'btn ${styles.delete}'} 
                aria-label={'Delete $(task.name} Task'} 
                onClick={()=>deleteTask(task.id)}
                >
                     <TrashIcon width={24} height={24}/>
                </button>
            </div>

            
        </li>    
    </div>
  )
}

export default TaskItem
