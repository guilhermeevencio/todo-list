import styles from './Form.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import plusIcon from '../../assets/plus-icon.svg';
import { v4 as uuid } from 'uuid';

interface FormProps {
  onSetTasks: (tasks: Task[]) => void;
  tasks: Task[];
}

interface Task {
  taskDescription: string;
  isTaskDone: boolean;
  id: string;
}

function Form({ onSetTasks, tasks }: FormProps) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const updatedtTasks: Task[] = [...tasks, { taskDescription: taskText, isTaskDone: false, id: uuid() }];
    onSetTasks(updatedtTasks);
    setTaskText('');
  }

  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTaskText(event.target.value);
  }

  return (
    <form className={ styles.form }>
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        onChange={ handleChange }
        value={ taskText }
      />
      <div>
        <button type="submit" onClick={ handleSubmit } >
          Criar
          <img  src={ plusIcon } alt="plus icon" />
        </button>
      </div>
    </form>
  )
}

export default Form;
