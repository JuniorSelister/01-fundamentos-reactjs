import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import batman from '../assets/batman-avatar.png'
import Avatar from './Avatar';

const Sidebar = () => {
 return (
  <aside className={styles.sidebar}>
    <img className={styles.cover} src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

    <div className={styles.profile}>
      <Avatar avatar={batman} />
      <strong>Bruce Wayne</strong>
      <span>CEO at Wayne's Corporation</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size='20' />
        Editar seu perfil
      </a>
    </footer>
  </aside>
 );
}

export default Sidebar;