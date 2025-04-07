import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.link_list}>
        <li>
            <NavLink to = '/' className={({isActive})=>(isActive ? styles.active : '')}>Inicio</NavLink>
        </li>
        <li>
            <NavLink to = '/clientes' className={({isActive})=>(isActive ? styles.active : '')}>Cliente</NavLink>
        </li>
        <li>
            <NavLink to = '/livros' className={({isActive})=>(isActive ? styles.active : '')}>Livros</NavLink>
        </li>
        <li>
            <NavLink to = '/emprestimos' className={({isActive})=>(isActive ? styles.active : '')}>Empréstimos</NavLink>
        </li>
        <li>
            <NavLink to = '/sobre' className={({isActive})=>(isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
    </ul>
    </nav>
  )
}

export default NavBar
