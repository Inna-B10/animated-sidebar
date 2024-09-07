import styles from './../Sidebar.module.scss'
import { MENU } from './menu.data'
import MenuItem from './MenuItem'

export default function Menu() {
	return (
		<nav className={styles.menu}>
			{MENU.map(item => (
				<MenuItem key={item.link} item={item} />
			))}
		</nav>
	)
}
