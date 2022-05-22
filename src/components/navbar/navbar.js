import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'
import leave from '../../Assets/leave.png'
let Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.name}>
                <h1>Geekies</h1>
                <img src={leave}></img>
            </div>
            <div className={styles.link}>
                <NavLink to={'/technology'}>Technology</NavLink>
                <NavLink to={'/Anime'}>Anime</NavLink>
                <NavLink to={'/Bollywood'}>Bollywood</NavLink>
            </div>
        </div>
    )
}
export default Navbar