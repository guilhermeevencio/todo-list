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

  return (
      <section className={ styles.main }>
      <Form onSetTasks={ setTasks } tasks={ tasks }/>
        <div className={ styles.taskInfos }>
          <div className={ styles.tasks }>
            <p className={ styles.tasksText } >Tarefas cridas</p>
            <p className={ styles.numbers } >{tasks.length}</p>
          </div>
          <div className={ styles.done }>
            <p className={ styles.doneText }>Concluidas</p>
            <p className={ styles.numbers } >{ `${ 2 } de ${ 5 }` }</p>
          </div>
        </div>
      <>
        { 
          tasks.map((task, index) => <ToDo task={ task } key={ index }  />)
        }
      </>
      </section>
  )
}

export default MainContent;