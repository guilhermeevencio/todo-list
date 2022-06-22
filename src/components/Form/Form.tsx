import styles from './Form.module.css';

function Form() {
  return (
    <form className={ styles.form }>
      <input type="text" name="task" placeholder="Adicione uma nova tarefa"/>
      <div>
        <button>Criar</button>
      </div>
    </form>
  )
}

export default Form;
