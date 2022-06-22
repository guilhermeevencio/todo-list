import ToDo from "../ToDo/ToDo";
import styles from './MainContent.module.css';

function MainContent() {
  return (
    <section className={ styles.main }>
      <div className={ styles.taskInfos }>
        <div className={ styles.tasks }>
          <p className={ styles.tasksText } >Tarefas criadas</p>
          <p className={ styles.numbers } >{5}</p>
        </div>
        <div className={ styles.done }>
          <p className={ styles.doneText }>Concluidas</p>
          <p className={ styles.numbers } >{ `${ 2 } de ${ 5 }` }</p>
        </div>
      </div>
      <ToDo />
    </section>
  )
}

export default MainContent;