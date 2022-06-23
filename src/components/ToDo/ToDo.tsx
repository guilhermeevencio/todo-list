import styles from './ToDo.module.css';
import trashIcon from '../../assets/trash-icon.svg';
import { ChangeEvent, useState } from 'react';

interface Task {
  taskDescription: string;
  isTaskDone: boolean;
  id: string;
}

interface toDoProps {
  task: Task;
  isTaskDone: (taskId: string, isChecked: boolean) => void;
  deleteTask: (taskId: string) => void;
}

function ToDo({ task, isTaskDone, deleteTask }: toDoProps) {
  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleDoneTask(event: ChangeEvent<HTMLInputElement>) {
    isTaskDone(event.target.id, event.target.checked);
  }

  return (
    <div className={ styles.ToDo }>
      <label htmlFor={ task.id } className={ styles.task }>
        <input
          type="checkbox"
          id={ task.id }
          defaultChecked={ task.isTaskDone }
          onChange= { handleDoneTask }
        />
        <p>{task.taskDescription}</p>
      </label>
      <button
        type='button'
        onClick={ handleDeleteTask }
      >
        <img src={ trashIcon } />
      </button>
    </div>
  )
}

export default ToDo;