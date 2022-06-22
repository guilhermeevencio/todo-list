import styles from './ToDo.module.css';
import trashIcon from '../../assets/trash-icon.svg';

function ToDo() {  
  return (
    <div className={ styles.ToDo }>
      <label htmlFor="check1" className={ styles.task }>
        <input type="checkbox" id="check1" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas quia alias.</p>
      </label>
      <img src={ trashIcon } />
    </div>
  )
}

export default ToDo;