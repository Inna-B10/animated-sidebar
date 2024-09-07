import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Menu />
		</aside>
	)
}
