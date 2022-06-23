import styles from './ToDo.module.css';
import trashIcon from '../../assets/trash-icon.svg';

interface Task {
  taskDescription: string;
  isTaskDone: boolean;
  id: string;
}

interface toDoProps {
  task: Task;
  // onHandleDeleteTask: (id: string) => void;
}

function ToDo({ task }: toDoProps) {
  // function handleDeleteTask() {
  //   onHandleDeleteTask(task.id);
  // }

  return (
    <div className={ styles.ToDo } id={ task.id }>
      <label htmlFor="check1" className={ styles.task }>
        <input type="checkbox" id="check1" defaultChecked={ task.isTaskDone }/>
        <p>{task.taskDescription}</p>
      </label>
      <button
        type='button'
        // onChange={ handleDeleteTask }
      >
        <img src={ trashIcon } />
      </button>
    </div>
  )
}

export default ToDo;