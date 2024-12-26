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
            <NavLink to = '/usuarios' className={({isActive})=>(isActive ? styles.active : '')}>Usuario</NavLink>
        </li>
        <li>
            <NavLink to = '/livros' className={({isActive})=>(isActive ? styles.active : '')}>Livros</NavLink>
        </li>
        <li>
            <NavLink to = '/locacoes' className={({isActive})=>(isActive ? styles.active : '')}>Locações</NavLink>
        </li>
        <li>
            <NavLink to = '/sobre' className={({isActive})=>(isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
    </ul>
    </nav>
  )
}

export default NavBar
