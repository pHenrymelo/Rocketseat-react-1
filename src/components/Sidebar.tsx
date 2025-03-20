import styles from './Sidebar.module.css'
import cover from '../assets/cover.jpeg'
import avatar from '../assets/avatar.jpeg'
import { Avatar } from './Avatar'
import { EditIcon } from '../assets/EditIcon'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img src={cover} className={styles.cover} alt="" />
      <div className={styles.profile}>
        <Avatar src={avatar} />
        <strong>Toji Fushiguro</strong>
        <span>The one who left it all behind</span>
      </div>
      <footer>
        <a href="#">
          <EditIcon />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}