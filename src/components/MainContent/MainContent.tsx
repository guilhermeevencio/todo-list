import ToDo from '../ToDo/ToDo';
import Form from '../Form/Form';
import styles from './MainContent.module.css';
import { useState } from 'react';

interface Task {
  taskDescription: string;
  isTaskDone: boolean;
  id: string;
}

function MainContent() {
  const initialState: Task[] = [];
  const [tasks, setTasks] = useState(initialState);
  const [doneTasks, setDoneTasks] = useState(0)

  function isTaskDone(taskId: string, isChecked: boolean) {
    const doneTask = tasks.find(task => task.id === taskId);
    doneTask!.isTaskDone = isChecked;

    const numberOfDoneTasks = tasks.filter(({isTaskDone}) => isTaskDone ).length;
    setDoneTasks(numberOfDoneTasks);
  }

  function deleteTask(taskId: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks)
    
    const numberOfDoneTasks = updatedTasks.filter(({isTaskDone}) => isTaskDone ).length;
    setDoneTasks(numberOfDoneTasks);
  }


  return (
      <section className={ styles.main }>
      <Form onSetTasks={ setTasks } tasks={ tasks }/>
        <div className={ styles.taskInfos }>
          <div className={ styles.tasks }>
            <p className={ styles.tasksText } >Tarefas criadas</p>
            <p className={ styles.numbers } >{tasks.length}</p>
          </div>
          <div className={ styles.done }>
            <p className={ styles.doneText }>Concluidas</p>
            <p className={ styles.numbers } >{ `${ doneTasks } de ${ tasks.length }` }</p>
          </div>
        </div>
      <>
        { 
          tasks.map((task, index) => <ToDo task={ task } key={ index }  isTaskDone={ isTaskDone } deleteTask={ deleteTask } />)
        }
      </>
      </section>
  )
}

export default MainContent;