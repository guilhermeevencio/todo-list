import styles from './Header.module.css';
import logo from '../../assets/todo-logo.svg'

function Header() {
 return (
  <header className={ styles.header }>
    <img src={ logo }  alt='todo list logo' />
  </header>
 )
}

export default Header;