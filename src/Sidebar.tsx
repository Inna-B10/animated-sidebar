import cn from 'clsx'
import { m } from 'framer-motion'
import { useAtom } from 'jotai'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'
import { isCollapsedAtom } from './store'

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed)
	}

	return (
		<m.aside
			className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed })}
			animate={{ width: isCollapsed ? 50 : 224 }}
			transition={{ type: 'spring', stiffness: 300, damping: 23 }}>
			<button className={styles.toggle} onClick={toggleSidebar}>
				{isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
			</button>
			<Menu />
		</m.aside>
	)
}
