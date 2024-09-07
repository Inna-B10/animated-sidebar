import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useState } from 'react'
import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false)

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed)
	}
	return (
		<aside className={styles.sidebar}>
			<button className={styles.toggle} onClick={toggleSidebar}>
				{isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
			</button>
			<Menu />
		</aside>
	)
}
